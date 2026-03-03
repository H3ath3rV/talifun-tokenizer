import { type FC } from 'react';
import { motion } from 'framer-motion';
import { type DataPoint } from '../data/benchmarks';
import { useAlreadyInView } from '../hooks/useAlreadyInView';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface BarChartProps {
  title: string;
  data: DataPoint[];
  unit: string;
  delay?: number;
  useParentTrigger?: boolean;
}

export const BarChart: FC<BarChartProps> = ({ title, data, unit, delay = 0, useParentTrigger = false }) => {
  const { ref, alreadyInView } = useAlreadyInView();
  const reducedMotion = useReducedMotion();
  const maxValue = Math.max(...data.map(d => d.value));

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: skipAnimation ? 0 : 0.6,
        ease: [0, 0, 0.2, 1]
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
    : { once: true, margin: "0px 0px -15% 0px" };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      variants={variants}
      className="border border-gray-200/80 dark:border-white/10 rounded-[24px] p-5 md:p-6 bg-white dark:bg-[#121212]/60 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.2)] h-full flex flex-col"
    >
      <div className="flex justify-center items-start mb-6">
        <h3 className="text-[20px] font-bold text-[#171717] dark:text-white text-center">{title}</h3>
      </div>

      <motion.div className="flex flex-col gap-4 flex-grow">
        {data.map((item, i) => {
          const widthPercent = Math.max((item.value / maxValue) * 100, 1);

          return (
            <motion.div
              key={i}
              variants={itemVariants}
              className="flex flex-col"
            >
              <div className="flex justify-between items-end mb-2">
                <div className={`text-[15px] ${item.isHighlight ? 'font-bold text-[#171717] dark:text-white' : 'font-medium text-gray-600 dark:text-gray-300'}`}>
                  {item.label}
                </div>
                <div className={`text-[15px] ${item.isHighlight ? 'font-bold text-[#171717] dark:text-white' : 'font-medium text-gray-600 dark:text-gray-300'}`}>
                  {item.value.toFixed(2)}<span className={`${item.isHighlight ? 'text-gray-500 dark:text-gray-400' : 'text-gray-500 dark:text-gray-500'} font-normal ml-1`}>{unit}</span>
                </div>
              </div>
              <div className={`w-full rounded-full overflow-hidden ${item.isHighlight ? 'h-3 bg-[#FF5100]/20 dark:bg-[#FF5100]/30' : 'h-2 bg-slate-200 dark:bg-[#1E212B]'}`}>
                <motion.div
                  variants={{
                    hidden: { scaleX: 0 },
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: skipAnimation ? 0 : 1,
                        ease: [0.175, 0.885, 0.32, 1.15],
                        delay: skipAnimation ? 0 : delay + 0.3 + (i * 0.15)
                      }
                    }
                  }}
                  style={{ width: `${widthPercent}%`, originX: 0 }}
                  className="h-full rounded-full"
                >
                  <div className={`w-full h-full rounded-full ${item.isHighlight ? 'bg-gradient-to-r from-[#FF5100] via-[#ff8800] to-[#FF5100] bg-[length:200%_auto] animate-shimmer shadow-[0_0_16px_rgba(255,81,0,0.3)]' : 'bg-slate-400 dark:bg-[#3A3F58]'}`} />
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};
