import type { CaseStudySection, ImpactItem } from '../../data/projects';
import WorkflowDiagram from './WorkflowDiagram';
import './SectionBlock.css';

interface SectionBlockProps {
    section: CaseStudySection;
}

/* Persona icon colors */
const personaColors: Record<string, { bg: string; text: string; accent: string }> = {
    Administrator: { bg: '#E0E7FF', text: '#4F46E5', accent: '#6366F1' },
    Exhibitor:     { bg: '#FFEDD5', text: '#EA580C', accent: '#F97316' },
    Operator:      { bg: '#CCFBF1', text: '#0D9488', accent: '#14B8A6' },
};
const defaultPersonaColor = { bg: '#F1F5F9', text: '#64748B', accent: '#94A3B8' };

/* Impact icon config — richer palette */
const impactIconConfig: Record<string, { color: string; bg: string; gradient: string }> = {
    speed:        { color: '#2563EB', bg: '#EFF6FF', gradient: 'linear-gradient(135deg, #3B82F6, #1D4ED8)' },
    accuracy:     { color: '#059669', bg: '#ECFDF5', gradient: 'linear-gradient(135deg, #10B981, #047857)' },
    visibility:   { color: '#7C3AED', bg: '#F5F3FF', gradient: 'linear-gradient(135deg, #8B5CF6, #6D28D9)' },
    compliance:   { color: '#DC2626', bg: '#FEF2F2', gradient: 'linear-gradient(135deg, #EF4444, #B91C1C)' },
    unified:      { color: '#4F46E5', bg: '#EEF2FF', gradient: 'linear-gradient(135deg, #6366F1, #4338CA)' },
    approvals:    { color: '#D97706', bg: '#FFFBEB', gradient: 'linear-gradient(135deg, #F59E0B, #B45309)' },
    transparency: { color: '#0891B2', bg: '#ECFEFF', gradient: 'linear-gradient(135deg, #06B6D4, #0E7490)' },
    conflicts:    { color: '#DC2626', bg: '#FEF2F2', gradient: 'linear-gradient(135deg, #EF4444, #B91C1C)' },
    turnaround:   { color: '#059669', bg: '#ECFDF5', gradient: 'linear-gradient(135deg, #10B981, #047857)' },
    selfservice:  { color: '#7C3AED', bg: '#F5F3FF', gradient: 'linear-gradient(135deg, #8B5CF6, #6D28D9)' },
    audit:        { color: '#4F46E5', bg: '#EEF2FF', gradient: 'linear-gradient(135deg, #6366F1, #4338CA)' },
};

