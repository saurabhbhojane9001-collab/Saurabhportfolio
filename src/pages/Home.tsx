import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Search, GitBranch, Layers, LayoutTemplate,
    MonitorSmartphone, CheckCircle, ArrowRight,
    Mail, FileText
} from 'lucide-react';
import { showcaseProjects } from '../data/showcaseProjects';
import MockupShowcase from '../components/common/MockupShowcase';
import './Home.css';

/* ── Animated Dashboard Visual ── */
function DashboardVisual() {
    return (
        <div className="hero__dashboard" aria-hidden="true">
            {/* Grid lines */}
            <div className="hero__grid-lines" />

            {/* Main dashboard card */}
            <div className="hero__db-card hero__db-card--main">
                <div className="hero__db-header">
                    <div className="hero__db-dots">
                        <span /><span /><span />
                    </div>
                    <span className="hero__db-title-bar">Procurement Dashboard</span>
                </div>
                <div className="hero__db-content">
                    <div className="hero__db-stat">
                        <div className="hero__db-stat-value hero__db-stat-value--accent">78%</div>
                        <div className="hero__db-stat-label">Faster Onboarding</div>
                    </div>
                    <div className="hero__db-stat">
                        <div className="hero__db-stat-value">500+</div>
                        <div className="hero__db-stat-label">Active Suppliers</div>
                    </div>
                    <div className="hero__db-stat">
                        <div className="hero__db-stat-value hero__db-stat-value--blue">5×</div>
                        <div className="hero__db-stat-label">Approval Speed</div>
                    </div>
                    <div className="hero__db-chart">
                        <div className="hero__db-bar" style={{ '--bar-h': '40%' } as React.CSSProperties} />
                        <div className="hero__db-bar" style={{ '--bar-h': '65%' } as React.CSSProperties} />
                        <div className="hero__db-bar" style={{ '--bar-h': '50%' } as React.CSSProperties} />
                        <div className="hero__db-bar hero__db-bar--accent" style={{ '--bar-h': '85%' } as React.CSSProperties} />
                        <div className="hero__db-bar" style={{ '--bar-h': '60%' } as React.CSSProperties} />
                        <div className="hero__db-bar hero__db-bar--accent" style={{ '--bar-h': '92%' } as React.CSSProperties} />
                        <div className="hero__db-bar" style={{ '--bar-h': '70%' } as React.CSSProperties} />
                    </div>
                </div>
            </div>

            {/* Floating status card */}
            <div className="hero__db-card hero__db-card--status">
                <div className="hero__db-status-dot hero__db-status-dot--green" />
                <div>
                    <div className="hero__db-status-label">Supplier #1248</div>
                    <div className="hero__db-status-sub">Approved · MDM Level 2</div>
                </div>
            </div>

            {/* Floating workflow card */}
            <div className="hero__db-card hero__db-card--flow">
                <div className="hero__db-flow-steps">
                    <div className="hero__db-flow-step hero__db-flow-step--done">Invite</div>
                    <div className="hero__db-flow-arrow">→</div>
                    <div className="hero__db-flow-step hero__db-flow-step--done">Review</div>
                    <div className="hero__db-flow-arrow">→</div>
                    <div className="hero__db-flow-step hero__db-flow-step--active">Approve</div>
                    <div className="hero__db-flow-arrow">→</div>
                    <div className="hero__db-flow-step">SAP</div>
                </div>
            </div>

            {/* Floating AI chip */}
            <div className="hero__db-card hero__db-card--ai">
                <span className="hero__db-ai-dot" />
                <span className="hero__db-ai-label">AI Compliance Check</span>
                <span className="hero__db-ai-badge">Live</span>
            </div>
        </div>
    );
}

/* ── Process Steps ── */
const processSteps = [
    { icon: <Search size={20} strokeWidth={1.5} />, step: '01', title: 'Research', desc: 'Stakeholder interviews, workflow shadowing, and competitive analysis to uncover systemic pain points.' },
    { icon: <GitBranch size={20} strokeWidth={1.5} />, step: '02', title: 'Workflow Mapping', desc: 'Visualizing end-to-end processes, decision trees, and role-based journeys across the system.' },
    { icon: <Layers size={20} strokeWidth={1.5} />, step: '03', title: 'System Thinking', desc: 'Designing holistic solutions that scale across the entire enterprise without creating new silos.' },
    { icon: <LayoutTemplate size={20} strokeWidth={1.5} />, step: '04', title: 'UX Architecture', desc: 'Structuring information flows for reduced cognitive load across complex multi-role platforms.' },
    { icon: <MonitorSmartphone size={20} strokeWidth={1.5} />, step: '05', title: 'Prototyping', desc: 'High-fidelity interactive models tested against real operational scenarios and edge cases.' },
    { icon: <CheckCircle size={20} strokeWidth={1.5} />, step: '06', title: 'Validation', desc: 'Iterative testing with actual users — operators, buyers, and admins — to confirm design decisions.' },
];

