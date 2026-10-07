import { Icon } from "@/components/icon";
import { site } from "@/lib/site";

export function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

/** Primary booking action: a DM on Instagram, which she prefers. */
export function DmLink({
  className,
  label = "DM to Book",
}: {
  className: string;
  label?: string;
}) {
  return (
    <a href={site.instagram.dm} {...external} className={className}>
      <InstagramIcon className="w-[18px] h-[18px] shrink-0" />
      <span>{label}</span>
    </a>
  );
}

export function WhatsAppLink({
  className,
  label = `WhatsApp ${site.whatsapp.display}`,
}: {
  className: string;
  label?: string;
}) {
  return (
    <a href={site.whatsapp.href} {...external} className={className}>
      <Icon name="chat" className="text-[18px]" />
      <span>{label}</span>
    </a>
  );
}

export const buttonStyles = {
  primary:
    "inline-flex items-center justify-center gap-space-xs px-space-xl py-space-md bg-secondary text-surface text-label-md uppercase tracking-wider rounded-lg shadow-md hover:bg-on-secondary-container transition-colors",
  secondary:
    "inline-flex items-center justify-center gap-space-xs px-space-lg py-space-md bg-surface-container text-primary text-label-md uppercase tracking-wider rounded-lg hover:bg-surface-container-high transition-colors",
  dark: "inline-flex items-center justify-center gap-space-xs px-space-xl py-space-md bg-primary text-surface text-label-md uppercase tracking-wider rounded-lg hover:bg-secondary transition-colors",
  link: "inline-flex items-center gap-1 text-label-sm text-secondary uppercase tracking-wider hover:underline",
} as const;
