import { Icon, type IconName } from "@/components/icon";

// From the "Wellness Tips" highlight on Instagram.
const tips: { icon: IconName; title: string; body: string }[] = [
  { icon: "water_drop", title: "Drink water daily", body: "Keeps your body hydrated and energy levels up." },
  { icon: "accessibility_new", title: "Stretch your body", body: "Improves flexibility, reduces tension." },
  { icon: "bedtime", title: "Get quality sleep", body: "Restores your mind, boosts your mood." },
  { icon: "spa", title: "Manage stress", body: "A calm mind supports a healthier you." },
  { icon: "chair", title: "Take breaks during work", body: "Refresh your mind, improve focus and productivity." },
  { icon: "restaurant", title: "Eat nutritious meals", body: "Fuel your body with good, natural food." },
  { icon: "fitness_center", title: "Stay active", body: "Boosts your energy, strength and mood." },
  { icon: "wb_sunny", title: "Get natural sunlight", body: "Supports vitamin D, improves your mood." },
  { icon: "phonelink_erase", title: "Limit screen time", body: "Gives your eyes a break and reduces mental fatigue." },
  { icon: "favorite", title: "Practice self-care", body: "You deserve the same care you give to others." },
];

export function WellnessTips() {
  return (
    <section
      id="wellness"
      className="w-full py-space-4xl px-margin-mobile lg:px-margin-desktop bg-background"
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-space-2xl">
          <span className="text-label-sm uppercase tracking-widest text-secondary">
            Wellness Tips
          </span>
          <h2 className="font-serif text-headline-lg-mobile md:text-headline-lg text-primary mt-space-2xs">
            Small habits, big changes.
          </h2>
          <p className="text-body-md text-on-surface-variant mt-space-xs">
            Simple daily habits that help your body between sessions.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-md">
          {tips.map((tip) => (
            <li key={tip.title} className="p-space-md bg-surface-container rounded-xl">
              <div className="h-10 w-10 rounded-full bg-surface flex items-center justify-center text-secondary mb-space-sm">
                <Icon name={tip.icon} className="text-[20px]" />
              </div>
              <div className="font-serif text-headline-sm text-primary mb-1">{tip.title}</div>
              <p className="text-body-sm text-on-surface-variant">{tip.body}</p>
            </li>
          ))}
        </ul>

        <p className="text-center font-serif italic text-headline-sm text-primary mt-space-2xl">
          A healthier you, a happier life.
        </p>
      </div>
    </section>
  );
}
