import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Tag from '../components/common/Tag';
import './About.css';

interface SkillItem {
    name: string;
    icon?: string;
}

interface SkillCategory {
    category: string;
    icon: React.ReactNode;
    accent: string;
    skills: SkillItem[];
}



const skillsData: SkillCategory[] = [
    {
        category: 'Core UX & UI Design',
        accent: '#1a73e8',
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                <line x1="9" y1="9" x2="9.01" y2="9"/>
                <line x1="15" y1="9" x2="15.01" y2="9"/>
            </svg>
        ),
        skills: [
            { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma' },
            { name: 'FigJam', icon: 'https://cdn.simpleicons.org/figma' },
            { name: 'Adobe XD', icon: 'https://cdn.simpleicons.org/adobexd' },
            { name: 'Interaction Design' },
            { name: 'Wireframing & Prototyping' },
            { name: 'Design Systems' },
            { name: 'Visual Design' },
            { name: 'Agile UX' }
        ]
    },
    {
        category: 'UX Research & Strategy',
        accent: '#7c3aed',
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
        ),
        skills: [
            { name: 'User Research' },
            { name: 'Usability Testing' },
            { name: 'Information Architecture' },
            { name: 'User Journeys' },
            { name: 'Persona Development' },
            { name: 'A/B Testing' },
            { name: 'Data Visualization' }
        ]
    },
    {
        category: 'AI Tools',
        accent: '#059669',
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
            </svg>
        ),
        skills: [
            { name: 'Anthropic Claude AI', icon: 'https://cdn.simpleicons.org/anthropic' },
            { name: 'ChatGPT', icon: 'https://cdn.simpleicons.org/openai' },
            { name: 'Cursor AI', icon: 'https://cdn.simpleicons.org/cursor' },
            { name: 'Figma AI', icon: 'https://cdn.simpleicons.org/figma' },
            { name: 'Lovable AI' },
            { name: 'Readdy AI' },
            { name: 'Antigravity' }
        ]
    },
    {
        category: 'Operational Systems & Platforms',
        accent: '#b45309',
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/>
            </svg>
        ),
        skills: [
            { name: 'Enterprise Workflow Design' },
            { name: 'SAP Integration UX' },
            { name: 'K2 Workflow Engine' },
            { name: 'Role-based Access UX' },
            { name: 'Multi-level Approval Flows' },
            { name: 'WMS Platform Design' },
        ]
    }
];

const stats = [
    { value: '3+', label: 'Years — Enterprise UX & Product Design' },
    { value: '0→1', label: 'End-to-end feature delivery' },
    { value: 'B2B SaaS', label: 'Operational & AI systems' },
    { value: '4', label: 'Domains: Supply Chain, Procurement, Logistics & WMS' },
];

const pillars = [
    {
        icon: '🔍',
        title: 'Enterprise UX Research',
        desc: 'Stakeholder interviews, workflow shadowing, and field research to uncover systemic pain points in operational platforms — not just usability issues.',
    },
    {
        icon: '🏗️',
        title: 'Workflow Optimization & Systems Design',
        desc: 'Mapping complex, multi-role workflows end-to-end. Reducing cognitive load. Transforming 23-step manual processes into 8-step digital flows.',
    },
    {
        icon: '🤖',
        title: 'AI-Assisted Product Thinking',
        desc: 'Designing AI-powered features — smart defaults, automated compliance checks, and intelligent routing — into enterprise products users actually trust.',
    },
];

