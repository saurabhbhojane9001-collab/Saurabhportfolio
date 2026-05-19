import { useEffect, useRef } from 'react';

/**
 * CursorGlow — smooth floating glow that follows the cursor.
 * Uses requestAnimationFrame + lerp for a premium, spring-like feel.
 * Renders a single absolutely-positioned div — no body::after hacks.
 */
export default function CursorGlow() {
    const glowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = glowRef.current;
        if (!el) return;

        let targetX = -600;
        let targetY = -600;
        let currentX = -600;
        let currentY = -600;
        let rafId: number;
        let visible = false;

        const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

        const animate = () => {
            currentX = lerp(currentX, targetX, 0.09);
            currentY = lerp(currentY, targetY, 0.09);
            el.style.transform = `translate(${currentX}px, ${currentY}px)`;
            rafId = requestAnimationFrame(animate);
        };

        const onMove = (e: MouseEvent) => {
            targetX = e.clientX - 300; // half of 600px width
            targetY = e.clientY - 300;
            if (!visible) {
                visible = true;
                el.style.opacity = '1';
            }
        };

        const onLeave = () => {
            visible = false;
            el.style.opacity = '0';
        };

        window.addEventListener('mousemove', onMove, { passive: true });
        document.addEventListener('mouseleave', onLeave);
        rafId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseleave', onLeave);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <div
            ref={glowRef}
            aria-hidden="true"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '600px',
                height: '600px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(124,106,250,0.10) 0%, rgba(99,102,241,0.04) 35%, transparent 70%)',
                pointerEvents: 'none',
                zIndex: 0,
                opacity: 0,
                transition: 'opacity 0.5s ease',
                willChange: 'transform',
            }}
        />
    );
}
