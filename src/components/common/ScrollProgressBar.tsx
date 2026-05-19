import { useEffect, useRef } from 'react';

/**
 * ScrollProgressBar — thin violet line at top of viewport
 * showing how far the user has scrolled down the page.
 */
export default function ScrollProgressBar() {
    const barRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const bar = barRef.current;
        if (!bar) return;

        const update = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            bar.style.width = `${progress}%`;
        };

        window.addEventListener('scroll', update, { passive: true });
        update();
        return () => window.removeEventListener('scroll', update);
    }, []);

    return (
        <div
            aria-hidden="true"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                height: '2px',
                zIndex: 9999,
                background: 'transparent',
                width: '100%',
            }}
        >
            <div
                ref={barRef}
                style={{
                    height: '100%',
                    width: '0%',
                    background: 'linear-gradient(90deg, #7C3AED, #60A5FA)',
                    transition: 'width 0.1s linear',
                    borderRadius: '0 2px 2px 0',
                    boxShadow: '0 0 8px rgba(124,58,237,0.6)',
                }}
            />
        </div>
    );
}
