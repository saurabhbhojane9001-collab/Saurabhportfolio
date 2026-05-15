import { useNavigate } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { useInViewCenter } from '../../hooks/useInViewCenter';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { showcaseProjects } from '../../data/showcaseProjects';
import Tag from './Tag';
import './ProjectShowcase.css';

export default function ProjectShowcase() {
    const navigate = useNavigate();
    const { setRef, activeIndex } = useInViewCenter(showcaseProjects.length);
    const { setRevealRef } = useScrollReveal();
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
            <header className="showcase__header" ref={setRevealRef}>
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
                            ref={(el) => {
                                setRef(index)(el);
                                setRevealRef(el);
                            }}
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
