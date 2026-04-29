import { useNavigate } from 'react-router-dom';
import { showcaseProjects } from '../components/common/ProjectShowcase';
import Tag from '../components/common/Tag';
import '../components/common/ProjectShowcase.css'; // Reusing the same styles
import './Work.css';

export default function Work() {
    const navigate = useNavigate();

    return (
        <div className="work">
            <header className="work__header">
                <h1 className="work__title">Work</h1>
                <p className="work__description">
                    A curated set of enterprise and B2B projects focused on system design,
                    complex workflows, and operational efficiency.
                </p>
            </header>

            <div className="showcase__list" style={{ marginTop: 'var(--space-8)' }}>
                {showcaseProjects.map((project) => (
                    <article
                        key={project.id}
                        className="showcase__project"
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
                                    className="showcase__image"
                                    loading="lazy"
                                />
                            ) : (
                                <div className="showcase__video-wrap">
                                    {project.visual.src ? (
                                        <video
                                            className="showcase__video"
                                            src={project.visual.src}
                                            poster={project.visual.poster}
                                            autoPlay
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
                ))}
            </div>
        </div>
    );
}
