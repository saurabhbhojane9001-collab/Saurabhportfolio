import { useEffect, useRef, useCallback } from 'react';

/**
 * useScrollReveal
 *
 * Applies a `.revealed` class to elements when they scroll into view.
 * Elements should have the `.scroll-reveal` class for initial hidden state.
 *
 * @param options - IntersectionObserver options
 * @returns setRef callback to attach to elements
 */
export function useScrollReveal(options?: IntersectionObserverInit) {
    const elementsRef = useRef<Set<HTMLElement>>(new Set());
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        observerRef.current?.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -60px 0px',
                ...options,
            }
        );

        elementsRef.current.forEach((el) => {
            observerRef.current?.observe(el);
        });

        return () => observerRef.current?.disconnect();
    }, [options]);

    const setRevealRef = useCallback((el: HTMLElement | null) => {
        if (el) {
            elementsRef.current.add(el);
            el.classList.add('scroll-reveal');
            observerRef.current?.observe(el);
        }
    }, []);

    return { setRevealRef };
}
