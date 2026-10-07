// Material Symbols used on the site. The font is subset to exactly these names
// (see layout.tsx), so add a name here before using a new icon.
export const iconNames = [
  "accessibility_new",
  "air",
  "auto_awesome",
  "bed",
  "bedtime",
  "bolt",
  "calendar_today",
  "chair",
  "chat",
  "commute",
  "dark_mode",
  "emoji_objects",
  "event_available",
  "favorite",
  "fitness_center",
  "format_quote",
  "handshake",
  "home",
  "home_repair_service",
  "location_on",
  "payments",
  "phonelink_erase",
  "query_builder",
  "restaurant",
  "schedule",
  "self_improvement",
  "spa",
  "touch_app",
  "update",
  "verified",
  "water_drop",
  "wb_sunny",
] as const;

export type IconName = (typeof iconNames)[number];

export function Icon({
  name,
  className = "",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <span aria-hidden="true" className={`material-symbols-outlined ${className}`}>
      {name}
    </span>
  );
}
