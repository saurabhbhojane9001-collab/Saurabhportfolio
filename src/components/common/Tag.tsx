import './Tag.css';

interface TagProps {
    label: string;
    icon?: string;
    accent?: string;
}

export default function Tag({ label, icon, accent }: TagProps) {
    return (
        <span
            className="tag"
            style={accent ? { '--tag-accent': accent } as React.CSSProperties : undefined}
        >
            {icon && <img src={icon} alt="" className="tag__icon" aria-hidden="true" />}
            {label}
        </span>
    );
}
