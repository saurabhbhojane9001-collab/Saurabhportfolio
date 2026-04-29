import type { ReactNode } from 'react';
import './Button.css';

interface ButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'secondary';
    onClick?: () => void;
    href?: string;
}

export default function Button({
    children,
    variant = 'primary',
    onClick,
    href,
}: ButtonProps) {
    const className = `btn btn--${variant}`;

    if (href) {
        return (
            <a href={href} className={className}>
                {children}
            </a>
        );
    }

    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
}
