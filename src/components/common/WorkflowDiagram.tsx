import './WorkflowDiagram.css';

/* ── Types ── */
export interface WorkflowStep {
    id: string;
    label: string;
    description: string;
    owner: string;
    type: 'process' | 'decision' | 'parallel' | 'success' | 'end';
}

interface WorkflowDiagramProps {
    steps: WorkflowStep[];
}

/* ── Color Config ── */
const ownerConfig: Record<string, { bg: string; text: string; border: string; badge: string }> = {
    Supplier:        { bg: '#DBEAFE', text: '#1E3A8A', border: '#3B82F6', badge: '#2563EB' },
    System:          { bg: '#D1FAE5', text: '#064E3B', border: '#10B981', badge: '#059669' },
    Buyer:           { bg: '#FEF3C7', text: '#78350F', border: '#F59E0B', badge: '#D97706' },
    'SRM Team':      { bg: '#EDE9FE', text: '#4C1D95', border: '#8B5CF6', badge: '#7C3AED' },
    'AML Team':      { bg: '#FEE2E2', text: '#7F1D1D', border: '#EF4444', badge: '#DC2626' },
    Evaluators:      { bg: '#CFFAFE', text: '#164E63', border: '#06B6D4', badge: '#0891B2' },
    'Category Head': { bg: '#FAE8FF', text: '#701A75', border: '#D946EF', badge: '#C026D3' },
    MDM:             { bg: '#E2E8F0', text: '#0F172A', border: '#64748B', badge: '#475569' },
    SAP:             { bg: '#D1FAE5', text: '#064E3B', border: '#10B981', badge: '#059669' },
    /* JWC-specific stakeholders */
    Admin:           { bg: '#E0E7FF', text: '#312E81', border: '#6366F1', badge: '#4F46E5' },
    Exhibitor:       { bg: '#FFEDD5', text: '#7C2D12', border: '#F97316', badge: '#EA580C' },
    Operator:        { bg: '#CCFBF1', text: '#134E4A', border: '#14B8A6', badge: '#0D9488' },
};

const defaultConfig = { bg: '#F1F5F9', text: '#1E293B', border: '#94A3B8', badge: '#64748B' };

/* ── Connector Arrow SVG ── */
function ConnectorArrow({ color = '#94A3B8', animated = false }: { color?: string; animated?: boolean }) {
    return (
        <div className={`wf-connector ${animated ? 'wf-connector--animated' : ''}`}>
            <svg width="2" height="28" viewBox="0 0 2 28" className="wf-connector__line">
                <line x1="1" y1="0" x2="1" y2="22" stroke={color} strokeWidth="2" strokeDasharray={animated ? '4 3' : 'none'} />
            </svg>
            <svg width="12" height="8" viewBox="0 0 12 8" className="wf-connector__arrow">
                <polygon points="6,8 0,0 12,0" fill={color} />
            </svg>
        </div>
    );
}

/* ── Node Components ── */

function TerminalNode({ type }: { type: 'start' | 'end' }) {
    const isStart = type === 'start';
    return (
        <div className={`wf-terminal wf-terminal--${type}`}>
            {isStart ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                    <polygon points="8,5 19,12 8,19" />
                </svg>
            ) : (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                </svg>
            )}
            <span className="wf-terminal__label">{isStart ? 'START' : 'END'}</span>
        </div>
    );
}

