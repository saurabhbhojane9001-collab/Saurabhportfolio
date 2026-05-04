import { useScrollReveal } from '../hooks/useScrollReveal';
import Tag from '../components/common/Tag';
import './About.css';

const skillsData = [
    {
        category: 'Design & Prototyping',
        skills: [
            'Figma', 'FigJam', 'Adobe XD', 'Information Architecture',
            'Wireframing', 'Data Visualization', 'Multi-Step Workflows'
        ]
    },
    {
        category: 'AI Tools',
        skills: [
            'Anthropic Claude AI', 'ChatGPT', 'Cursor AI', 'Figma AI',
            'Lovable AI', 'Readdy AI', 'Antigravity'
        ]
    },
    {
        category: 'Technical / Frontend',
        skills: [
            'Angular (Basic)', 'React (Basic)', 'HTML', 'CSS'
        ]
    }
];

const stats = [
    { value: '3+', label: 'Years in UI/UX Design' },
    { value: 'Zero to Launch', label: 'End-to-end features delivered' },
    { value: 'B2B', label: 'Enterprise Applications' },
    { value: '3', label: 'Domains: Supply Chain, Procurement & Finance' },
];

const pillars = [
    {
        icon: '🔍',
        title: 'Research & Strategy',
        desc: 'I conduct user research and stakeholder interviews to uncover pain points and define actionable UX strategies for internal platforms.',
    },
    {
        icon: '🏗️',
        title: 'Systems & Workflows',
        desc: 'I architect workflow infrastructure and reduce cognitive load across multi-role enterprise systems, transforming complex processes into streamlined workflows.',
    },
    {
        icon: '🤝',
        title: 'Engineering Collaboration',
        desc: 'I collaborate directly with frontend developers to ensure seamless technical implementation and design feasibility from zero to launch.',
    },
];

export default function About() {
    const { setRevealRef } = useScrollReveal();

    return (
        <div className="about">

            {/* ── Hero Section ── */}
            <section className="about__hero" ref={setRevealRef}>
                <div className="about__hero-text">
                    <span className="about__hero-eyebrow">UI/UX Designer</span>
                    <h1 className="about__hero-name">Saurabh Bhojane</h1>
                    <p className="about__hero-tagline">
                        Transforming data-heavy, multi-role systems into intuitive interfaces.
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
                        src="/IMG-20250421-WA0005__1_-removebg-preview.jpg"
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
                    {skillsData.map((group) => (
                        <div key={group.category} className="about__skills-group">
                            <h3 className="about__skills-group-label">{group.category}</h3>
                            <div className="about__skills-list">
                                {group.skills.map((skill) => (
                                    <Tag key={skill} label={skill} />
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
