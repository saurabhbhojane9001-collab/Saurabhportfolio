/* ==============================================
   Project Data — Case Study Content
   ============================================== */

import type { WorkflowStep } from '../components/common/WorkflowDiagram';
import {
    ADMINISTRATOR_FLOW_MERMAID,
    EXHIBITOR_FLOW_MERMAID,
    OPERATOR_FLOW_MERMAID,
} from './jioRoadwaysMermaid';

export interface ImpactItem {
    icon: 'speed' | 'accuracy' | 'visibility' | 'compliance' | 'unified' | 'approvals' | 'transparency' | 'conflicts' | 'turnaround' | 'selfservice' | 'audit';
    metric: string;
    label: string;
    description: string;
}

export interface CaseStudySection {
    id: string;
    type: 'overview' | 'problem' | 'goals' | 'role' | 'personas' | 'approach' | 'workflow' | 'screens' | 'outcomes' | 'reflection';
    personas?: { name: string; role: string; description: string }[];
    title: string;
    content: string;
    bullets?: string[];
    placeholders?: { label: string; description?: string }[];
    workflowSteps?: WorkflowStep[];
    /** Branching user-flow diagram (Mermaid source). When set, shown instead of linear workflowSteps. */
    mermaidChart?: string;
    impactItems?: ImpactItem[];
    figmaEmbedUrl?: string;
}

export interface Project {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    role: string;
    duration: string;
    platform: string;
    users: string;
    sections: CaseStudySection[];
}

