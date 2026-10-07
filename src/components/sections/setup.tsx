import Image from "next/image";
import { buttonStyles, DmLink, WhatsAppLink } from "@/components/contact-links";
import { Icon, type IconName } from "@/components/icon";
import { site } from "@/lib/site";

// From the "Setup" highlight on Instagram.
const setupItems: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "bed",
    title: "Massage Bed Setup",
    body: "A proper massage bed, set up and dressed in your space.",
  },
  {
    icon: "emoji_objects",
    title: "Candles & Relaxation Space",
    body: "Soft candlelight to help you switch off from the day.",
  },
  {
    icon: "spa",
    title: "Calm Wellness Atmosphere",
    body: "A quiet, peaceful setting so your body can fully unwind.",
  },
  {
    icon: "auto_awesome",
    title: "Luxury Relaxation Vibe",
    body: "Spa-level care without stepping out of your home.",
  },
];

export function Setup() {
  return (
    <section
      id="setup"
      className="w-full py-space-4xl px-margin-mobile lg:px-margin-desktop bg-surface-container-low"
    >
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
        <div className="lg:col-span-6 space-y-space-lg">
          <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[16/10] bg-surface-container">
            <Image
              src="/images/mobile-setup.jpg"
              alt="In-home massage setup with a linen-dressed massage bed, warm lamplight and plants"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-1 min-[420px]:grid-cols-2 gap-space-md">
            {setupItems.map((item) => (
              <div key={item.title} className="p-space-md bg-surface rounded-xl">
                <div className="flex items-center gap-space-xs text-secondary mb-1">
                  <Icon name={item.icon} className="text-[20px]" />
                  <span className="text-label-sm uppercase tracking-wider text-primary">
                    {item.title}
                  </span>
                </div>
                <p className="text-body-sm text-on-surface-variant">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col justify-center lg:pl-space-xl">
          <span className="text-label-sm uppercase tracking-widest text-secondary">
            The Setup
          </span>
          <h2 className="font-serif text-headline-lg-mobile md:text-headline-lg text-primary mt-space-2xs mb-space-md">
            We turn your space into a relaxing atmosphere.
          </h2>
          <p className="text-body-lg text-on-surface-variant mb-space-lg">
            Belvaro is a fully mobile service with no spa location. We bring
            everything needed for a calm, professional session to you. All you
            need is a safe, accessible space for us to set up.
          </p>

          <div className="bg-surface rounded-2xl p-space-lg space-y-space-md mb-space-lg shadow-sm">
            <div className="flex items-start gap-space-md">
              <Icon name="commute" className="text-secondary text-[24px]" />
              <div>
                <div className="font-serif text-headline-sm text-primary">
                  Home Service Across Lagos
                </div>
                <div className="text-body-sm text-on-surface-variant">
                  Lagos Island and Mainland
                </div>
                <div className="text-label-sm text-secondary uppercase tracking-wider mt-1">
                  Mobile Only • No Spa Location
                </div>
              </div>
            </div>
            <div className="flex items-start gap-space-md pt-space-xs">
              <Icon name="query_builder" className="text-secondary text-[24px]" />
              <div>
                <div className="text-label-sm uppercase tracking-wider text-primary">
                  Service Hours
                </div>
                <div className="text-body-sm text-on-surface-variant">
                  Daily: {site.hours.general}
                </div>
                <div className="text-body-sm text-on-surface-variant">
                  Mainland appointments: {site.hours.mainland} only
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-space-md">
            <DmLink className={buttonStyles.dark} />
            <WhatsAppLink className={buttonStyles.link} />
          </div>
        </div>
      </div>
    </section>
  );
}
