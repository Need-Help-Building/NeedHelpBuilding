import {
  BrainCircuit,
  Braces,
  Compass,
  MonitorSmartphone,
  PenTool,
  ServerCog,
  ShieldCheck,
  TrendingUp,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { ServiceIcon } from "@/content/services";

export const serviceIcons: Record<ServiceIcon, LucideIcon> = {
  ai: BrainCircuit,
  automation: Workflow,
  consulting: Compass,
  software: Braces,
  web: MonitorSmartphone,
  design: PenTool,
  quality: ShieldCheck,
  cloud: ServerCog,
  growth: TrendingUp,
};

export function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
