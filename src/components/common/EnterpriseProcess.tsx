import { Search, GitBranch, Layers, LayoutTemplate, MonitorSmartphone, CheckCircle } from 'lucide-react';
import './EnterpriseProcess.css';

const processes = [
    {
        title: "Research",
        icon: <Search strokeWidth={1.5} />,
        description: "Deep-dive into user needs, business goals, and technical constraints."
    },
    {
        title: "Workflow Mapping",
        icon: <GitBranch strokeWidth={1.5} />,
        description: "Visualizing complex processes to identify bottlenecks and opportunities."
    },
    {
        title: "System Thinking",
        icon: <Layers strokeWidth={1.5} />,
        description: "Designing holistic solutions that scale across the entire enterprise."
    },
    {
        title: "UX Architecture",
        icon: <LayoutTemplate strokeWidth={1.5} />,
        description: "Structuring information for intuitive navigation and reduced cognitive load."
    },
    {
        title: "Prototyping",
        icon: <MonitorSmartphone strokeWidth={1.5} />,
        description: "Creating interactive models to test interactions and validate flows."
    },
    {
        title: "Validation",
        icon: <CheckCircle strokeWidth={1.5} />,
        description: "Iterative testing with real users to ensure the solution hits the mark."
    }
];

export default function EnterpriseProcess() {
    return (
        <section className="enterprise-process">
            <div className="enterprise-process__header">
                <h2 className="enterprise-process__title">How I Design Complex Systems</h2>
                <p className="enterprise-process__subtitle">A systematic approach to solving enterprise-scale problems.</p>
            </div>
            
            <div className="enterprise-process__grid">
                {processes.map((process, index) => (
                    <div key={index} className="process-card">
                        <div className="process-card__icon">{process.icon}</div>
                        <h3 className="process-card__title">{process.title}</h3>
                        <p className="process-card__description">{process.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
