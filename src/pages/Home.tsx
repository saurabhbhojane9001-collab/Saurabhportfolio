import Button from '../components/common/Button';
import ProjectShowcase from '../components/common/ProjectShowcase';
import './Home.css';

export default function Home() {
    const scrollToWork = () => {
        const section = document.getElementById('selected-work');
        section?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <h1 className="hero__heading hero__animate hero__animate--1">
                    Designing for <span className="hero__highlight">Impact</span>
                </h1>
                <p className="hero__subtitle hero__animate hero__animate--2">
                    Designing end-to-end product experiences by aligning business goals,
                    user needs, and scalable systems. Product Designer with 3+ years of
                    experience driving product decisions and solving complex business problems.
                </p>
                <p className="hero__micro hero__animate hero__animate--3">
                    Focused on end-to-end products, procurement systems, and workflow-heavy platforms.
                </p>
                <div className="hero__cta hero__animate hero__animate--4">
                    <Button onClick={scrollToWork}>View Selected Work</Button>
                </div>
            </section>

            {/* Project Showcase — NotebookLM feature section pattern */}
            <ProjectShowcase />
        </div>
    );
}
