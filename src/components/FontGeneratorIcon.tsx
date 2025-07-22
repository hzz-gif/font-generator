interface FontGeneratorIconProps {
  className?: string;
  size?: number;
}

export default function FontGeneratorIcon({ className = "", size = 32 }: FontGeneratorIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background circle with gradient */}
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F3E8FF" />
        </linearGradient>
      </defs>
      
      {/* Main background */}
      <rect
        width="32"
        height="32"
        rx="8"
        fill="url(#bgGradient)"
      />
      
      {/* Decorative elements */}
      <circle cx="6" cy="6" r="1.5" fill="#FFFFFF" opacity="0.3" />
      <circle cx="26" cy="26" r="1.5" fill="#FFFFFF" opacity="0.3" />
      
      {/* Main "A" letter with modern styling */}
      <path
        d="M16 6L22 24H19.5L18.2 20H13.8L12.5 24H10L16 6Z"
        fill="url(#textGradient)"
      />
      <path
        d="M14.5 17H17.5L16 13L14.5 17Z"
        fill="url(#textGradient)"
      />
      
      {/* Stylized underline/accent */}
      <rect
        x="8"
        y="26"
        width="16"
        height="2"
        rx="1"
        fill="#FFFFFF"
        opacity="0.8"
      />
      
      {/* Small decorative dots */}
      <circle cx="10" cy="8" r="0.8" fill="#FFFFFF" opacity="0.6" />
      <circle cx="22" cy="8" r="0.8" fill="#FFFFFF" opacity="0.6" />
      <circle cx="8" cy="16" r="0.8" fill="#FFFFFF" opacity="0.4" />
      <circle cx="24" cy="16" r="0.8" fill="#FFFFFF" opacity="0.4" />
    </svg>
  );
}
