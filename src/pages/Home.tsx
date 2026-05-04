import { useEffect } from 'react';
import Button from '../components/common/Button';
import ProjectShowcase from '../components/common/ProjectShowcase';
import './Home.css';

export default function Home() {
    const scrollToWork = () => {
        const section = document.getElementById('selected-work');
        section?.scrollIntoView({ behavior: 'smooth' });
    };

    /* ── Cursor Glow Effect ── */
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
            document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
            document.documentElement.style.setProperty('--cursor-opacity', '1');
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

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                {/* Floating orbs background */}
                <div className="hero__orb hero__orb--1" aria-hidden="true" />
                <div className="hero__orb hero__orb--2" aria-hidden="true" />
                <div className="hero__orb hero__orb--3" aria-hidden="true" />

                <span className="hero__badge hero__animate hero__animate--0">
                    <span className="hero__badge-dot" />
                    UI/UX Designer · Jio Platforms
                </span>

                <h1 className="hero__heading hero__animate hero__animate--1">
                    Transforming complex B2B systems into
                    {' '}
                    <span className="hero__highlight">intuitive interfaces</span>
                </h1>

                <p className="hero__subtitle hero__animate hero__animate--2">
                    Product-focused UI/UX Designer with <span className="hero__accent">3+ years</span> of
                    experience specializing in enterprise applications across supply chain,
                    procurement, and warehouse management. I take features
                    from <strong>zero to launch</strong>, collaborating closely with engineering teams.
                </p>

                <div className="hero__cta hero__animate hero__animate--3">
                    <Button onClick={scrollToWork}>View Selected Work</Button>
                    <a
                        href="/Saurabhdesign%20Resume%202.0.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero__resume-link"
                    >
                        <span>Download Resume</span>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                            <path d="M3.5 10.5L10.5 3.5M10.5 3.5H5M10.5 3.5V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </a>
                </div>
            </section>

            {/* Project Showcase */}
            <ProjectShowcase />
        </div>
    );
}
