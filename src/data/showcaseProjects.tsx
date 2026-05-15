import type { ReactNode } from 'react';
import { OperationsIcon, SupplierIcon } from './showcaseIcons';

export interface ShowcaseProject {
    id: string;
    icon: ReactNode;
    title: string;
    description: string;
    supporting?: string;
    tags: string[];
    visual: {
        type: 'image' | 'video';
        src: string;
        poster?: string;
    };
}

export const showcaseProjects: ShowcaseProject[] = [
    {
        id: 'supplier-onboarding',
        icon: <SupplierIcon />,
        title: 'Supplier Relationship & Vendor Onboarding',
        description:
            'Led end-to-end UX for a unified B2B supplier platform — launched to 500+ suppliers, reducing onboarding time by 78% and accelerating approvals by 5×.',
        supporting:
            'Architected workflow infrastructure with AI-suggested forms, automated AML compliance checks, and multi-level approval routing replacing manual email tracking.',
        tags: ['Enterprise', 'B2B', 'Supplier Onboarding', 'Compliance'],
        visual: {
            type: 'image',
            src: '/images/srm-platform-preview.png',
        },
    },
    {
        id: 'jio-world-centre',
        icon: <OperationsIcon />,
        title: 'Jio World Centre — Roadways',
        description:
            'Tablet-first logistics for gates and loading bays: digital check-in/out, bay scheduling, and real-time coordination for operators, admins, and exhibitors during high-footfall events.',
        supporting:
            'Mapped three role-specific journeys (operator, admin, exhibitor), defined a shared booking and bay lifecycle, and paired admin analytics with fast, interruptible operator flows at the venue.',
        tags: ['Product Design', 'Roadways', 'Logistics', 'Tablet UX', 'Jio World Centre'],
        visual: {
            type: 'video',
            src: '/portfolio video.mp4',
            poster: '/images/jwc-operations-preview.png',
        },
    },
];
