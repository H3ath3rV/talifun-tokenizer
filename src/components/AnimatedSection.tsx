import { type FC, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useAlreadyInView } from '../hooks/useAlreadyInView';
import { useReducedMotion } from '../hooks/useReducedMotion';

export const AnimatedSection: FC<{
    children: ReactNode,
    delay?: number,
    className?: string,
    rootMargin?: string,
    useParentTrigger?: boolean
}> = ({
    children,
    delay = 0,
    className = "",
    rootMargin = "0px 0px -15% 0px",
    useParentTrigger = false,
}) => {
        const { ref, alreadyInView } = useAlreadyInView();
        const reducedMotion = useReducedMotion();

        const skipAnimation = alreadyInView || reducedMotion;

        const variants = {
            hidden: { opacity: 0, y: 24 },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: skipAnimation ? 0 : 0.8,
                    ease: [0, 0, 0.2, 1],
                    delay: skipAnimation ? 0 : delay
                }
            }
        };

        // If using parent trigger, we still need the ref for detection but
        // can't use our own whileInView. The parent handles triggering.
        // If alreadyInView or reduced motion, skip to visible immediately.
        const initial = useParentTrigger
            ? (skipAnimation ? "visible" : undefined)
            : (skipAnimation ? "visible" : "hidden");
        const whileInView = useParentTrigger
            ? undefined
            : "visible";
        const viewport = useParentTrigger
            ? undefined
            : { once: true, margin: rootMargin };

        return (
            <motion.div
                ref={ref}
                initial={initial}
                whileInView={whileInView}
                viewport={viewport}
                variants={variants}
                className={className}
            >
                {children}
            </motion.div>
        );
    };
