import { Icon, type IconName } from "@/components/icon";
import { LogoMark } from "@/components/logo";
import { site } from "@/lib/site";

// The four pillars from the "About Us" highlight on Instagram.
const pillars: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "bolt",
    title: "Restore Your Energy",
    body: "Step off the table feeling lighter, rested and recharged.",
  },
  {
    icon: "air",
    title: "Release Tension",
    body: "Ease the knots and tightness that build up from work, traffic and daily stress.",
  },
  {
    icon: "self_improvement",
    title: "Balance Your Mind",
    body: "A calm, unhurried session gives your mind room to slow down too.",
  },
  {
    icon: "favorite",
    title: "Support Your Well-being",
    body: "Care for your body physically, mentally and emotionally.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="w-full py-space-4xl bg-surface-container-low px-margin-mobile lg:px-margin-desktop"
    >
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-3xl items-start">
        <div className="lg:col-span-5 flex flex-col items-start">
          <div className="w-full rounded-2xl overflow-hidden bg-primary-container border border-secondary-fixed-dim/30 shadow-lg aspect-square flex flex-col justify-between p-space-xl sm:p-space-2xl text-surface">
            <LogoMark className="h-16 w-16" />
            <blockquote className="font-serif text-headline-lg-mobile sm:text-headline-lg italic">
              “Because when you feel better within, you live better overall.”
            </blockquote>
            <div className="text-label-sm uppercase tracking-widest text-secondary-fixed">
              Holistic Wellness • {site.location}
            </div>
          </div>
          <div className="mt-space-md p-space-md bg-surface rounded-xl w-full flex items-center justify-between">
            <div>
              <div className="font-serif text-headline-sm text-primary">{site.name}</div>
              <div className="text-label-sm text-secondary uppercase tracking-wider">
                Mobile Wellness Therapy
              </div>
            </div>
            <div className="h-8 w-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
              <Icon name="spa" className="text-[18px]" />
            </div>
          </div>
          <p className="mt-space-sm text-body-sm text-on-surface-variant italic px-space-xs">
            Your Wellness, Our Priority.
          </p>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="text-label-sm uppercase tracking-widest text-secondary mb-space-xs">
            About Us
          </div>
          <h2 className="font-serif text-headline-lg-mobile md:text-headline-lg text-primary mb-space-md">
            True wellness goes beyond the body.
          </h2>
          <p className="text-body-lg text-on-surface-variant mb-space-xl">
            At Belvaro Body Therapy, our holistic massage and wellness therapies
            are designed to restore balance, ease tension, and support your
            overall well-being — physically, mentally and emotionally.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-space-lg bg-surface rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-space-xs bg-surface-container-highest rounded-lg text-primary inline-flex mb-space-sm">
                  <Icon name={pillar.icon} className="text-[24px]" />
                </div>
                <h3 className="font-serif text-headline-sm text-primary mb-space-2xs">
                  {pillar.title}
                </h3>
                <p className="text-body-md text-on-surface-variant">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
