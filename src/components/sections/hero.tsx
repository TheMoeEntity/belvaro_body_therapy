import Image from "next/image";
import { buttonStyles, DmLink } from "@/components/contact-links";
import { Icon, type IconName } from "@/components/icon";
import { site } from "@/lib/site";

const promises: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "home",
    title: "We Come To You",
    body: "Fully mobile, with no spa to travel to. Sessions happen in your home across Lagos Island and Mainland.",
  },
  {
    icon: "event_available",
    title: "Strictly By Appt",
    body: "Every session is booked ahead and reserved just for you, so it's never rushed.",
  },
  {
    icon: "spa",
    title: "Relaxing Setup",
    body: "Massage bed, candles and a calm atmosphere, all set up in your space.",
  },
];

export function Hero() {
  return (
    <section className="w-full py-space-3xl lg:py-space-4xl px-margin-mobile lg:px-margin-desktop relative overflow-hidden bg-background">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
        <div className="lg:col-span-7 flex flex-col items-start lg:pr-space-xl">
          <div className="inline-flex items-center gap-space-xs px-space-sm py-space-2xs bg-surface-container rounded-full mb-space-lg text-on-surface-variant text-label-sm uppercase tracking-wider">
            <Icon name="home_repair_service" className="text-[15px] text-secondary" />
            <span>Mobile Massage &amp; Wellness Therapy • {site.location}</span>
          </div>

          <h1 className="font-serif text-display-lg-mobile sm:text-display-lg lg:text-[62px] lg:leading-[70px] text-primary mb-space-lg tracking-tight">
            {site.tagline}
          </h1>

          <p className="text-body-lg text-on-surface-variant max-w-xl mb-space-xl">
            Holistic massage and wellness therapy brought to your home. Take a
            break and release the tension and stress your body carries from work,
            traffic and everyday life, without leaving your door.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md w-full mb-space-2xl">
            {promises.map((item) => (
              <div key={item.title} className="p-space-md bg-surface-container rounded-xl">
                <Icon name={item.icon} className="text-secondary text-[20px] mb-space-2xs block" />
                <div className="text-label-sm uppercase text-primary mb-space-2xs tracking-wider">
                  {item.title}
                </div>
                <div className="text-body-sm text-on-surface-variant">{item.body}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-space-md">
            <DmLink className={buttonStyles.primary} />
            <a href="#booking" className={buttonStyles.secondary}>
              How Booking Works
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden bg-surface-container-high shadow-xl aspect-[4/5]">
            <Image
              src="/images/hero.jpg"
              alt="Quiet treatment space in soft morning light with a linen-draped massage table, ceramic bowls of dried herbs and smooth river stones"
              fill
              preload
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
            <div className="absolute bottom-space-lg left-space-lg right-space-lg p-space-md bg-primary-container/80 backdrop-blur-md rounded-xl text-surface">
              <div className="flex items-center justify-between gap-space-sm">
                <div>
                  <div className="font-serif text-headline-sm font-medium">
                    Belvaro Mobile Wellness
                  </div>
                  <div className="text-body-sm text-surface-dim">
                    Home-service massage
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-label-sm uppercase tracking-widest text-secondary-fixed">
                    By Appointment
                  </div>
                  <div className="text-body-sm text-surface-dim">{site.location}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden sm:block absolute -bottom-6 -left-8 bg-surface p-space-md rounded-xl shadow-xl max-w-[220px]">
            <div className="flex items-center gap-space-xs text-secondary mb-space-2xs">
              <Icon name="verified" className="text-[18px]" />
              <span className="text-label-sm uppercase tracking-wider">
                Your Wellness, Our Priority
              </span>
            </div>
            <p className="text-body-sm text-on-surface-variant leading-tight">
              We turn your space into a relaxing atmosphere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