function FlowNode({ step, stepNum }: { step: WorkflowStep; stepNum: string }) {
    const config = ownerConfig[step.owner] || defaultConfig;
    const isDecision = step.type === 'decision' || step.type === 'parallel';
    const isSuccess = step.type === 'success';
    const isEnd = step.type === 'end';

    let nodeClass = 'wf-card';
    if (isDecision) nodeClass += ' wf-card--decision';
    if (step.type === 'parallel') nodeClass += ' wf-card--parallel';
    if (isSuccess) nodeClass += ' wf-card--success';
    if (isEnd) nodeClass += ' wf-card--end';

    return (
        <div
            className={nodeClass}
            style={{
                borderColor: isEnd ? '#94A3B8' : config.border,
                backgroundColor: isSuccess ? '#D1FAE5' : isEnd ? '#FEF2F2' : config.bg,
                ['--accent-color' as string]: config.badge,
            }}
        >
            {/* Header */}
            <div className="wf-card__header">
                <div className="wf-card__badge-group">
                    {isDecision && (
                        <span className="wf-card__type-icon wf-card__type-icon--decision" style={{ backgroundColor: config.badge }}>
                            <svg width="8" height="8" viewBox="0 0 10 10" fill="white">
                                <polygon points="5,0 10,5 5,10 0,5" />
                            </svg>
                        </span>
                    )}
                    {isSuccess && (
                        <span className="wf-card__type-icon wf-card__type-icon--success">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        </span>
                    )}
                    {isEnd && (
                        <span className="wf-card__type-icon wf-card__type-icon--end">
                            <svg width="8" height="8" viewBox="0 0 10 10" fill="white">
                                <rect x="2" y="2" width="6" height="6" />
                            </svg>
                        </span>
                    )}
                    <span className="wf-card__step-num" style={{ backgroundColor: config.badge }}>
                        Step {stepNum}
                    </span>
                </div>
                <span className="wf-card__owner" style={{ backgroundColor: config.badge }}>
                    {step.owner}
                </span>
            </div>

            {/* Content */}
            <h4 className="wf-card__title" style={{ color: isEnd ? '#7F1D1D' : isSuccess ? '#064E3B' : config.text }}>
                {step.label}
            </h4>
            <p className="wf-card__description">
                {step.description}
            </p>
        </div>
    );
}

/* ── Main Component ── */
export default function WorkflowDiagram({ steps }: WorkflowDiagramProps) {
    return (
        <div className="workflow-diagram">
            {/* Legend */}
            <div className="workflow-diagram__legend">
                <div className="workflow-diagram__legend-section">
                    <span className="workflow-diagram__legend-title">Stakeholders</span>
                    <div className="workflow-diagram__legend-tags">
                        {Object.entries(ownerConfig).map(([role, config]) => (
                            <span key={role} className="workflow-diagram__tag" style={{ backgroundColor: config.badge }}>
                                {role}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="workflow-diagram__legend-section">
                    <span className="workflow-diagram__legend-title">Node Types</span>
                    <div className="workflow-diagram__legend-tags">
                        <span className="workflow-diagram__type-tag">
                            <span className="workflow-diagram__type-shape workflow-diagram__type-shape--process" />
                            Process
                        </span>
                        <span className="workflow-diagram__type-tag">
                            <span className="workflow-diagram__type-shape workflow-diagram__type-shape--decision" />
                            Decision
                        </span>
                        <span className="workflow-diagram__type-tag">
                            <span className="workflow-diagram__type-shape workflow-diagram__type-shape--success" />
                            Success
                        </span>
                        <span className="workflow-diagram__type-tag">
                            <span className="workflow-diagram__type-shape workflow-diagram__type-shape--terminal" />
                            Terminal
                        </span>
                    </div>
                </div>
            </div>

            {/* Flowchart */}
            <div className="workflow-diagram__flow">
                {/* Background grid pattern */}
                <div className="workflow-diagram__grid" />

                {/* START */}
                <TerminalNode type="start" />
                <ConnectorArrow color="#22C55E" />

                {/* Steps */}
                {steps.map((step, i) => (
                    <div key={step.id} className="workflow-diagram__step-group">
                        <FlowNode step={step} stepNum={String(i + 1).padStart(2, '0')} />
                        {i < steps.length - 1 && (
                            <ConnectorArrow
                                color={
                                    steps[i + 1].type === 'decision' || steps[i + 1].type === 'parallel'
                                        ? (ownerConfig[steps[i + 1].owner]?.badge || '#94A3B8')
                                        : '#94A3B8'
                                }
                                animated={steps[i + 1].type === 'parallel'}
                            />
                        )}
                    </div>
                ))}

                {/* END */}
                <ConnectorArrow color="#EF4444" />
                <TerminalNode type="end" />
            </div>
        </div>
    );
}
