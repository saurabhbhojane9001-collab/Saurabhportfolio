import { useRef, useState } from 'react';
import './MockupShowcase.css';

interface Mockup {
    id: string;
    src: string;
    label: string;
    tag: string;
    description: string;
    accent: string;
}

const mockups: Mockup[] = [
    {
        id: 'dashboard',
        src: '/images/procurenxt-dashboard.jpg',
        label: 'Analytics Dashboard',
        tag: 'Dashboard · Analytics View',
        description: 'Procurement command center — purchase requests, spend by category, AI-powered supplier alerts, and real-time bottleneck detection.',
        accent: '#7C3AED',
    },
    {
        id: 'onboarding-flow',
        src: '/images/procurenxt-onboarding-flow.png',
        label: 'Supplier Onboarding Wizard',
        tag: 'Onboarding Flow · Configuration UI',
        description: 'Multi-step supplier registration with progressive disclosure, duplicate detection, and live auto-save — designed for 500+ suppliers.',
        accent: '#3B82F6',
    },
    {
        id: 'category-config',
        src: '/images/procurenxt-category-config.jpg',
        label: 'Category Hierarchy Configuration',
        tag: 'System Configuration · Workflow',
        description: 'Hierarchical category selection across Logistics, IT, and Manufacturing — with split-panel selection and real-time preview of added categories.',
        accent: '#10B981',
    },
    {
        id: 'ai-suggestion',
        src: '/images/procurenxt-ai-suggestion.jpg',
        label: 'AI-Assisted Buyer Recommendation',
        tag: 'AI Systems · Smart Suggestions',
        description: 'Contextual AI suggestions inline with form fields — recommending account groups, business segments, and payment terms based on supplier category.',
        accent: '#F59E0B',
    },
    {
        id: 'onboarding-details',
        src: '/images/procurenxt-onboarding-details.jpg',
        label: 'Multi-step Approval Stepper',
        tag: 'Workflow Optimization · Stepper',
        description: 'Three-stage onboarding pipeline — Invitation, Onboarding Details, Buyer Recommendation — with section-indexed navigation and role-based access.',
        accent: '#8B5CF6',
    },
];

export default function MockupShowcase() {
    const [active, setActive] = useState(0);
    const imgRef = useRef<HTMLImageElement>(null);

    const handleSelect = (index: number) => {
        if (imgRef.current) {
            imgRef.current.style.opacity = '0';
            imgRef.current.style.transform = 'translateY(10px)';
        }
        setTimeout(() => {
            setActive(index);
            if (imgRef.current) {
                imgRef.current.style.opacity = '1';
                imgRef.current.style.transform = 'translateY(0)';
            }
        }, 180);
    };

    const current = mockups[active];

    return (
        <section className="mockup-section">
            <div className="mockup-section__container">

                {/* Header */}
                <div className="section-header reveal">
                    <span className="section-eyebrow">Real Product Work</span>
                    <h2 className="section-title">Enterprise screens <br />from production</h2>
                    <p className="section-sub">
                        These are actual interfaces shipped at Jio Platforms — not mockups, not concepts.
                        Real enterprise UX at scale.
                    </p>
                </div>

                {/* Main layout */}
                <div className="mockup-layout reveal">

                    {/* Left: tab list */}
                    <div className="mockup-tabs">
                        {mockups.map((m, i) => (
                            <button
                                key={m.id}
                                className={`mockup-tab ${i === active ? 'mockup-tab--active' : ''}`}
                                onClick={() => handleSelect(i)}
                                style={{ '--tab-accent': m.accent } as React.CSSProperties}
                            >
                                <span className="mockup-tab__dot" style={{ background: m.accent }} />
                                <div className="mockup-tab__text">
                                    <span className="mockup-tab__label">{m.label}</span>
                                    <span className="mockup-tab__tag">{m.tag}</span>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Right: image + description */}
                    <div className="mockup-preview">
                        <div className="mockup-preview__frame">
                            {/* Browser chrome */}
                            <div className="mockup-preview__chrome">
                                <div className="mockup-preview__dots">
                                    <span /><span /><span />
                                </div>
                                <div className="mockup-preview__url">
                                    procurenxt.jio.com / supplier-management
                                </div>
                            </div>
                            <div className="mockup-preview__img-wrap">
                                <img
                                    ref={imgRef}
                                    src={current.src}
                                    alt={current.label}
                                    className="mockup-preview__img"
                                />
                            </div>
                        </div>

                        {/* Caption */}
                        <div className="mockup-caption">
                            <span
                                className="mockup-caption__tag"
                                style={{ color: current.accent, background: `${current.accent}18`, border: `1px solid ${current.accent}30` }}
                            >
                                {current.tag}
                            </span>
                            <p className="mockup-caption__desc">{current.description}</p>
                        </div>
                    </div>
                </div>

                {/* Thumbnail strip */}
                <div className="mockup-strip reveal">
                    {mockups.map((m, i) => (
                        <button
                            key={m.id}
                            className={`mockup-thumb ${i === active ? 'mockup-thumb--active' : ''}`}
                            onClick={() => handleSelect(i)}
                            style={{ '--tab-accent': m.accent } as React.CSSProperties}
                        >
                            <img src={m.src} alt={m.label} className="mockup-thumb__img" loading="lazy" />
                            <div className="mockup-thumb__overlay" />
                        </button>
                    ))}
                </div>

            </div>
        </section>
    );
}
