import { useNavigate } from 'react-router-dom';
import type { Project } from '../../data/projects';
import Tag from './Tag';
import './Card.css';

interface CardProps {
    project: Project;
}

export default function Card({ project }: CardProps) {
    const navigate = useNavigate();

    return (
        <article
            className="card"
            onClick={() => navigate(`/case-study/${project.id}`)}
            role="link"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter') navigate(`/case-study/${project.id}`);
            }}
        >
            <div className="card__content">
                <h3 className="card__title">{project.title}</h3>
                <p className="card__description">{project.description}</p>
                <div className="card__tags">
                    {project.tags.map((tag) => (
                        <Tag key={tag} label={tag} />
                    ))}
                </div>
            </div>
            <span className="card__arrow" aria-hidden="true">→</span>
        </article>
    );
}
