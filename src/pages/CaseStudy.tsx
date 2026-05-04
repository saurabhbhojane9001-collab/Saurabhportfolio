import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionBlock from '../components/common/SectionBlock';
import './CaseStudy.css';

export default function CaseStudy() {
    const { id } = useParams<{ id: string }>();
    const project = projects.find((p) => p.id === id);
    const { setRevealRef } = useScrollReveal();

    /* 404 state */
    if (!project) {
        return (
            <div className="case-study case-study--not-found">
                <h1>Project not found</h1>
                <p>The case study you're looking for doesn't exist.</p>
                <Link to="/work" className="case-study__back-link">← Back to Work</Link>
            </div>
        );
    }

    return (
        <article className="case-study">
            {/* Back link */}
            <Link to="/work" className="case-study__back-link">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Back to Work
            </Link>

            {/* Hero */}
            <header className="case-study__header" ref={setRevealRef}>
                <div className="case-study__meta-chips">
                    <span className="case-study__chip">{project.role}</span>
                    <span className="case-study__chip">{project.duration}</span>
                    <span className="case-study__chip">{project.platform}</span>
                </div>
                <h1 className="case-study__title">{project.title}</h1>
                <p className="case-study__description">{project.description}</p>
                {project.subtitle && (
                    <p className="case-study__subtitle">{project.subtitle}</p>
                )}
            </header>

            {/* Divider with gradient */}
            <div className="case-study__divider" />

            {/* Content sections */}
            <div className="case-study__body">
                {project.sections.map((section, index) => (
                    <div key={section.id} ref={setRevealRef} style={{ transitionDelay: `${index * 0.05}s` }}>
                        <SectionBlock section={section} />
                    </div>
                ))}
            </div>
        </article>
    );
}