/* ── Skills ── */
const skillGroups = [
    {
        label: 'Enterprise UX',
        items: ['Workflow Optimization', 'Multi-role Systems', 'Information Architecture', 'Interaction Design', 'Design Systems', 'Usability Testing']
    },
    {
        label: 'Operational Domains',
        items: ['Supply Chain', 'Procurement', 'Warehouse Management', 'Logistics', 'AI Platforms', 'B2B SaaS']
    },
    {
        label: 'Product Thinking',
        items: ['Stakeholder Alignment', 'Systems Thinking', 'UX Strategy', '0→1 Delivery', 'Agile UX', 'Outcome-led Design']
    },
    {
        label: 'Tools',
        items: ['Figma', 'FigJam', 'Framer', 'Miro', 'Notion', 'Lottie']
    },
];

export default function Home() {
    const heroRef = useRef<HTMLElement>(null);
    const navigate = useNavigate();

    /* ── Cursor Glow + parallax hero ── */
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
            document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
            document.documentElement.style.setProperty('--cursor-opacity', '1');

            if (heroRef.current) {
                const rect = heroRef.current.getBoundingClientRect();
                const cx = (e.clientX - rect.left - rect.width / 2) / rect.width;
                const cy = (e.clientY - rect.top - rect.height / 2) / rect.height;
                heroRef.current.style.setProperty('--hero-mx', `${cx * 18}px`);
                heroRef.current.style.setProperty('--hero-my', `${cy * 12}px`);
            }
        };
        const handleMouseLeave = () => {
            document.documentElement.style.setProperty('--cursor-opacity', '0');
        };
        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        document.addEventListener('mouseleave', handleMouseLeave);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    /* ── Scroll reveal ── */
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
        );
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="home">

            {/* ══════════════════════════════════
                HERO
            ══════════════════════════════════ */}
            <section className="hero" ref={heroRef}>
                <div className="hero__orbs" aria-hidden="true">
                    <div className="hero__orb hero__orb--1" />
                    <div className="hero__orb hero__orb--2" />
                    <div className="hero__orb hero__orb--3" />
                </div>

                <div className="hero__inner">
                    {/* Left: copy */}
                    <div className="hero__copy">
                        <span className="hero__badge hero__anim hero__anim--0" style={{ animation: 'heroFadeUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.05s forwards, floatBadge 4s ease-in-out 1.5s infinite' }}>
                            <span className="hero__badge-dot" />
                            Product Designer · Jio Platforms
                        </span>

                        <h1 className="hero__heading hero__anim hero__anim--1">
                            Designing enterprise workflows,{' '}
                            <span className="hero__highlight">AI-assisted platforms</span>,
                            {' '}and scalable operational systems.
                        </h1>

                        <p className="hero__sub hero__anim hero__anim--2">
                            Product Designer with <strong>3+ years</strong> of experience crafting enterprise SaaS
                            experiences for logistics, procurement, and supply chain ecosystems.
                        </p>

                        <div className="hero__cta hero__anim hero__anim--3">
                            <a href="#selected-work" className="hero__cta-primary" onClick={e => {
                                e.preventDefault();
                                document.getElementById('selected-work')?.scrollIntoView({ behavior: 'smooth' });
                            }}>
                                View Case Studies
                                <ArrowRight size={16} />
                            </a>
                            <a
                                href="/Saurabhdesign_resume_13%20May.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hero__cta-secondary"
                            >
                                Download Resume
                            </a>
                        </div>

                        {/* Metrics strip */}
                        <div className="hero__metrics hero__anim hero__anim--4">
                            <div className="hero__metric">
                                <span className="hero__metric-value counter-pop" style={{ animationDelay: '0.7s' }}>3+</span>
                                <span className="hero__metric-label">Years Experience</span>
                            </div>
                            <div className="hero__metric-divider" />
                            <div className="hero__metric">
                                <span className="hero__metric-value counter-pop" style={{ animationDelay: '0.85s' }}>500+</span>
                                <span className="hero__metric-label">Enterprise Users</span>
                            </div>
                            <div className="hero__metric-divider" />
                            <div className="hero__metric">
                                <span className="hero__metric-value counter-pop" style={{ animationDelay: '1.0s' }}>78%</span>
                                <span className="hero__metric-label">Efficiency Gains</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: dashboard visual */}
                    <div className="hero__visual hero__anim hero__anim--2">
                        <DashboardVisual />
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                FEATURED CASE STUDIES
            ══════════════════════════════════ */}
            <section id="selected-work" className="work-section">
                <div className="work-section__container">
                    <div className="section-header reveal">
                        <span className="section-eyebrow">Selected Work</span>
                        <h2 className="section-title">Enterprise-scale <br />product design</h2>
                        <p className="section-sub">End-to-end design for complex operational systems, B2B platforms, and multi-role workflows.</p>
                    </div>

                    <div className="case-grid">
                        {showcaseProjects.map((project, index) => (
                            <article
                                key={project.id}
                                className={`case-card glass-shimmer reveal reveal--delay-${index}`}
                                onClick={() => navigate(`/case-study/${project.id}`)}
                                role="link"
                                tabIndex={0}
                                onKeyDown={e => { if (e.key === 'Enter') navigate(`/case-study/${project.id}`); }}
                            >
                                {/* Visual area */}
                                <div className="case-card__visual">
                                    {project.visual.type === 'video' && project.visual.src ? (
                                        <video
                                            className="case-card__media"
                                            src={project.visual.src}
                                            poster={project.visual.poster}
                                            muted loop playsInline autoPlay
                                        />
                                    ) : project.visual.src || project.visual.poster ? (
                                        <img
                                            src={project.visual.src || project.visual.poster}
                                            alt={project.title}
                                            className="case-card__media"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <div className="case-card__media-placeholder">
                                            <div className="case-card__placeholder-grid">
                                                <div className="cc__ph-bar" /><div className="cc__ph-bar" />
                                                <div className="cc__ph-bar" /><div className="cc__ph-bar" />
                                            </div>
                                        </div>
                                    )}
                                    <div className="case-card__visual-overlay" />
                                </div>

                                {/* Content */}
                                <div className="case-card__body">
                                    <div className="case-card__icon">{project.icon}</div>
                                    <h3 className="case-card__title">{project.title}</h3>
                                    <p className="case-card__desc">{project.description}</p>
                                    <div className="case-card__tags">
                                        {project.tags.slice(0, 3).map(tag => (
                                            <span key={tag} className="case-card__tag">{tag}</span>
                                        ))}
                                    </div>
                                    <div className="case-card__cta">
                                        View Case Study <ArrowRight size={14} />
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                REAL PRODUCT MOCKUPS
            ══════════════════════════════════ */}
            <MockupShowcase />

            {/* ══════════════════════════════════
                DESIGN PHILOSOPHY
            ══════════════════════════════════ */}
            <section className="philosophy-section">
                <div className="philosophy-section__container">
                    <div className="philosophy-card glass-shimmer reveal">
                        <div className="philosophy-card__label">Design Philosophy</div>
                        <blockquote className="philosophy-card__quote">
                            "I believe enterprise products should feel{' '}
                            <span className="philosophy-card__highlight">powerful</span>{' '}
                            without feeling complicated."
                        </blockquote>
                        <p className="philosophy-card__body">
                            My focus is simplifying operational complexity through scalable UX systems —
                            turning multi-step workflows, role-based access, and compliance logic into
                            interfaces that feel obvious to the people using them every day.
                        </p>
                        <div className="philosophy-card__pillars">
                            {['Systems-first thinking', 'Zero cognitive overload', 'Scalable by design', 'Outcome-driven decisions'].map(p => (
                                <span key={p} className="philosophy-card__pillar">{p}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                PROCESS
            ══════════════════════════════════ */}
            <section className="process-section">
                <div className="process-section__container">
                    <div className="section-header reveal">
                        <span className="section-eyebrow">My Process</span>
                        <h2 className="section-title">How I design <br />complex systems</h2>
                    </div>

                    <div className="process-bento reveal">
                        {processSteps.map((step, i) => (
                            <div key={step.step} className={`process-tile glass-shimmer reveal reveal--delay-${i % 3}`}>
                                <div className="process-tile__number">{step.step}</div>
                                <div className="process-tile__icon">{step.icon}</div>
                                <h3 className="process-tile__title">{step.title}</h3>
                                <p className="process-tile__desc">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                SKILLS & TOOLS
            ══════════════════════════════════ */}
            <section className="skills-section">
                <div className="skills-section__container">
                    <div className="section-header reveal">
                        <span className="section-eyebrow">Expertise</span>
                        <h2 className="section-title">Skills & tools</h2>
                    </div>

                    <div className="skills-grid">
                        {skillGroups.map((group, gi) => (
                            <div key={group.label} className={`skills-card reveal reveal--delay-${gi}`}>
                                <div className="skills-card__label">{group.label}</div>
                                <div className="skills-card__items">
                                    {group.items.map(item => (
                                        <span key={item} className="skills-pill">{item}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                CONTACT CTA
            ══════════════════════════════════ */}
            <section className="contact-section">
                <div className="contact-section__container">
                    <div className="contact-card reveal">
                        <div className="contact-card__glow" aria-hidden="true" />
                        <span className="section-eyebrow">Let's Connect</span>
                        <h2 className="contact-card__heading">
                            Open to senior product design <br />
                            <span className="hero__highlight">opportunities</span>
                        </h2>
                        <p className="contact-card__sub">
                            I'm currently available for full-time roles in enterprise SaaS, AI products, and operational platforms.
                        </p>
                        <div className="contact-card__links">
                            <a href="mailto:saurabhbhojane9001@gmail.com" className="contact-link">
                                <Mail size={16} /> Email me
                            </a>
                            <a href="https://linkedin.com/in/saurabh-bhojane-a466b2266" target="_blank" rel="noopener noreferrer" className="contact-link">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                                LinkedIn
                            </a>
                            <a href="/Saurabhdesign_resume_13%20May.pdf" target="_blank" rel="noopener noreferrer" className="contact-link contact-link--primary">
                                <FileText size={16} /> View Resume
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
