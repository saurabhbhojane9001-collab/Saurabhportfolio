import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * useInViewCenter
 *
 * Tracks which element (by index) is closest to the center of the viewport.
 * Uses IntersectionObserver with a rootMargin that isolates the middle ~40%
 * of the screen. Returns the index of the currently "active" element.
 *
 * @param count Number of elements to observe
 * @returns { refs, activeIndex } — refs callback to attach, and active index
 */
export function useInViewCenter(count: number) {
    const [activeIndex, setActiveIndex] = useState<number>(-1);
    const elementsRef = useRef<(HTMLElement | null)[]>([]);

    // Stable ref setter
    const setRef = useCallback(
        (index: number) => (el: HTMLElement | null) => {
            elementsRef.current[index] = el;
        },
        []
    );

    useEffect(() => {
        const elements = elementsRef.current.filter(Boolean) as HTMLElement[];
        if (elements.length === 0) return;

        // rootMargin: ignore the top 30% and bottom 30% of the viewport
        // so only elements in the center ~40% trigger the observer
        const observer = new IntersectionObserver(
            (entries) => {
                // Find the entry with the highest intersection ratio
                let bestIndex = -1;
                let bestRatio = 0;

                for (const entry of entries) {
                    if (entry.isIntersecting && entry.intersectionRatio > bestRatio) {
                        bestRatio = entry.intersectionRatio;
                        const idx = elements.indexOf(entry.target as HTMLElement);
                        if (idx !== -1) bestIndex = idx;
                    }
                }

                if (bestIndex !== -1) {
                    setActiveIndex(bestIndex);
                }
            },
            {
                // Shrink observation area to center 40% of viewport
                rootMargin: '-30% 0px -30% 0px',
                threshold: [0, 0.25, 0.5, 0.75, 1],
            }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [count]);

    return { setRef, activeIndex };
}
