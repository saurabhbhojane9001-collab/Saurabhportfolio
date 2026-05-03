import { useNavigate } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { useInViewCenter } from '../../hooks/useInViewCenter';
import Tag from './Tag';
import './ProjectShowcase.css';

/* ── Inline SVG Icons ── */
const SupplierIcon = () => (
    <svg className="showcase__icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);

const OperationsIcon = () => (
    <svg className="showcase__icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <path d="M17.5 14v7" />
        <path d="M14 17.5h7" />
    </svg>
);

/* ── Project Data ── */
export interface ShowcaseProject {
    id: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    supporting?: string;
    tags: string[];
    visual: {
        type: 'image' | 'video';
        src: string;
        poster?: string;
    };
}

export const showcaseProjects: ShowcaseProject[] = [
    {
        id: 'supplier-onboarding',
        icon: <SupplierIcon />,
        title: 'Supplier Relationship & Vendor Onboarding',
        description:
            'Led end-to-end UX for a unified B2B supplier platform — launched to 500+ suppliers, reducing onboarding time by 78% and accelerating approvals by 5×.',
        supporting:
            'Architected workflow infrastructure with AI-suggested forms, automated AML compliance checks, and multi-level approval routing replacing manual email tracking.',
        tags: ['Enterprise', 'B2B', 'Supplier Onboarding', 'Compliance'],
        visual: {
            type: 'image',
            src: '/images/srm-platform-preview.png',
        },
    },
    {
        id: 'jio-world-centre',
        icon: <OperationsIcon />,
        title: 'Warehouse Management System (WMS)',
        description:
            'Architected the user experience for end-to-end warehouse logistics — covering inbound/outbound operations, goods receipt, picking, packing, and dispatch.',
        supporting:
            'Designed configuration-driven master data management interfaces and optimized data-heavy dashboards for real-time visibility and decision-making.',
        tags: ['Product Design', 'WMS', 'Logistics', 'Data Visualization', 'Scalable Systems'],
        visual: {
            type: 'video',
            src: '/portfolio video.mp4',
            poster: '/images/jwc-operations-preview.png',
        },
    },
];

export default function ProjectShowcase() {
    const navigate = useNavigate();
    const { setRef, activeIndex } = useInViewCenter(showcaseProjects.length);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    /* ── Video play/pause based on active state ── */
    useEffect(() => {
        videoRefs.current.forEach((video, i) => {
            if (!video) return;
            if (i === activeIndex) {
                video.play().catch(() => {/* browser may block autoplay */ });
            } else {
                video.pause();
            }
        });
    }, [activeIndex]);

    return (
        <section id="selected-work" className="showcase">
            <header className="showcase__header">
                <h2 className="showcase__section-title">Selected Projects</h2>
                <p className="showcase__section-subtitle">
                    End-to-end product design work solving complex operational and
                    business challenges.
                </p>
            </header>

            <div className="showcase__list">
                {showcaseProjects.map((project, index) => {
                    const isActive = index === activeIndex;

                    return (
                        <article
                            key={project.id}
                            ref={setRef(index)}
                            className={`showcase__project ${isActive ? 'showcase__project--active' : 'showcase__project--inactive'}`}
                            onClick={() => navigate(`/case-study/${project.id}`)}
                            role="link"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') navigate(`/case-study/${project.id}`);
                            }}
                        >
                            {/* Left: content */}
                            <div className="showcase__content">
                                <div className="showcase__meta-row">
                                    {project.icon}
                                </div>
                                <h3 className="showcase__title">{project.title}</h3>
                                <p className="showcase__description">{project.description}</p>
                                {project.supporting && (
                                    <p className="showcase__supporting">{project.supporting}</p>
                                )}
                                <div className="showcase__tags">
                                    {project.tags.map((tag) => (
                                        <Tag key={tag} label={tag} />
                                    ))}
                                </div>
                                <span className="showcase__cta" aria-hidden="true">
                                    View Case Study <span className="showcase__cta-arrow">→</span>
                                </span>
                            </div>

                            {/* Right: visual */}
                            <div className="showcase__visual">
                                {project.visual.type === 'image' ? (
                                    <img
                                        src={project.visual.src}
                                        alt={`${project.title} — product preview`}
                                        className={`showcase__image ${isActive ? 'showcase__image--parallax' : ''}`}
                                        loading="lazy"
                                    />
                                ) : (
                                    <div className="showcase__video-wrap">
                                        {project.visual.src ? (
                                            <video
                                                ref={(el) => { videoRefs.current[index] = el; }}
                                                className="showcase__video"
                                                src={project.visual.src}
                                                poster={project.visual.poster}
                                                muted
                                                loop
                                                playsInline
                                            />
                                        ) : project.visual.poster ? (
                                            <img
                                                src={project.visual.poster}
                                                alt={`${project.title} — product preview`}
                                                className="showcase__image"
                                                loading="lazy"
                                            />
                                        ) : null}
                                    </div>
                                )}
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