export default function About() {
    const { setRevealRef } = useScrollReveal();

    return (
        <div className="about">

            {/* ── Hero Section ── */}
            <section className="about__hero" ref={setRevealRef}>
                <div className="about__hero-text">
                    <span className="about__hero-eyebrow">Enterprise Product Designer · Jio Platforms</span>
                    <h1 className="about__hero-name">Saurabh Bhojane</h1>
                    <p className="about__hero-tagline">
                        Designing enterprise UX, workflow optimization,
                        and AI-assisted operational systems.
                    </p>
                    <div className="about__hero-ctas">
                        <a
                            href="mailto:saurabhbhojane9001@gmail.com"
                            className="about__cta about__cta--primary"
                        >
                            Get in touch
                        </a>
                        <a
                            href="https://linkedin.com/in/saurabh-bhojane-a466b2266"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="about__cta about__cta--secondary"
                        >
                            LinkedIn ↗
                        </a>
                    </div>
                </div>
                <div className="about__hero-photo-wrap">
                    <img
                        src="/profile-photo.png"
                        alt="Saurabh Bhojane"
                        className="about__hero-photo"
                    />
                </div>
            </section>

            {/* ── Stats Bar ── */}
            <section className="about__stats" ref={setRevealRef}>
                {stats.map((s, i) => (
                    <div key={s.label} className="about__stat" style={{ transitionDelay: `${i * 0.1}s` }}>
                        <span className="about__stat-value">{s.value}</span>
                        <span className="about__stat-label">{s.label}</span>
                    </div>
                ))}
            </section>

            {/* ── Bio ── */}
            <section className="about__section about__section--bordered" ref={setRevealRef}>
                <h2 className="about__section-title">Who I am</h2>
                <p className="about__bio">
                    I'm a Product-focused UI/UX Designer with 3+ years of experience specializing in complex
                    B2B enterprise applications across supply chain, procurement, and finance.
                </p>
                <p className="about__bio">
                    I have a proven ability to transform data-heavy, multi-role systems into intuitive interfaces, taking features from zero to launch while collaborating closely with engineering teams. I've had the opportunity to work on large-scale platforms at Jio Platforms (JPL), focusing on supplier relationship, vendor onboarding, and warehouse management systems.
                </p>
            </section>

            {/* ── What I Do Pillars ── */}
            <section className="about__section about__section--bordered" ref={setRevealRef}>
                <h2 className="about__section-title">How I work</h2>
                <div className="about__pillars">
                    {pillars.map((p, i) => (
                        <div key={p.title} className="about__pillar-card" ref={setRevealRef} style={{ transitionDelay: `${i * 0.1}s` }}>
                            <span className="about__pillar-icon">{p.icon}</span>
                            <h3 className="about__pillar-title">{p.title}</h3>
                            <p className="about__pillar-desc">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Skills & Tools ── */}
            <section className="about__section about__section--bordered" ref={setRevealRef}>
                <h2 className="about__section-title">Skills & Tools</h2>
                <div className="about__skills-container">
                    {skillsData.map((group, gi) => (
                        <div
                            key={group.category}
                            className={`about__skills-group${gi === skillsData.length - 1 ? ' about__skills-group--wide' : ''}`}
                            style={{
                                '--group-accent': group.accent,
                                transitionDelay: `${gi * 0.08}s`
                            } as React.CSSProperties}
                            ref={setRevealRef}
                        >
                            <div className="about__skills-group-header">
                                <span
                                    className="about__skills-group-icon"
                                    style={{ color: group.accent }}
                                >
                                    {group.icon}
                                </span>
                                <h3 className="about__skills-group-label">{group.category}</h3>
                            </div>
                            <div className="about__skills-list">
                                {group.skills.map((skill) => (
                                    <Tag key={skill.name} label={skill.name} icon={skill.icon} accent={group.accent} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Closing CTA ── */}
            <section className="about__section about__closing-section" ref={setRevealRef}>
                <p className="about__closing">
                    I enjoy solving complex business problems that matter — combining product thinking,
                    stakeholder alignment, and system design to build tools teams can rely on.
                </p>
                <a
                    href="mailto:saurabhbhojane9001@gmail.com"
                    className="about__cta about__cta--primary"
                >
                    Let's talk →
                </a>
            </section>

        </div>
    );
}
