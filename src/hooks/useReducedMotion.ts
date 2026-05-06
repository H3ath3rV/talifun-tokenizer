import { useState, useEffect } from 'react';

/**
 * Returns true when the user has enabled "Reduce motion" in OS settings.
 * Subscribes to changes so toggling the preference updates live.
 */
export function useReducedMotion(): boolean {
    const [prefersReduced, setPrefersReduced] = useState(() => {
        if (typeof window === 'undefined') return false;
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    });

    useEffect(() => {
        const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
        const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
        mql.addEventListener('change', handler);
        return () => mql.removeEventListener('change', handler);
    }, []);

    return prefersReduced;
}
