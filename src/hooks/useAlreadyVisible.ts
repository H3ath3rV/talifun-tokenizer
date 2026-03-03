import { useRef, useEffect, useState } from 'react';

/**
 * Returns true when the element should be shown immediately without animation.
 *
 * This covers two cases:
 *  1. The element is entirely above the viewport (rect.bottom < 0) —
 *     meaning the user has scrolled past it.
 *  2. The page was loaded/refreshed with a non-zero scroll position (browser
 *     scroll restoration) AND the element is already in or above the viewport.
 *     Without this, elements above the fold on a restored-scroll page stay
 *     invisible until the user scrolls up to them, causing unwanted animations
 *     when scrolling backward.
 *
 * Uses requestAnimationFrame so the check runs AFTER the browser has
 * finished restoring the scroll position from session history.
 */
export function useAlreadyVisible() {
    const ref = useRef<HTMLDivElement>(null);
    const [alreadyVisible, setAlreadyVisible] = useState(false);

    useEffect(() => {
        let cancelled = false;

        // requestAnimationFrame defers until after the browser has painted
        // and restored any saved scroll position from session history.
        requestAnimationFrame(() => {
            if (cancelled || !ref.current) return;

            const rect = ref.current.getBoundingClientRect();
            const scrollY = window.scrollY;

            const isAboveViewport = rect.bottom < 0;
            // Page was loaded mid-scroll (e.g. refresh at bottom) and
            // this element is already within or above the current viewport.
            const isInViewOnScrolledPage = scrollY > 100 && rect.top < window.innerHeight;

            if (isAboveViewport || isInViewOnScrolledPage) {
                setAlreadyVisible(true);
            }
        });

        return () => { cancelled = true; };
    }, []);

    return { ref, alreadyVisible };
}
