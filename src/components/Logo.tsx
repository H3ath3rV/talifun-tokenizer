import { useEffect, useRef, type FC } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

export const Logo: FC<{ className?: string, static?: boolean }> = ({ className = '', static: isStatic = false }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const instanceId = useRef(`logo-${Math.random().toString(36).substr(2, 9)}`).current;
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!svgRef.current || isStatic) return;

    const blocks = Array.from(svgRef.current.querySelectorAll(`.${instanceId}-block`)) as SVGGraphicsElement[];

    // Skip animation entirely when reduced motion is preferred
    if (reducedMotion) {
      blocks.forEach((el) => {
        el.style.transform = 'translate(0px, 0px) scale(1)';
        el.style.opacity = '1';
        el.style.willChange = 'auto';
      });
      return;
    }

    const BURST_X = 145;
    const BURST_Y = 208;
    const SCATTER_PX = 230;


    blocks.forEach((el, i) => {
      const b = el.getBBox();
      const cx = b.x + b.width / 2;
      const cy = b.y + b.height / 2;
      const dx = cx - BURST_X;
      const dy = cy - BURST_Y;
      const len = Math.sqrt(dx * dx + dy * dy) || 1;

      const tx = (dx / len) * SCATTER_PX;
      const ty = (dy / len) * SCATTER_PX;
      const delay = 100 + i * 8;

      // Animate each block converging from its scatter position
      const anim = el.animate(
        [
          { transform: `translate(${tx}px, ${ty}px) scale(0.5)`, opacity: 0, offset: 0 },
          { opacity: 1, offset: 0.3 },
          { transform: 'translate(0px, 0px) scale(1)', opacity: 1, offset: 1 },
        ],
        {
          duration: 680,
          delay,
          easing: 'cubic-bezier(0.34, 1.28, 0.64, 1)',
          fill: 'backwards', // hold start-state during the delay
        }
      );

      // When the animation finishes, bake the final state as inline styles and
      // cancel the WAAPI layer so the CSS class `opacity: 0` can never re-assert.
      anim.onfinish = () => {
        el.style.transform = 'translate(0px, 0px) scale(1)';
        el.style.opacity = '1';
        el.style.willChange = 'auto';
        anim.cancel();
      };
    });
  }, []);

  return (
    <svg
      ref={svgRef}
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3419.07 452.18"
      className={className}
      style={{ overflow: 'visible' }}
      role="img"
      aria-labelledby={`${instanceId}-title ${instanceId}-desc`}
    >
      <title id={`${instanceId}-title`}>Talifun Tokenizer Logo</title>
      <desc id={`${instanceId}-desc`}>A stylized kinetic logo representing fast BPE tokenization processing.</desc>
      <defs>
        <linearGradient id={`orange-shimmer-${instanceId}`} x1="0%" y1="0%" x2="200%" y2="0%">
          <stop offset="0%" stopColor="#FF5100" />
          <stop offset="50%" stopColor="#ff8800" />
          <stop offset="100%" stopColor="#FF5100" />
          <animate attributeName="x1" values="200%;-200%" dur="3s" repeatCount="indefinite" />
          <animate attributeName="x2" values="400%;0%" dur="3s" repeatCount="indefinite" />
        </linearGradient>
        <style>{`
          .${instanceId}-cls1 { fill: url(#orange-shimmer-${instanceId}); filter: drop-shadow(0 0 8px rgba(255,81,0,0.3)); }
          .${instanceId}-cls2 { fill: currentColor; }
          .${instanceId}-block {
            ${isStatic
            ? 'opacity: 1; transform: translate(0,0) scale(1);'
            : 'opacity: 0;'  /* JS animation takes over; start invisible */
          }
            will-change: transform, opacity;
          }
        `}</style>
      </defs>

      {/* Text lettering */}
      <g>
        <polygon className={`${instanceId}-cls2`} points="771.23 91.99 587.63 91.99 587.63 129.79 658.91 129.79 658.91 360.19 701.03 360.19 701.03 129.79 771.23 129.79 771.23 91.99" />
        <path className={`${instanceId}-cls2`} d="M900.29,169.75c-11.88-5.76-25.5-8.64-40.86-8.64-12.24,0-23.82,2.04-34.74,6.12-10.92,4.08-20.46,9.78-28.62,17.1-8.16,7.32-14.04,15.78-17.64,25.38l33.84,16.92c3.84-8.88,9.78-16.14,17.82-21.78,8.04-5.64,17.46-8.46,28.26-8.46,11.76,0,21.18,3.06,28.26,9.18,7.08,6.12,10.62,13.98,10.62,23.58v7.43l-61.92,10.21c-14.88,2.4-27.24,6.48-37.08,12.24-9.84,5.76-17.1,12.84-21.78,21.24-4.68,8.4-7.02,17.88-7.02,28.44,0,11.28,2.76,21.06,8.28,29.34,5.52,8.28,13.26,14.76,23.22,19.44,9.96,4.68,21.54,7.02,34.74,7.02,11.04,0,21.06-1.56,30.06-4.68s17.04-7.56,24.12-13.32c3.34-2.72,6.4-5.69,9.18-8.9v22.58h38.88v-131.04c0-13.44-3.3-25.26-9.9-35.46-6.6-10.2-15.84-18.18-27.72-23.94ZM890.39,306.01c-4.56,8.04-10.98,14.46-19.26,19.26-8.28,4.8-17.94,7.2-28.98,7.2-8.88,0-16.14-2.34-21.78-7.02-5.64-4.68-8.46-10.74-8.46-18.18s2.52-13.98,7.56-18.9c5.04-4.92,12.96-8.34,23.76-10.26l54-9.43v10.51c0,9.84-2.28,18.78-6.84,26.82Z" />
        <rect className={`${instanceId}-cls2`} x="985.42" y="87.67" width="40.68" height="272.52" />
        <rect className={`${instanceId}-cls2`} x="1073.62" y="165.43" width="40.68" height="194.76" />
        <rect className={`${instanceId}-cls2`} x="1073.62" y="91.99" width="40.68" height="46.8" />
        <path className={`${instanceId}-cls2`} d="M1254.7,87.67c-13.92,0-26.22,2.64-36.9,7.92-10.68,5.28-19.02,12.9-25.02,22.86-6,9.96-9,22.26-9,36.9v10.08h-36v36.72h36v158.04h40.32v-158.04h44.64v-36.72h-44.64v-10.08c0-11.28,3.24-19.38,9.72-24.3,6.48-4.92,15.12-7.38,25.92-7.38,1.44,0,3.36.06,5.76.18,2.39.12,4.55.42,6.48.9v-35.28c-2.16-.48-4.92-.9-8.28-1.26-3.36-.36-6.36-.54-9-.54Z" />
        <path className={`${instanceId}-cls2`} d="M1429.66,280.27c0,9.36-1.86,17.52-5.58,24.48-3.72,6.96-8.82,12.36-15.3,16.2-6.48,3.84-14.04,5.76-22.68,5.76s-15.84-1.86-22.32-5.58c-6.48-3.72-11.52-8.94-15.12-15.66-3.6-6.72-5.4-14.52-5.4-23.4v-116.64h-40.68v120.24c0,15.6,3.06,29.34,9.18,41.22,6.12,11.88,14.7,21.12,25.74,27.72,11.04,6.6,23.88,9.9,38.52,9.9s26.52-3.24,37.08-9.72c7.73-4.74,13.84-10.97,18.36-18.67v24.07h38.52v-194.76h-40.32v114.84Z" />
        <path className={`${instanceId}-cls2`} d="M1649.62,170.47c-11.04-6.24-23.76-9.36-38.16-9.36s-26.16,3.18-36.72,9.54c-7.63,4.59-13.74,10.72-18.36,18.38v-23.6h-38.88v194.76h40.68v-114.84c0-9.6,1.8-17.88,5.4-24.84,3.6-6.96,8.7-12.3,15.3-16.02,6.6-3.72,14.1-5.58,22.5-5.58s15.9,1.86,22.5,5.58c6.6,3.72,11.7,9,15.3,15.84,3.6,6.84,5.4,15.18,5.4,25.02v114.84h40.32v-125.64c0-14.4-3.12-27.12-9.36-38.16-6.24-11.04-14.88-19.68-25.92-25.92Z" />
        <polygon className={`${instanceId}-cls2`} points="1955.25 91.99 1771.65 91.99 1771.65 129.79 1842.93 129.79 1842.93 360.19 1885.05 360.19 1885.05 129.79 1955.25 129.79 1955.25 91.99" />
        <path className={`${instanceId}-cls2`} d="M2103.39,174.25c-15.24-8.76-32.46-13.14-51.66-13.14s-36.12,4.38-51.48,13.14c-15.36,8.76-27.6,20.76-36.72,36-9.12,15.24-13.68,32.7-13.68,52.38s4.56,36.84,13.68,52.2c9.12,15.36,21.42,27.48,36.9,36.36,15.48,8.88,32.58,13.32,51.3,13.32s35.76-4.38,51.12-13.14c15.36-8.76,27.6-20.82,36.72-36.18,9.12-15.36,13.68-32.88,13.68-52.56s-4.5-37.14-13.5-52.38c-9-15.24-21.12-27.24-36.36-36ZM2103.39,295.57c-5.16,9.72-12.18,17.34-21.06,22.86-8.88,5.52-19.08,8.28-30.6,8.28s-21.42-2.76-30.42-8.28c-9-5.52-16.08-13.14-21.24-22.86-5.16-9.72-7.74-20.7-7.74-32.94s2.58-23.16,7.74-32.76c5.16-9.6,12.24-17.16,21.24-22.68,9-5.52,19.14-8.28,30.42-8.28s21.72,2.76,30.6,8.28c8.88,5.52,15.9,13.08,21.06,22.68,5.16,9.6,7.74,20.52,7.74,32.76s-2.58,23.22-7.74,32.94Z" />
        <polygon className={`${instanceId}-cls2`} points="2366.01 165.43 2315.25 165.43 2233.53 249.86 2233.53 87.67 2192.85 87.67 2192.85 360.19 2233.53 360.19 2233.53 301.06 2262.76 270.01 2322.45 360.19 2369.25 360.19 2292.57 243.55 2366.01 165.43" />
        <path className={`${instanceId}-cls2`} d="M2549.97,189.37c-7.92-8.76-17.64-15.66-29.16-20.7-11.52-5.04-24.6-7.56-39.24-7.56-18.24,0-34.56,4.38-48.96,13.14-14.4,8.76-25.86,20.7-34.38,35.82-8.52,15.12-12.78,32.52-12.78,52.2s4.2,36.54,12.6,52.02c8.4,15.48,20.1,27.72,35.1,36.72,15,9,32.22,13.5,51.66,13.5,13.2,0,25.38-2.1,36.54-6.3,11.16-4.2,20.76-9.96,28.8-17.28,8.04-7.32,13.98-15.54,17.82-24.66l-33.12-16.2c-4.8,8.4-11.34,15.24-19.62,20.52-8.28,5.28-18.3,7.92-30.06,7.92s-21.78-2.76-30.78-8.28c-9-5.52-15.96-13.2-20.88-23.04-3.38-6.76-5.32-14.32-5.81-22.68h144.95c.72-2.88,1.2-6,1.44-9.36.24-3.36.36-6.6.36-9.72,0-12.72-2.1-24.72-6.3-36-4.2-11.28-10.26-21.3-18.18-30.06ZM2433.33,226.45c4.56-9.96,11.04-17.64,19.44-23.04,8.4-5.4,18-8.1,28.8-8.1s20.22,2.7,28.26,8.1c8.04,5.4,14.04,12.72,18,21.96,2.22,5.18,3.44,10.76,3.66,16.74h-102.79c.92-5.69,2.46-10.92,4.63-15.66Z" />
        <path className={`${instanceId}-cls2`} d="M2746.17,170.47c-11.04-6.24-23.76-9.36-38.16-9.36s-26.16,3.18-36.72,9.54c-7.63,4.59-13.74,10.72-18.36,18.38v-23.6h-38.88v194.76h40.68v-114.84c0-9.6,1.8-17.88,5.4-24.84,3.6-6.96,8.7-12.3,15.3-16.02,6.6-3.72,14.1-5.58,22.5-5.58s15.9,1.86,22.5,5.58c6.6,3.72,11.7,9,15.3,15.84,3.6,6.84,5.4,15.18,5.4,25.02v114.84h40.32v-125.64c0-14.4-3.12-27.12-9.36-38.16-6.24-11.04-14.88-19.68-25.92-25.92Z" />
        <rect className={`${instanceId}-cls2`} x="2825.01" y="91.99" width="40.68" height="46.8" />
        <rect className={`${instanceId}-cls2`} x="2825.01" y="165.43" width="40.68" height="194.76" />
        <polygon className={`${instanceId}-cls2`} points="3052.53 198.55 3052.53 165.43 2900.97 165.43 2900.97 202.15 2998.45 202.15 2895.57 326.71 2895.57 360.19 3052.89 360.19 3052.89 323.11 2951.2 323.11 3052.53 198.55" />
        <path className={`${instanceId}-cls2`} d="M3239.36,189.37c-7.92-8.76-17.64-15.66-29.16-20.7-11.52-5.04-24.6-7.56-39.24-7.56-18.24,0-34.56,4.38-48.96,13.14-14.4,8.76-25.86,20.7-34.38,35.82-8.52,15.12-12.78,32.52-12.78,52.2s4.2,36.54,12.6,52.02c8.4,15.48,20.1,27.72,35.1,36.72,15,9,32.22,13.5,51.66,13.5,13.2,0,25.38-2.1,36.54-6.3,11.16-4.2,20.76-9.96,28.8-17.28,8.04-7.32,13.98-15.54,17.82-24.66l-33.12-16.2c-4.8,8.4-11.34,15.24-19.62,20.52-8.28,5.28-18.3,7.92-30.06,7.92s-21.78-2.76-30.78-8.28c-9-5.52-15.96-13.2-20.88-23.04-3.38-6.76-5.32-14.32-5.81-22.68h144.95c.72-2.88,1.2-6,1.44-9.36.24-3.36.36-6.6.36-9.72,0-12.72-2.1-24.72-6.3-36-4.2-11.28-10.26-21.3-18.18-30.06ZM3122.72,226.45c4.56-9.96,11.04-17.64,19.44-23.04,8.4-5.4,18-8.1,28.8-8.1s20.22,2.7,28.26,8.1c8.04,5.4,14.04,12.72,18,21.96,2.22,5.18,3.44,10.76,3.66,16.74h-102.79c.92-5.69,2.46-10.92,4.63-15.66Z" />
        <path className={`${instanceId}-cls2`} d="M3394.16,162.91c-13.44,0-24.96,2.82-34.56,8.46-7.28,4.28-13.04,10.6-17.28,18.94v-24.88h-38.88v194.76h40.68v-112.32c0-15.36,4.14-27.18,12.42-35.46s19.14-12.42,32.58-12.42h16.92v-37.08h-11.88Z" />
      </g>

      {/* Animated icon blocks */}
      <g>
        <polygon className={`${instanceId}-cls1 ${instanceId}-block`} points="516.5 49.62 485.35 49.68 485.3 18.25 516.51 18.3 516.5 49.62" />
        <path className={`${instanceId}-cls1 ${instanceId}-block`} d="M276.78,22.38L227.32,0l-42.39,13.94,49.97,22.47c.39,0,41.88-14.03,41.88-14.03Z" />
        <rect className={`${instanceId}-cls1 ${instanceId}-block`} x="434.67" y="105.3" width="52.75" height="52.45" transform="translate(329.13 592.47) rotate(-89.95)" />
        <polygon className={`${instanceId}-cls1 ${instanceId}-block`} points="513.83 316.65 466.66 316.4 466.61 269.56 513.77 269.5 513.83 316.65" />
        <polygon className={`${instanceId}-cls1 ${instanceId}-block`} points="430.29 272.94 383.09 273.03 383.23 227.88 429.81 227.06 430.29 272.94" />
        <polygon className={`${instanceId}-cls1 ${instanceId}-block`} points="353.76 131.95 310.51 132.03 310.44 88.38 353.78 88.46 353.76 131.95" />
        <polygon className={`${instanceId}-cls1 ${instanceId}-block`} points="414.96 68.34 381.32 68.41 381.26 34.45 414.98 34.51 414.96 68.34" />
        <path className={`${instanceId}-cls1 ${instanceId}-block`} d="M55.34,304.55L.09,279.57l-.09,76.58,56.06,25.84c-.86-.86-.72-77.44-.72-77.44Z" />
        <polygon className={`${instanceId}-cls1 ${instanceId}-block`} points="71.41 311.22 72.54 388.95 128.76 414.8 128.74 338.24 71.41 311.22" />
        <polygon className={`${instanceId}-cls1 ${instanceId}-block`} points="145.81 345.95 147.29 423.67 205.2 450.57 204.92 372.83 145.81 345.95" />
        <polygon className={`${instanceId}-cls1 ${instanceId}-block`} points="147.29 327.05 205.2 353.95 205.29 277.25 145.81 249.96 147.29 327.05" />
        <polygon className={`${instanceId}-cls1 ${instanceId}-block`} points="71.41 215.53 72.54 293.26 128.76 319.11 128.74 242.54 71.41 215.53" />
        <path className={`${instanceId}-cls1 ${instanceId}-block`} d="M55.34,208.85L.09,183.87l-.09,76.58,56.06,25.84c-.86-.86-.72-77.44-.72-77.44Z" />
        <polygon className={`${instanceId}-cls1 ${instanceId}-block`} points="145.81 154.01 147.19 231.29 205.04 258.15 204.92 180.9 145.81 154.01" />
        <polygon className={`${instanceId}-cls1 ${instanceId}-block`} points="71.41 118.28 72.54 196.01 128.76 221.86 128.74 145.3 71.41 118.28" />
        <path className={`${instanceId}-cls1 ${instanceId}-block`} d="M55.34,111.61L.09,86.63l-.09,76.58,56.06,25.84c-.86-.86-.72-77.44-.72-77.44Z" />
        <polygon className={`${instanceId}-cls1 ${instanceId}-block`} points="143.18 70.14 93.72 47.76 17.17 75.54 67.14 98.01 143.18 70.14" />
        <polygon className={`${instanceId}-cls1 ${instanceId}-block`} points="86.13 105.81 140.39 131.7 212.47 103.15 160.87 79.25 86.13 105.81" />
        <polygon className={`${instanceId}-cls1 ${instanceId}-block`} points="182.36 73.05 233.75 96.06 282.9 77.87 231.3 53.96 182.36 73.05" />
        <path className={`${instanceId}-cls1 ${instanceId}-block`} d="M213.61,44.86l-49.46-22.38-53.63,17.43,49.97,22.47c.39,0,53.12-17.52,53.12-17.52Z" />
        <polygon className={`${instanceId}-cls1 ${instanceId}-block`} points="351.18 53.73 299.59 29.83 255.81 46.48 308.54 70.87 351.18 53.73" />
        <polygon className={`${instanceId}-cls1 ${instanceId}-block`} points="286.91 150.39 222.27 182.35 222.76 256.37 288.03 223.29 286.91 150.39" />
        <rect className={`${instanceId}-cls1 ${instanceId}-block`} x="327.37" y="336.57" width="52.03" height="51.78" />
        <polygon className={`${instanceId}-cls1 ${instanceId}-block`} points="286.91 346.19 222.27 378.16 222.76 452.18 288.03 419.09 286.91 346.19" />
        <polygon className={`${instanceId}-cls1 ${instanceId}-block`} points="159.39 141.02 213.24 167.36 282.27 135.78 232.15 113.12 159.39 141.02" />
        <rect className={`${instanceId}-cls1 ${instanceId}-block`} x="323.72" y="157.79" width="56.6" height="55.23" />
        <rect className={`${instanceId}-cls1 ${instanceId}-block`} x="271.72" y="259.9" width="59.92" height="59.84" />
      </g>
    </svg>
  );
};
