import Tag from '../components/common/Tag';
import './About.css';

const designSkills = [
    'UX Research', 'Interaction Design', 'Information Architecture',
    'Process & Workflow Design', 'Design Systems', 'Prototyping', 'User Testing',
];

const tools = ['Figma', 'React', 'TypeScript'];

const stats = [
    { value: '3+', label: 'Years of Product Design' },
    { value: '5+', label: 'End-to-end products shipped' },
    { value: '4', label: 'User roles & workflows designed' },
    { value: '2', label: 'Business domains impacted: Procurement & Logistics' },
];

const pillars = [
    {
        icon: '🔍',
        title: 'Research-Driven',
        desc: 'I root every decision in user research, stakeholder interviews, and process audits — not assumptions.',
    },
    {
        icon: '🏗️',
        title: 'Systems Thinking',
        desc: 'I design for ecosystems — multi-role platforms, scalable patterns, and workflows that hold up at scale.',
    },
    {
        icon: '🚀',
        title: 'Outcome-Focused',
        desc: 'I measure success in operational efficiency, error reduction, and decisions made faster by the people using the product.',
    },
];

export default function About() {
    return (
        <div className="about">

            {/* ── Hero Section ── */}
            <section className="about__hero">
                <div className="about__hero-text">
                    <span className="about__hero-eyebrow">Product Designer</span>
                    <h1 className="about__hero-name">Saurabh Bhojane</h1>
                    <p className="about__hero-tagline">
                        Designing end-to-end product experiences by aligning business goals,
                        <br />user needs, and scalable systems.
                    </p>
                    <div className="about__hero-ctas">
                        <a
                            href="mailto:saurabh@example.com"
                            className="about__cta about__cta--primary"
                        >
                            Get in touch
                        </a>
                        <a
                            href="https://www.linkedin.com/in/saurabh-bhojane"
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
            <section className="about__stats">
                {stats.map((s) => (
                    <div key={s.label} className="about__stat">
                        <span className="about__stat-value">{s.value}</span>
                        <span className="about__stat-label">{s.label}</span>
                    </div>
                ))}
            </section>

            {/* ── Bio ── */}
            <section className="about__section about__section--bordered">
                <h2 className="about__section-title">Who I am</h2>
                <p className="about__bio">
                    I'm a Product Designer specialising in complex B2B and operational
                    platforms. My work spans procurement systems, supplier relationship management,
                    and logistics tools — driving product decisions, defining workflows, and
                    building scalable system architecture.
                </p>
                <p className="about__bio">
                    I've had the opportunity to work on large-scale platforms at Jio — including
                    Jio World Centre's operations platform and Jio's internal procurement suite.
                    Working closely with Business, Tech, and Functional teams, my design decisions
                    have directly shaped how hundreds of internal users work every day.
                </p>
            </section>

            {/* ── What I Do Pillars ── */}
            <section className="about__section about__section--bordered">
                <h2 className="about__section-title">How I work</h2>
                <div className="about__pillars">
                    {pillars.map((p) => (
                        <div key={p.title} className="about__pillar-card">
                            <span className="about__pillar-icon">{p.icon}</span>
                            <h3 className="about__pillar-title">{p.title}</h3>
                            <p className="about__pillar-desc">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Skills & Tools ── */}
            <section className="about__section about__section--bordered">
                <h2 className="about__section-title">Skills & Tools</h2>
                <div className="about__skills-container">
                    <div className="about__skills-group">
                        <h3 className="about__skills-group-label">Design Skills</h3>
                        <div className="about__skills-list">
                            {designSkills.map((skill) => (
                                <Tag key={skill} label={skill} />
                            ))}
                        </div>
                    </div>
                    <div className="about__skills-group">
                        <h3 className="about__skills-group-label">Tools</h3>
                        <div className="about__skills-list">
                            {tools.map((tool) => (
                                <Tag key={tool} label={tool} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Closing CTA ── */}
            <section className="about__section about__closing-section">
                <p className="about__closing">
                    I enjoy solving complex business problems that matter — combining product thinking,
                    stakeholder alignment, and system design to build tools teams can rely on.
                </p>
                <a
                    href="mailto:saurabh@example.com"
                    className="about__cta about__cta--primary"
                >
                    Let's talk →
                </a>
            </section>

        </div>
    );
}
