type SocialIconProps = {
    size?: number;
    className?: string;
};

export const HackerNewsIcon = ({ size = 20, className = "" }: SocialIconProps) => (
    <svg width={size} height={size} viewBox="5 4 14 16" fill="none" className={className} aria-hidden="true" role="img">
        <path d="M7.9 7h2.15l1.96 3.45L14 7h2.12l-3.15 5.6V17h-1.94v-4.4L7.9 7Z" fill="currentColor" />
    </svg>
);

export const LinkedInIcon = ({ size = 20, className = "" }: SocialIconProps) => (
    <svg width={size} height={size} viewBox="4.5 5.5 15 14" fill="none" className={className} aria-hidden="true" role="img">
        <circle cx="7.7" cy="8.05" r="1.1" fill="currentColor" />
        <rect x="6.65" y="10.05" width="2.1" height="6.95" rx="0.5" fill="currentColor" />
        <path d="M10.9 10.05h2v1.05c.43-.73 1.25-1.22 2.5-1.22 1.86 0 2.95 1.21 2.95 3.57V17h-2.08v-3.23c0-1.3-.45-2-1.52-2-1.11 0-1.77.73-1.77 2V17H10.9v-6.95Z" fill="currentColor" />
    </svg>
);

export const RedditIcon = ({ size = 20, className = "" }: SocialIconProps) => (
    <svg width={size} height={size} viewBox="0 0 512 512" fill="none" className={className} aria-hidden="true" role="img">
        {/* Antenna stem */}
        <path d="M256 170 L290 75" stroke="currentColor" strokeWidth="48" strokeLinecap="round" />
        {/* Antenna ball */}
        <circle cx="306" cy="60" r="30" stroke="currentColor" strokeWidth="48" fill="none" />
        {/* Head (oval) */}
        <ellipse cx="256" cy="310" rx="190" ry="150" stroke="currentColor" strokeWidth="48" fill="none" />
        {/* Left ear */}
        <circle cx="60" cy="240" r="38" stroke="currentColor" strokeWidth="48" fill="none" />
        {/* Right ear */}
        <circle cx="452" cy="240" r="38" stroke="currentColor" strokeWidth="48" fill="none" />
        {/* Left eye */}
        <circle cx="180" cy="290" r="30" fill="currentColor" />
        {/* Right eye */}
        <circle cx="332" cy="290" r="30" fill="currentColor" />
        {/* Smile */}
        <path d="M180 370 Q256 430 332 370" stroke="currentColor" strokeWidth="36" strokeLinecap="round" fill="none" />
    </svg>
);

export const HuggingFaceIcon = ({ size = 20, className = "" }: SocialIconProps) => (
    <svg width={size} height={size} viewBox="0 0 512 512" fill="none" className={className} aria-hidden="true" role="img">
        {/* Head Outline */}
        <path d="M 121 390 A 190 190 0 1 1 391 390" stroke="currentColor" strokeWidth="48" strokeLinecap="round" fill="none" />

        {/* Left eye */}
        <circle cx="180" cy="240" r="30" fill="currentColor" />

        {/* Right eye */}
        <circle cx="332" cy="240" r="30" fill="currentColor" />

        {/* Smile */}
        <path d="M180 310 Q256 370 332 310" stroke="currentColor" strokeWidth="36" strokeLinecap="round" fill="none" />

        {/* Left Hand */}
        <path d="M 180 390 L 130 460 L 110 370 M 130 460 L 60 410" stroke="currentColor" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" fill="none" />

        {/* Right Hand */}
        <path d="M 332 390 L 382 460 L 402 370 M 382 460 L 452 410" stroke="currentColor" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
);
