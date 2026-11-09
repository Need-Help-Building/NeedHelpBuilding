import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { className?: string };

export function ReactIcon({ className = "size-6", ...props }: IconProps) {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} fill="none" {...props}>
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function NextjsIcon({ className = "size-6", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 180 180" className={className} fill="none" {...props}>
      <mask id="next-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: "alpha" }}>
        <circle cx="90" cy="90" r="90" fill="black" />
      </mask>
      <g mask="url(#next-mask)">
        <circle cx="90" cy="90" r="90" fill="#000000" stroke="#ffffff" strokeWidth="6" />
        <path
          d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
          fill="url(#next-paint0)"
        />
        <rect x="115" y="54" width="12" height="72" fill="url(#next-paint1)" />
      </g>
      <defs>
        <linearGradient id="next-paint0" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="next-paint1" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function TypeScriptIcon({ className = "size-6", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 128 128" className={className} {...props}>
      <rect width="128" height="128" rx="16" fill="#3178C6" />
      <path
        d="M66.4 75.8c-2.4-1.2-5.4-2.2-9-2.9-3.6-.7-6.2-1.6-7.8-2.6-1.6-1.1-2.4-2.6-2.4-4.5 0-2 .8-3.7 2.4-5.1 1.6-1.4 3.8-2.1 6.6-2.1 3 0 5.8.8 8.4 2.3 2.6 1.5 4.7 3.6 6.3 6.3l12.4-9.3c-3-4.2-6.9-7.4-11.8-9.7-4.8-2.3-10.2-3.4-16.2-3.4-6.4 0-12.1 1.4-17 4.1-5 2.7-8.9 6.5-11.7 11.4-2.8 4.9-4.2 10.5-4.2 16.7 0 6.6 1.6 12.2 4.7 16.7 3.1 4.5 7.4 8.1 12.8 10.6 5.4 2.5 11.5 3.8 18.3 3.8 6.4 0 12-.9 16.9-2.8 4.9-1.9 8.9-4.7 11.9-8.4 3-3.7 4.5-8.2 4.5-13.4 0-4.6-1.2-8.5-3.6-11.8-2.4-3.3-6.1-5.9-10.8-7.9zM100.8 44.8H74.3v13.5h20.1v12.2H74.3v27h26.5v13.5H59.5V31.3h41.3v13.5z"
        fill="#FFFFFF"
        transform="translate(14, 8) scale(0.78)"
      />
      <text x="36" y="96" fill="#FFFFFF" fontFamily="sans-serif" fontSize="56" fontWeight="bold">TS</text>
    </svg>
  );
}

export function TailwindIcon({ className = "size-6", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <path
        d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"
        fill="#38BDF8"
      />
    </svg>
  );
}

export function NodejsIcon({ className = "size-6", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" {...props}>
      <path
        d="M16 2.5l11.69 6.75v13.5L16 29.5 4.31 22.75v-13.5L16 2.5z"
        fill="#5FA04E"
      />
      <path
        d="M16 4.5l9.96 5.75v11.5L16 27.5 6.04 21.75v-11.5L16 4.5z"
        fill="#333333"
      />
      <path
        d="M16 11.5a4.5 4.5 0 00-4.5 4.5c0 2.48 2.02 4.5 4.5 4.5s4.5-2.02 4.5-4.5a4.5 4.5 0 00-4.5-4.5zm0 6.5a2 2 0 110-4 2 2 0 010 4z"
        fill="#5FA04E"
      />
    </svg>
  );
}

export function PythonIcon({ className = "size-6", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 128 128" className={className} fill="none" {...props}>
      <path
        d="M63.086 4.043c-30.82 0-28.89 13.367-28.89 13.367l.035 13.852h29.355v4.176H21.223s-19.145 2.164-19.145 28.777c0 26.617 16.703 27.672 16.703 27.672h9.973v-13.988s-.54-16.703 16.43-16.703h28.277s15.617-.266 15.617-15.352V19.418s2.324-15.375-25.992-15.375zm-15.746 9.07c2.977 0 5.402 2.426 5.402 5.402 0 2.973-2.426 5.398-5.402 5.398-2.973 0-5.398-2.426-5.398-5.398 0-2.977 2.426-5.402 5.398-5.402z"
        fill="#3776AB"
      />
      <path
        d="M64.914 123.957c30.82 0 28.89-13.367 28.89-13.367l-.035-13.852H64.414v-4.176h42.363s19.145-2.164 19.145-28.777c0-26.617-16.703-27.672-16.703-27.672h-9.973v13.988s.54 16.703-16.43 16.703H54.531s-15.617.266-15.617 15.352v26.422s-2.324 15.379 25.992 15.379zm15.746-9.07c-2.977 0-5.402-2.426-5.402-5.402 0-2.973 2.426-5.398 5.402-5.398 2.973 0 5.398 2.426 5.398 5.398 0 2.977-2.426 5.402-5.398 5.402z"
        fill="#FFD43B"
      />
    </svg>
  );
}

export function RustIcon({ className = "size-6", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 106 106" className={className} fill="#DEA584" stroke="#000" strokeWidth="2" {...props}>
      <circle cx="53" cy="53" r="50" fill="#000000" stroke="#DEA584" strokeWidth="3" />
      <text x="53" y="68" fill="#DEA584" fontFamily="serif" fontSize="52" fontWeight="bold" textAnchor="middle">R</text>
    </svg>
  );
}

export function PostgresIcon({ className = "size-6", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 128 128" className={className} fill="none" {...props}>
      <rect width="128" height="128" rx="20" fill="#336791" />
      <path
        d="M64 20c-24 0-42 18-42 42 0 15 8 28 20 35v11l14-6c2.6.6 5.3 1 8 1 24 0 42-18 42-42S88 20 64 20zm-8 30c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6zm16 0c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function MongoIcon({ className = "size-6", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <path
        d="M12 1.5C12 1.5 5 8 5 14.5c0 4.2 3.1 7.7 7 8 3.9-.3 7-3.8 7-8C19 8 12 1.5 12 1.5z"
        fill="#47A248"
      />
      <path
        d="M12 1.5v21c.1 0 .2 0 .3 0 3.8-.3 6.7-3.8 6.7-8 0-6.5-7-13-7-13z"
        fill="#4CAF50"
      />
      <path d="M12 6.5v12c-.5-.1-1-.4-1.3-.8-.7-.9-.8-2.4-.8-3.7 0-2.8 1.2-5.4 2.1-7.5z" fill="#FFFFFF" opacity="0.6" />
    </svg>
  );
}

export function RedisIcon({ className = "size-6", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#DC382D" />
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#DC382D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DockerIcon({ className = "size-6", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <path
        d="M13.9 11.2h2.2v2.2h-2.2v-2.2zm-2.8 0h2.2v2.2h-2.2v-2.2zm-2.8 0h2.2v2.2H8.3v-2.2zm-2.8 0h2.2v2.2H5.5v-2.2zm5.6-2.8h2.2v2.2h-2.2V8.4zm-2.8 0h2.2v2.2H8.3V8.4zm-2.8 0h2.2v2.2H5.5V8.4zm5.6-2.8h2.2v2.2h-2.2V5.6zM22.5 11c-.5-.4-1.6-.5-2.4-.3-.3-.8-.9-1.5-1.7-2l-.5-.3-.3.5c-.3.7-.4 1.7 0 2.6-.8.4-2.1.5-3.3.5H1.5c-.3 1.2 0 4 1.8 6.3 1.9 2.5 4.8 3.4 8.7 3.4 7.2 0 10.9-3.9 11.5-9.3.5 0 1.2-.2 1.6-.7l.3-.4-.9-.6z"
        fill="#2496ED"
      />
    </svg>
  );
}

export function AwsIcon({ className = "size-6", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <path d="M7 8l-4 4 4 4M17 8l4 4-4 4" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 18c4.5 3 11.5 3 16 0" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="11" r="2.5" fill="#FF9900" />
    </svg>
  );
}

export function VercelIcon({ className = "size-6", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" {...props}>
      <path d="M12 2L24 22H0L12 2Z" />
    </svg>
  );
}

export function OpenAiIcon({ className = "size-6", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2a4 4 0 0 1 4 4v2.5a4 4 0 0 1-2 3.5l3.5 2a4 4 0 0 1 1.5 5.5l-2.2 1.3a4 4 0 0 1-5.5-1.5L9.5 16a4 4 0 0 1-4 0l-3.5 2a4 4 0 0 1-5.5-1.5l-1.3-2.2a4 4 0 0 1 1.5-5.5L0 7a4 4 0 0 1 2-3.5V6a4 4 0 0 1 4-4h6z" />
      <circle cx="12" cy="12" r="3" fill="currentColor" />
    </svg>
  );
}

export function AnthropicIcon({ className = "size-6", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" {...props}>
      <polygon points="12,2 15,9 22,12 15,15 12,22 9,15 2,12 9,9" />
    </svg>
  );
}

export function GeminiIcon({ className = "size-6", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <path
        d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z"
        fill="url(#gemini-grad)"
      />
      <defs>
        <linearGradient id="gemini-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4285F4" />
          <stop offset="0.5" stopColor="#9B72CB" />
          <stop offset="1" stopColor="#D96570" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function LlamaIcon({ className = "size-6", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 3v5l2 2v9a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V10l2-2V3M8 6h8M10 13h4" />
      <circle cx="9" cy="5" r="0.75" fill="currentColor" />
      <circle cx="15" cy="5" r="0.75" fill="currentColor" />
    </svg>
  );
}

export function GroqIcon({ className = "size-6", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="#F55036" />
    </svg>
  );
}

export function VectorDbIcon({ className = "size-6", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
      <circle cx="12" cy="7" r="1.5" fill="#fbda03" stroke="none" />
      <circle cx="7" cy="14.5" r="1.5" fill="#245bff" stroke="none" />
      <circle cx="17" cy="14.5" r="1.5" fill="#38bdf8" stroke="none" />
    </svg>
  );
}

export function GraphOrchIcon({ className = "size-6", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="6" cy="6" r="3" fill="#fbda03" stroke="none" />
      <circle cx="18" cy="8" r="3" fill="#245bff" stroke="none" />
      <circle cx="12" cy="18" r="3" fill="#34d399" stroke="none" />
      <line x1="8.5" y1="7" x2="15.5" y2="7.5" stroke="currentColor" />
      <line x1="7.5" y1="8.5" x2="10.5" y2="15.5" stroke="currentColor" />
      <line x1="16.5" y1="10" x2="13.5" y2="15.5" stroke="currentColor" />
    </svg>
  );
}

export function N8nIcon({ className = "size-6", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <rect width="24" height="24" rx="6" fill="#EA4B71" />
      <path
        d="M7 15V9l4 6V9m2 6V9l4 6V9"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MakeIcon({ className = "size-6", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <rect width="24" height="24" rx="6" fill="#6D3A9C" />
      <path
        d="M6 16V8l3 4 3-4v8m3 0V8l3 4 3-4v8"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ZapierIcon({ className = "size-6", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <rect width="24" height="24" rx="6" fill="#FF4A00" />
      <path
        d="M12 4v16m-8-8h16m-13.6-5.6l11.2 11.2m0-11.2L6.4 17.6"
        stroke="#FFFFFF"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IntegrationsIcon({ className = "size-6", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="8" height="8" rx="2" fill="#fbda03" stroke="none" />
      <rect x="14" y="14" width="8" height="8" rx="2" fill="#245bff" stroke="none" />
      <path d="M6 10v4a2 2 0 0 0 2 2h6" stroke="currentColor" />
      <path d="M14 6h4a2 2 0 0 1 2 2v4" stroke="currentColor" />
    </svg>
  );
}

export const TECH_ICON_MAP: Record<string, (props: IconProps) => React.JSX.Element> = {
  React: ReactIcon,
  "Next.js": NextjsIcon,
  TypeScript: TypeScriptIcon,
  "Tailwind CSS": TailwindIcon,
  "Node.js": NodejsIcon,
  Python: PythonIcon,
  Rust: RustIcon,
  PostgreSQL: PostgresIcon,
  MongoDB: MongoIcon,
  Redis: RedisIcon,
  Docker: DockerIcon,
  AWS: AwsIcon,
  Vercel: VercelIcon,
  OpenAI: OpenAiIcon,
  Anthropic: AnthropicIcon,
  Gemini: GeminiIcon,
  "Open-source LLMs": LlamaIcon,
  "Groq inference": GroqIcon,
  "Vector databases": VectorDbIcon,
  "Orchestration frameworks": GraphOrchIcon,
  n8n: N8nIcon,
  Make: MakeIcon,
  Zapier: ZapierIcon,
  "Custom integrations": IntegrationsIcon,
};

