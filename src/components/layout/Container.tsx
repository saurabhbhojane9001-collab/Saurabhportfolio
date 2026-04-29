import type { ReactNode } from 'react';
import './Container.css';

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

export default function Container({ children, className = '' }: ContainerProps) {
    return (
        <main className={`container ${className}`}>
            {children}
        </main>
    );
}