export const projects: Project[] = [
    {
        id: 'supplier-onboarding',
        title: 'Supplier Relationship Management Platform — Supplier Onboarding',
        subtitle: 'Built an end-to-end enterprise SRM platform to simplify supplier onboarding, approvals, and compliance workflows.',
        description:
            'Designed a unified onboarding workflow to solve fragmented supplier approvals and compliance processes.',
        tags: ['Product Design', 'B2B', 'SRM', 'Supplier Onboarding', 'System Design'],
        role: 'Product Designer',
        duration: '8 months',
        platform: 'Enterprise SRM (Supplier Relationship Management)',
        users: 'Buyers, Suppliers, Evaluators, Approvers',
        sections: [
            {
                id: 'overview',
                type: 'overview',
                title: 'Context',
                content: 'ProcureNxt is a centralized Supplier Relationship Management platform replacing fragmented manual processes for a global procurement organization.',
            },
            {
                id: 'problem',
                type: 'problem',
                title: 'What Was Broken',
                content: 'Supplier onboarding lacked a unified workflow, causing severe delays, data duplication, and critical compliance risks.',
                bullets: [
                    'Disjointed tools (email, spreadsheets, SAP) caused major operational bottlenecks.',
                    'Zero real-time visibility forced reliance on manual email tracking for status updates.',
                    'Poor auditability resulted in severe regulatory compliance risk.',
                ],
            },
            {
                id: 'role',
                type: 'role',
                title: 'My Role & Key Decisions',
                content: 'I drove product design and workflow definition, solving core business problems by aligning procurement and compliance stakeholders.',
                bullets: [
                    'Conducted cross-functional interviews across Legal, Compliance, and IT to align system strategy.',
                    'Solved high friction by consolidating isolated processes and defining robust role-based routing.',
                    'Collaborated closely with engineering and business analysts to define conditional logic.',
                ],
            },
            {
                id: 'approach',
                type: 'approach',
                title: 'Approach',
                content: 'Utilized a systems-first approach to map complete workflows, aiming to systemize validation checks and drastically simplify the experience without sacrificing compliance.',
                bullets: [
                    'Consolidated 23 manual onboarding steps into 8 streamlined digital steps.',
                    'Defined progressive registration with smart defaults based upon vendor risk.',
                    'Architected a unified status model and a configurable multi-level approval routing engine.',
                ],
            },
            {
                id: 'workflow',
                type: 'workflow',
                title: 'End-to-End Workflow',
                content: 'The K2-powered onboarding pipeline orchestrates interconnected steps across various stakeholder roles — from the initial supplier invitation through multi-level approvals to SAP vendor code generation.',
                workflowSteps: [
                    {
                        id: 'step-invitation',
                        label: 'Supplier Invitation',
                        description: 'Buyer fills required details and sends an invitation link to the supplier to initiate the onboarding process.',
                        owner: 'Buyer',
                        type: 'process',
                    },
                    {
                        id: 'step-1',
                        label: 'Supplier Form Submission',
                        description: 'Supplier opens the invitation link and submits the onboarding form via the ProcureNxt portal with required documents.',
                        owner: 'Supplier',
                        type: 'process',
                    },
                    {
                        id: 'step-1a',
                        label: 'Internal Checks — Duplicate & AML',
                        description: 'System runs automated duplicate detection and triggers AML (Anti-Money Laundering) third-party screening via API.',
                        owner: 'System',
                        type: 'process',
                    },
                    {
                        id: 'step-2',
                        label: 'K2 Workflow Start & Notification',
                        description: 'K2 workflow engine initiates. Notification rules applied — different emails sent based on duplicate check results.',
                        owner: 'System',
                        type: 'process',
                    },
                    {
                        id: 'step-3',
                        label: 'AML Review Decision',
                        description: 'Based on AML screening response: no issues → proceed; flags found → AML Review Task created for the AML team. If rejected, buyer decides to continue or end.',
                        owner: 'AML Team',
                        type: 'decision',
                    },
                    {
                        id: 'step-4',
                        label: 'Parallel Evaluation Tasks',
                        description: 'Multiple evaluation teams review simultaneously: SCOC Review · HSEF Review · Basic Technical Review · Financial Evaluation (triggered by SCOC). Emergency mode skips optional evaluations.',
                        owner: 'Evaluators',
                        type: 'parallel',
                    },
                    {
                        id: 'step-5',
                        label: 'Buyer Recommendation',
                        description: 'After mandatory evaluation tasks are approved, the buyer compiles findings and submits a formal recommendation. Can return to Step 1 if issues found.',
                        owner: 'Buyer',
                        type: 'process',
                    },
                    {
                        id: 'step-6',
                        label: 'Category Head Approval',
                        description: 'Category Head reviews the buyer recommendation and either approves or returns to the buyer for revision.',
                        owner: 'Category Head',
                        type: 'decision',
                    },
                    {
                        id: 'step-7',
                        label: 'SRM Team Approval',
                        description: 'SRM team reviews and approves. May not apply to all business verticals — conditional routing based on organizational rules.',
                        owner: 'SRM Team',
                        type: 'decision',
                    },
                    {
                        id: 'step-8',
                        label: 'MDM Level 1 Review',
                        description: 'Master Data Management team (Level 1) reviews supplier data quality and completeness. Can return or reject to buyer recommendation.',
                        owner: 'MDM',
                        type: 'decision',
                    },
                    {
                        id: 'step-9',
                        label: 'MDM Level 2 Review & SAP Code',
                        description: 'MDM Level 2 completes final review. Upon approval, ProcureNxt triggers SAP Integration API to create Vendor Master record and generate the SAP Supplier Code.',
                        owner: 'MDM',
                        type: 'success',
                    },
                    {
                        id: 'step-11',
                        label: 'Workflow Closure',
                        description: 'All tasks verified complete. Supplier receives Vendor Code, all stakeholders notified. Workflow closed and audit trail finalized.',
                        owner: 'System',
                        type: 'end',
                    },
                ],
            },
            {
                id: 'screens',
                type: 'screens',
                title: 'Key Flows',
                content: 'The platform balances efficiency and governance across primary workflows.',
                placeholders: [
                    { label: 'Buyer-Led Supplier Invite Flow', description: 'Figma prototype — invitation form and document checklist generation' },
                    { label: 'Supplier Registration Wizard', description: 'Multi-step form with progressive disclosure and real-time validation' },
                    { label: 'Compliance & Verification Dashboard', description: 'Compliance view — flagged items, severities, and audit overrides' },
                    { label: 'Multi-Level Approval Routing', description: 'Approval chains with SLA tracking, escalation, and delegation' },
                ],
            },
            {
                id: 'outcomes',
                type: 'outcomes',
                title: 'Impact',
                content: 'The platform launched to 500+ suppliers, resolving critical compliance gaps and significantly streamlining approvals.',
                impactItems: [
                    {
                        icon: 'speed',
                        metric: '78%',
                        label: 'Faster Onboarding',
                        description: 'Reduced onboarding cycle from 14 days down to just 3 days through automated workflows.',
                    },
                    {
                        icon: 'accuracy',
                        metric: '0',
                        label: 'Human Errors',
                        description: 'Eliminated manual data entry errors with system-driven validations and smart defaults.',
                    },
                    {
                        icon: 'unified',
                        metric: '1',
                        label: 'Unified Platform',
                        description: 'All supplier details, documents, and approvals consolidated into a single source of truth.',
                    },
                    {
                        icon: 'approvals',
                        metric: '5×',
                        label: 'Faster Approvals',
                        description: 'Multi-level approval routing with auto-escalation replaced manual email chasers.',
                    },
                    {
                        icon: 'transparency',
                        metric: '100%',
                        label: 'Transparency',
                        description: 'Real-time status tracking and audit trails visible to all stakeholders at every stage.',
                    },
                    {
                        icon: 'compliance',
                        metric: 'Full',
                        label: 'Audit Readiness',
                        description: 'Automated AML checks and compliance documentation replaced risky manual tracking.',
                    },
                ],
            },
        ],
    },
    {
        id: 'jio-world-centre',
        title: 'Jio World Centre — Roadways',
        subtitle: 'Logistics and vehicle movement for high-footfall events: digital check-in, bay scheduling, and real-time coordination across operators, admins, and exhibitors.',
        description:
            'Roadways replaces ad-hoc calls and spreadsheets with a tablet-first experience at the gate and clear admin control over events, bays, and traffic — so teams can track arrivals, departures, and loading activity when the venue is at full capacity.',
        tags: ['Product Design', 'Roadways', 'Logistics', 'Tablet UX', 'Jio World Centre'],
        role: 'Product Designer',
        duration: '6+ months',
        platform: 'Tablet-first at gate · Admin desktop',
        users: 'Operators, Administrators, Exhibitors',
        sections: [
            {
                id: 'overview',
                type: 'overview',
                title: 'Context',
                content:
                    'Jio World Centre runs concurrent large-scale events across multiple halls and parking levels. Exhibitors rely on private transport to move assets in and out on tight windows. Roadways is the digital layer for that reality: scheduling, gate check-in/out, and visibility when traffic and loading bays are under peak pressure.',
            },
            {
                id: 'problem',
                type: 'problem',
                title: 'Problem statement',
                content:
                    'During move-in and move-out, the venue sees high volumes of vehicles competing for limited loading bays and time slots. Manual coordination made it hard to know which vehicle was cleared to enter, which bay was free, and whether a slot was still valid — increasing wait times, gate friction, and risk of double-booking. The organisation needed a single system of record for vehicle movement instead of fragmented phone and chat follow-ups.',
                bullets: [
                    'No single place to see today\'s bookings, gate status, and bay occupancy together.',
                    'Hard to prove who arrived, when they checked out, and which bay was in use — weak audit trail.',
                    'Exhibitors lacked self-serve ways to book, adjust, and track their own slots.',
                ],
            },
            {
                id: 'observations',
                type: 'goals',
                title: 'Observations',
                content: 'Field research and stakeholder workshops surfaced constraints that any solution had to respect.',
                bullets: [
                    'Jio World Centre supports multi-level parking and overlapping events — capacity is shared, not siloed.',
                    'Exhibitors depend on private transport; scheduling and gate rules must align with real arrival patterns.',
                    'Operations needs proactive tracking and scheduling during heavy traffic, not reactive firefighting.',
                    'Advance planning and clear handoffs between admin, exhibitor, and operator are essential for safe, efficient logistics.',
                ],
            },
            {
                id: 'purpose',
                type: 'approach',
                title: 'Purpose',
                content:
                    'The product vision split into a primary outcome for the business and supporting outcomes for day-to-day operations.',
                bullets: [
                    'Major: streamline check-in and check-out for transportation vehicles at the venue.',
                    'Minor: real-time tracking of vehicles and bays, smoother traffic at loading points, and data-backed decisions for operations.',
                ],
            },
            {
                id: 'role',
                type: 'role',
                title: 'My role & key decisions',
                content:
                    'I owned UX for Roadways end-to-end: discovery with on-ground staff, journey mapping across three roles, IA for operator tablet flows, and alignment with engineering on status models and edge cases.',
                bullets: [
                    'Defined a strict lifecycle for bookings and bays (booked → checked-in → on-hold / in progress → checked-out) so every screen reflected the same truth.',
                    'Separated operator tablet tasks (fast, interruptible) from admin planning tasks (dense, analytical) without splitting the product into two unrelated apps.',
                    'Validated flows with facility and events teams so terminology and steps matched how gates and bays are actually run.',
                ],
            },
            {
                id: 'personas',
                type: 'personas',
                title: 'Personas',
                content: 'Three roles anchor the system; each has different goals, devices, and time pressure at the venue.',
                personas: [
                    {
                        name: 'Operator',
                        role: '28 yrs · Stock controller',
                        description:
                            'Runs check-in and check-out at the gate and loading bays. Cares about speed, accuracy, and safety — needs large touch targets, minimal typing, and obvious next actions when queues form.',
                    },
                    {
                        name: 'Administrator',
                        role: '42 yrs · MBA · Events & facilities',
                        description:
                            'Sets up events, halls, and bay layouts; monitors traffic and utilisation. Needs dashboards to configure the venue and spot bottlenecks before they hit the gate.',
                    },
                    {
                        name: 'Exhibitor',
                        role: '35 yrs · Business / booth lead',
                        description:
                            'Books loading slots, declares vehicles and material needs, and tracks status of their own bookings. Wants transparency and self-service changes without calling operations.',
                    },
                ],
            },
            {
                id: 'target-device',
                type: 'overview',
                title: 'Target device',
                content:
                    'The operator experience is designed for tablet: portable at the gate and loading dock, readable in daylight, and suited to intermittent Wi‑Fi. Bluetooth and wireless peripherals can support scanners or printers where the venue deploys them. Admins primarily use desktop for configuration and monitoring; exhibitors can use phone or laptop for booking, with layouts that stay usable on smaller viewports.',
            },
            {
                id: 'workflow-operator',
                type: 'workflow',
                title: 'Operator flow',
                content:
                    'Primary path for gate and bay staff: today’s work queue, gate verification, check-in and check-out, and live bay awareness. Branching flow matches the Roadways operator diagram in Figma.',
                mermaidChart: OPERATOR_FLOW_MERMAID,
            },
            {
                id: 'workflow-administrator',
                type: 'workflow',
                title: 'Administrator flow',
                content:
                    'Planning and oversight: events, site layout, bays, and live monitoring. Branching flow matches the administrator diagram in Figma.',
                mermaidChart: ADMINISTRATOR_FLOW_MERMAID,
            },
            {
                id: 'workflow-exhibitor',
                type: 'workflow',
                title: 'Exhibitor flow',
                content:
                    'Self-service booking and lifecycle of the exhibitor\'s own slots. Branching flow matches the exhibitor diagram in Figma.',
                mermaidChart: EXHIBITOR_FLOW_MERMAID,
            },
            {
                id: 'screens',
                type: 'screens',
                title: 'Interactive prototype',
                content:
                    'Use the embedded Figma prototype to walk through the tablet and venue flows with the original starting point.',
                figmaEmbedUrl:
                    'https://embed.figma.com/proto/19r0moWfSHlEEb8fGPfAmL/Jio-World-Center--folio?node-id=1-12122&viewport=234%2C40%2C0.03&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A12122&embed-host=share',
            },
            {
                id: 'outcomes',
                type: 'outcomes',
                title: 'Impact',
                content:
                    'Roadways aimed to remove ambiguity at the gate and give every role the same operational picture — reducing manual coordination while improving traceability.',
                impactItems: [
                    {
                        icon: 'conflicts',
                        metric: '0',
                        label: 'Booking Conflicts',
                        description: 'Structured slots and bay rules prevented double-booking at peak move-in/out.',
                    },
                    {
                        icon: 'turnaround',
                        metric: '3×',
                        label: 'Faster Turnaround',
                        description: 'Clear check-in/out and bay visibility shortened queues versus manual coordination.',
                    },
                    {
                        icon: 'selfservice',
                        metric: '80%',
                        label: 'Fewer Queries',
                        description: 'Exhibitor self-service cut repetitive status calls to the operations desk.',
                    },
                    {
                        icon: 'audit',
                        metric: 'Auto',
                        label: 'Audit Trail',
                        description: 'Vehicle and bay history captured digitally for post-event reporting.',
                    },
                ],
            },
        ],
    },
];
