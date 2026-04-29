import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import SectionBlock from '../components/common/SectionBlock';
import './CaseStudy.css';

export default function CaseStudy() {
    const { id } = useParams<{ id: string }>();
    const project = projects.find((p) => p.id === id);

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
            <Link to="/work" className="case-study__back-link">← Back to Work</Link>

            {/* Hero */}
            <header className="case-study__header">
                <p className="case-study__meta-inline">
                    {project.role} · {project.duration} · {project.users}
                </p>
                <h1 className="case-study__title">{project.title}</h1>
                <p className="case-study__description">{project.description}</p>
            </header>

            <hr className="case-study__divider" />

            {/* Content sections */}
            <div className="case-study__body">
                {project.sections.map((section) => (
                    <SectionBlock key={section.id} section={section} />
                ))}
            </div>
        </article>
    );
}