function ImpactIcon({ type, color }: { type: string; color: string }) {
    const props = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

    switch (type) {
        case 'speed':
            return <svg {...props}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>;
        case 'accuracy':
            return <svg {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>;
        case 'unified':
            return <svg {...props}><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>;
        case 'approvals':
            return <svg {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><polyline points="17 11 19 13 23 9" /></svg>;
        case 'transparency':
            return <svg {...props}><circle cx="12" cy="12" r="3" /><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /></svg>;
        case 'compliance':
            return <svg {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>;
        case 'conflicts':
            return <svg {...props}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>;
        case 'turnaround':
            return <svg {...props}><polyline points="23 4 23 10 17 10" /><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" /></svg>;
        case 'selfservice':
            return <svg {...props}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
        case 'audit':
            return <svg {...props}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>;
        default:
            return <svg {...props}><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>;
    }
}

function ImpactCard({ item, index }: { item: ImpactItem; index: number }) {
    const config = impactIconConfig[item.icon] || { color: '#64748B', bg: '#F1F5F9', gradient: 'linear-gradient(135deg, #94A3B8, #64748B)' };
    return (
        <div
            className="impact-card"
            style={{
                '--impact-color': config.color,
                '--impact-bg': config.bg,
                '--impact-gradient': config.gradient,
                animationDelay: `${index * 0.1}s`
            } as React.CSSProperties}
        >
            {/* Top: icon badge + metric */}
            <div className="impact-card__top">
                <div className="impact-card__icon-wrap">
                    <ImpactIcon type={item.icon} color={config.color} />
                </div>
                <div className="impact-card__metric" style={{ color: config.color }}>
                    {item.metric}
                </div>
            </div>

            {/* Bottom: label + description */}
            <div className="impact-card__body">
                <span className="impact-card__label">{item.label}</span>
                <p className="impact-card__description">{item.description}</p>
            </div>

            {/* Accent bar */}
            <div className="impact-card__accent-bar" style={{ background: config.gradient }} />
        </div>
    );
}

/* ── Figma Embed ── */
function FigmaEmbed({ embedUrl }: { embedUrl: string }) {
    return (
        <div className="section-block__figma-embed" style={{ marginTop: 'var(--space-6)' }}>
            <iframe
                style={{ border: '1px solid rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '800px', borderRadius: '12px' }}
                height="450"
                src={embedUrl}
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default function SectionBlock({ section }: SectionBlockProps) {
    const isScreens = section.type === 'screens';
    const isWorkflow = section.type === 'workflow';
    const isPersonas = section.type === 'personas';
    const isOutcomes = section.type === 'outcomes';

    return (
        <section
            id={section.id}
            className={`section-block ${isScreens ? 'section-block--screens' : ''} ${isWorkflow ? 'section-block--workflow' : ''} ${isPersonas ? 'section-block--personas' : ''} ${isOutcomes ? 'section-block--outcomes' : ''}`}
        >
            <h2 className="section-block__title">{section.title}</h2>
            <p className="section-block__content">{section.content}</p>

            {/* Workflow Diagram */}
            {section.workflowSteps && section.workflowSteps.length > 0 && (
                <WorkflowDiagram steps={section.workflowSteps} />
            )}

            {/* Personas */}
            {section.personas && section.personas.length > 0 && (
                <div className="section-block__personas">
                    {section.personas.map((persona, i) => {
                        const colors = personaColors[persona.name] || defaultPersonaColor;
                        return (
                            <div key={i} className="persona-card" style={{ borderColor: colors.accent }}>
                                <img 
                                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(persona.name)}&backgroundColor=${colors.bg.replace('#', '')}`}
                                    alt={`${persona.name} Avatar`}
                                    className="persona-card__avatar"
                                />
                                <div className="persona-card__info">
                                    <h4 className="persona-card__name">{persona.name}</h4>
                                    <span className="persona-card__role" style={{ backgroundColor: colors.bg, color: colors.text }}>
                                        {persona.role}
                                    </span>
                                    <p className="persona-card__desc">{persona.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Impact Metrics */}
            {section.impactItems && section.impactItems.length > 0 && (
                <div className="impact-grid">
                    {section.impactItems.map((item, i) => (
                        <ImpactCard key={i} item={item} index={i} />
                    ))}
                </div>
            )}

            {section.bullets && section.bullets.length > 0 && (
                <ul className="section-block__list">
                    {section.bullets.map((item, i) => (
                        <li key={i} className="section-block__list-item">
                            {item}
                        </li>
                    ))}
                </ul>
            )}

            {section.figmaEmbedUrl && (
                <FigmaEmbed embedUrl={section.figmaEmbedUrl} />
            )}

            {section.placeholders && section.placeholders.length > 0 && (
                <div className="section-block__placeholders">
                    {section.placeholders.map((ph, i) => (
                        <div key={i} className="section-block__placeholder">
                            <div className="section-block__placeholder-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="3" width="18" height="18" rx="2" />
                                    <circle cx="8.5" cy="8.5" r="1.5" />
                                    <path d="M21 15l-5-5L5 21" />
                                </svg>
                            </div>
                            <span className="section-block__placeholder-label">{ph.label}</span>
                            {ph.description && (
                                <span className="section-block__placeholder-desc">{ph.description}</span>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
