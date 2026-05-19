import './DesignPhilosophy.css';

export default function DesignPhilosophy() {
    return (
        <section className="design-philosophy">
            <div className="design-philosophy__content">
                <h2 className="design-philosophy__title">Design Philosophy</h2>
                <blockquote className="design-philosophy__quote">
                    "I believe enterprise products should feel <span className="design-philosophy__highlight">powerful</span> without feeling complicated."
                </blockquote>
                <p className="design-philosophy__text">
                    My focus is simplifying operational complexity through scalable UX systems.
                </p>
            </div>
        </section>
    );
}
