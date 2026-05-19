import { useParams, Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { projects } from '../data/projects';
import SectionBlock from '../components/common/SectionBlock';
import './CaseStudy.css';

/* ── Section nav mapping ─────────────────────── */
const SECTION_ORDER = [
    { type: 'overview',  label: 'Overview'      },
    { type: 'problem',   label: 'Problem'        },
    { type: 'goals',     label: 'Complexity'     },
    { type: 'approach',  label: 'Approach'       },
    { type: 'role',      label: 'UX Decisions'   },
    { type: 'personas',  label: 'Users'          },
    { type: 'workflow',  label: 'Workflow'        },
    { type: 'screens',   label: 'Prototype'      },
    { type: 'outcomes',  label: 'Impact'         },
    { type: 'reflection',label: 'Reflection'     },
];

/* Per-project stat bar data */
const PROJECT_STATS: Record<string, { value: string; label: string }[]> = {
    'supplier-onboarding': [
        { value: '78%',  label: 'Faster onboarding'  },
        { value: '500+', label: 'Suppliers impacted'  },
        { value: '5×',   label: 'Approval speed'      },
        { value: '8 mos',label: 'Duration'            },
    ],
    'jio-world-centre': [
        { value: '0',    label: 'Booking conflicts'   },
        { value: '3×',   label: 'Faster turnaround'   },
        { value: '80%',  label: 'Fewer queries'       },
        { value: '6+ mos',label: 'Duration'           },
    ],
};

export default function CaseStudy() {
    const { id } = useParams<{ id: string }>();
    const project = projects.find((p) => p.id === id);
    const [activeSection, setActiveSection] = useState<string>('');
    const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());
    const bodyRef = useRef<HTMLDivElement>(null);

    /* Scroll-spy */
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
        );
        sectionRefs.current.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [project]);

    /* Scroll reveal */
    useEffect(() => {
        const io = new IntersectionObserver(
            (entries) => entries.forEach(e => {
                if (e.isIntersecting) e.target.classList.add('is-visible');
            }),
            { threshold: 0.08, rootMargin: '0px 0px -48px 0px' }
        );
        document.querySelectorAll('.cs-reveal').forEach(el => io.observe(el));
        return () => io.disconnect();
    }, [project]);

    if (!project) {
        return (
            <div className="case-study case-study--not-found">
                <h1>Project not found</h1>
                <p>The case study you're looking for doesn't exist.</p>
                <Link to="/work" className="cs-back-link">← Back to Work</Link>
            </div>
        );
    }

    /* Build side-nav items from sections that exist */
    const navItems = SECTION_ORDER.filter(nav =>
        project.sections.some(s => s.type === nav.type)
    );

    const scrollTo = (sectionId: string) => {
        const el = sectionRefs.current.get(sectionId);
        if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 96;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    return (
        <article className={`case-study-v2 ${project.id === 'jio-world-centre' ? 'case-study--jwc' : ''}`}>

            {/* ── Hero ── */}
            <header className="cs-hero">
                <div className="cs-hero__inner">
                    <Link to="/work" className="cs-back-link">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Back to Work
                    </Link>

                    <div className="cs-hero__chips">
                        <span className="cs-chip">{project.role}</span>
                        <span className="cs-chip">{project.duration}</span>
                        <span className="cs-chip">{project.platform}</span>
                    </div>

                    <h1 className="cs-hero__title">{project.title}</h1>
                    <p className="cs-hero__description">{project.description}</p>
                    {project.subtitle && (
                        <p className="cs-hero__subtitle">{project.subtitle}</p>
                    )}

                    {/* Quick stat bar */}
                    {PROJECT_STATS[project.id] && (
                        <div className="cs-stat-bar">
                            {PROJECT_STATS[project.id].map((stat, i, arr) => (
                                <>
                                    <div key={stat.label} className="cs-stat">
                                        <span className="cs-stat__value">{stat.value}</span>
                                        <span className="cs-stat__label">{stat.label}</span>
                                    </div>
                                    {i < arr.length - 1 && <div className="cs-stat__divider" />}
                                </>
                            ))}
                        </div>
                    )}
                </div>
            </header>

            <div className="cs-divider" />

            {/* ── Body: sidebar + content ── */}
            <div className="cs-layout" ref={bodyRef}>

                {/* Side nav */}
                <aside className="cs-sidebar" aria-label="Case study navigation">
                    <div className="cs-sidebar__inner">
                        <p className="cs-sidebar__label">Contents</p>
                        <nav className="cs-nav">
                            {navItems.map((item) => {
                                const section = project.sections.find(s => s.type === item.type);
                                if (!section) return null;
                                const isActive = activeSection === section.id;
                                return (
                                    <button
                                        key={section.id}
                                        className={`cs-nav__item ${isActive ? 'cs-nav__item--active' : ''}`}
                                        onClick={() => scrollTo(section.id)}
                                    >
                                        <span className="cs-nav__dot" />
                                        {item.label}
                                    </button>
                                );
                            })}
                        </nav>
                    </div>
                </aside>

                {/* Main content */}
                <main className="cs-content">
                    {project.sections.map((section, index) => (
                        <div
                            key={section.id}
                            id={section.id}
                            ref={(el) => { if (el) sectionRefs.current.set(section.id, el as HTMLElement); }}
                            className="cs-section cs-reveal"
                            style={{ transitionDelay: `${index * 0.04}s` }}
                        >
                            {/* Section label pill */}
                            <div className="cs-section__label-row">
                                <span className="cs-section__label">
                                    {SECTION_ORDER.find(n => n.type === section.type)?.label ?? section.type}
                                </span>
                            </div>

                            <SectionBlock section={section} />
                        </div>
                    ))}
                </main>
            </div>
        </article>
    );
}
