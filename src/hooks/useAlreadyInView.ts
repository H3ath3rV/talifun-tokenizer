import { useRef, useState, useEffect } from 'react';

/**
 * Checks on mount whether an element is already within or above the viewport.
 * If so, the element should skip its entrance animation and be immediately visible.
 * This handles the "refresh mid-scroll then scroll up" case.
 */
export function useAlreadyInView() {
    const ref = useRef<HTMLDivElement>(null);
    const [alreadyInView, setAlreadyInView] = useState(false);

    useEffect(() => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        // Element is already in or above the viewport
        if (rect.top < window.innerHeight) {
            setAlreadyInView(true);
        }
    }, []);

    return { ref, alreadyInView };
}
