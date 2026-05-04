/* ==============================================
   Project Data — Case Study Content
   ============================================== */

import type { WorkflowStep } from '../components/common/WorkflowDiagram';

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
        title: 'Operations & Logistics Platform for Jio World Centre',
        subtitle: 'Designed a multi-role enterprise platform to manage logistics, access control, and real-time operations for large-scale, high-footfall events.',
        description:
            'Designed a centralized operations platform to digitize end-to-end event logistics — from bay configuration and exhibitor bookings to real-time vehicle check-in/check-out at one of India\'s largest convention venues.',
        tags: ['Product Design', 'Operations', 'Logistics', 'Multi-role Platform', 'Workflow Design'],
        role: 'Product Designer',
        duration: '6+ months',
        platform: 'Enterprise Web (Desktop-first, tablet-supported)',
        users: 'Operators, Administrators, Exhibitors',
        sections: [
            {
                id: 'overview',
                type: 'overview',
                title: 'Context',
                content: 'Jio World Centre hosts concurrent large-scale events (exhibitions, conventions, trade shows) across multiple halls, each demanding complex, real-time logistics coordination for vehicle movement, bay allocation, and exhibitor material handling — all on shared infrastructure with strict time windows.',
            },
            {
                id: 'problem',
                type: 'problem',
                title: 'What Was Broken',
                content: 'Logistics coordination relied entirely on phone calls, WhatsApp groups, and spreadsheets — severely lacking real-time visibility and causing cascading failures during high-footfall events.',
                bullets: [
                    'Zero centralized tracking for loading-bay availability, vehicle status, or exhibitor material movement.',
                    'Manual bay allocation caused frequent double-bookings and conflicts during peak move-in/move-out hours.',
                    'Exhibitors had no self-service visibility into slot availability or check-in status, creating constant friction with the operations team.',
                    'No audit trail — post-event reporting was manual and error-prone.',
                ],
            },
            {
                id: 'role',
                type: 'role',
                title: 'My Role & Key Decisions',
                content: 'I drove product decisions and system architecture for the operations platform, focused directly on solving handoff bottlenecks and reducing cognitive load during high-pressure, time-critical execution.',
                bullets: [
                    'Mapped end-to-end logistics journeys across 3 distinct system personas — Admin, Exhibitor, and Operator.',
                    'Solved real-time tracking chaos by defining a strict Booked → Checked-in → On-hold → Completed status model.',
                    'Designed a dual-interface approach: desktop dashboards for admins + tablet-optimized views for loading-bay operators.',
                    'Collaborated closely with on-ground JWC operators and facility managers to validate every workflow against operational reality.',
                ],
            },
            {
                id: 'personas',
                type: 'personas',
                title: 'Target Users',
                content: 'The platform serves three distinct user roles, each with fundamentally different goals and operational contexts.',
                personas: [
                    {
                        name: 'Administrator',
                        role: 'Event Setup & Hall Management',
                        description: 'Configures events, manages hall/bay layouts, defines time slots, and oversees the entire logistics pipeline. Needs full visibility and control across all concurrent events.',
                    },
                    {
                        name: 'Exhibitor',
                        role: 'Booking & Vehicle Tracking',
                        description: 'Books loading/unloading slots, registers vehicles and materials, submits AMC & utility requests, and tracks real-time check-in status. Needs self-service access and transparency.',
                    },
                    {
                        name: 'Operator',
                        role: 'On-Ground Bay Management',
                        description: 'Manages vehicle check-in/check-out at loading bays, handles real-time queue management, and resolves conflicts. Operates under extreme time pressure using tablet devices.',
                    },
                ],
            },
            {
                id: 'approach',
                type: 'approach',
                title: 'Approach',
                content: 'We used a systems-first approach to identify critical handoff failure modes between the three user roles. Every UI decision prioritized action-first interactions and unambiguous status tracking to prevent errors under time pressure.',
                bullets: [
                    'Designed role-bound dashboards with clear ownership logic — each persona sees only what they need to act on.',
                    'Desktop-first design for admins, coupled with a tablet-optimized interface for loading-bay operators.',
                    'Implemented proactive conflict detection — system flags overlapping slot bookings and bay assignments before they escalate.',
                    'Built a unified status cascade: when an operator completes a check-out, the system auto-updates exhibitor view and admin dashboard simultaneously.',
                ],
            },
            {
                id: 'workflow',
                type: 'workflow',
                title: 'End-to-End Workflow',
                content: 'The operations pipeline orchestrates 12 interconnected steps across Admin, Exhibitor, Operator, and System roles — from initial event setup through real-time bay operations to event closure and audit.',
                workflowSteps: [
                    {
                        id: 'jwc-1',
                        label: 'Event Creation & Hall Configuration',
                        description: 'Admin creates a new event, assigns halls, and defines the operational parameters — capacity, dates, move-in/move-out windows.',
                        owner: 'Admin',
                        type: 'process',
                    },
                    {
                        id: 'jwc-2',
                        label: 'Bay Layout Setup & Slot Definition',
                        description: 'Admin configures loading bay layouts per hall and defines available time slots for exhibitor bookings.',
                        owner: 'Admin',
                        type: 'process',
                    },
                    {
                        id: 'jwc-3',
                        label: 'Exhibitor Access & Booking Portal',
                        description: 'System opens the self-service booking portal for exhibitors. Exhibitors receive access credentials and can browse available slots.',
                        owner: 'System',
                        type: 'process',
                    },
                    {
                        id: 'jwc-4',
                        label: 'Vehicle & Material Registration',
                        description: 'Exhibitor registers vehicle details (type, number, driver info) and material inventory for each booked slot.',
                        owner: 'Exhibitor',
                        type: 'process',
                    },
                    {
                        id: 'jwc-5',
                        label: 'AMC & Utility Request Submission',
                        description: 'Exhibitor submits requests for AMC services (electricity, water, internet) and special utility needs tied to their booth setup.',
                        owner: 'Exhibitor',
                        type: 'process',
                    },
                    {
                        id: 'jwc-6',
                        label: 'Booking Review & Approval',
                        description: 'Admin reviews exhibitor bookings and slot requests. System flags conflicts (overlapping slots, capacity breaches). Admin approves, modifies, or rejects.',
                        owner: 'Admin',
                        type: 'decision',
                    },
                    {
                        id: 'jwc-7',
                        label: 'Vehicle Check-in & Bay Assignment',
                        description: 'Operator receives the vehicle at the loading bay, verifies registration, and assigns a specific bay slot. Status changes to Checked-in.',
                        owner: 'Operator',
                        type: 'process',
                    },
                    {
                        id: 'jwc-8',
                        label: 'Real-Time Bay Monitoring & Conflict Detection',
                        description: 'System continuously monitors bay occupancy, queue lengths, and slot adherence. Proactive alerts sent for overruns, conflicts, and delays.',
                        owner: 'System',
                        type: 'parallel',
                    },
                    {
                        id: 'jwc-9',
                        label: 'Loading/Unloading Execution',
                        description: 'Operator monitors the loading/unloading process. Can place vehicles On-hold if delays occur, freeing the bay for the next in queue.',
                        owner: 'Operator',
                        type: 'process',
                    },
                    {
                        id: 'jwc-10',
                        label: 'Vehicle Check-out & Bay Release',
                        description: 'Operator completes check-out once material transfer is done. Bay is released back to the available pool and status cascades to all stakeholders.',
                        owner: 'Operator',
                        type: 'process',
                    },
                    {
                        id: 'jwc-11',
                        label: 'Status Cascade & Notifications',
                        description: 'System auto-updates exhibitor dashboard, admin overview, and operator queue. All stakeholders receive real-time notifications on status changes.',
                        owner: 'System',
                        type: 'success',
                    },
                    {
                        id: 'jwc-12',
                        label: 'Event Closure & Audit Summary',
                        description: 'Admin closes the event after all vehicles are checked out. System generates audit report — total vehicles processed, average turnaround time, conflicts resolved.',
                        owner: 'Admin',
                        type: 'end',
                    },
                ],
            },
            {
                id: 'screens',
                type: 'screens',
                title: 'Interactive Prototype',
                content: 'Explore the end-to-end logistics management workflows through this interactive prototype.',
                figmaEmbedUrl: 'https://embed.figma.com/proto/NjtrcI2G0CJzuIfCADK9Px/Jio-World-Folio?node-id=1249-60545&viewport=902%2C-226%2C0.08&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1243%3A49126&page-id=1036%3A194&embed-host=share',
            },
            {
                id: 'outcomes',
                type: 'outcomes',
                title: 'Impact',
                content: 'The centralized platform successfully replaced fragmented manual tracking and eliminated coordination chaos during high-footfall events.',
                impactItems: [
                    {
                        icon: 'conflicts',
                        metric: '0',
                        label: 'Booking Conflicts',
                        description: 'Proactive detection eliminated 100% of day-of bay allocation failures and double-bookings.',
                    },
                    {
                        icon: 'turnaround',
                        metric: '3×',
                        label: 'Faster Turnaround',
                        description: 'System-driven bay availability and queue management dramatically reduced vehicle wait times.',
                    },
                    {
                        icon: 'selfservice',
                        metric: '80%',
                        label: 'Fewer Queries',
                        description: 'Exhibitor self-service portal eliminated the majority of inbound operations team queries.',
                    },
                    {
                        icon: 'audit',
                        metric: 'Auto',
                        label: 'Audit Reports',
                        description: 'Post-event reporting — vehicles processed, turnaround times, conflicts resolved — fully automated.',
                    },
                ],
            },
        ],
    },
];
