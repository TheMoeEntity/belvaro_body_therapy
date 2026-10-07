import { buttonStyles, DmLink, WhatsAppLink } from "@/components/contact-links";
import { Icon, type IconName } from "@/components/icon";

type Service = {
  name: string;
  category: string;
  description: string;
  goodFor: string[];
};

// Prices are deliberately not listed: the price list is sent by DM on request.
const services: Service[] = [
  {
    name: "Swedish / Relaxation Massage",
    category: "Relax & Unwind",
    description:
      "Long, flowing strokes with light-to-medium pressure to calm the nervous system, ease everyday stress and help your whole body let go.",
    goodFor: ["Stress relief", "Better sleep", "First-time clients"],
  },
  {
    name: "Deep Tissue Massage",
    category: "Targeted Relief",
    description:
      "Slow, firmer pressure that works into deeper muscle layers to release stubborn knots and chronic tightness.",
    goodFor: ["Chronic tension", "Stiff muscles", "Knots"],
  },
  {
    name: "Aromatherapy Massage",
    category: "Mind & Body",
    description:
      "A soothing massage paired with essential oils chosen to help you relax, restore your energy and balance your mood.",
    goodFor: ["Relaxation", "Mood", "Mental fatigue"],
  },
  {
    name: "Sports Massage",
    category: "Recovery",
    description:
      "Focused work for active bodies — loosening tight muscles, supporting recovery after training and keeping you moving freely.",
    goodFor: ["Active lifestyles", "Recovery", "Flexibility"],
  },
  {
    name: "Back, Neck & Shoulder Massage",
    category: "Focused Session",
    description:
      "Concentrated attention on the areas that carry the most strain from desk work, long drives and Lagos traffic.",
    goodFor: ["Desk strain", "Neck stiffness", "Headache tension"],
  },
];

const expectations: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "touch_app",
    title: "Tell us where it hurts",
    body: "Point out exactly where you feel discomfort and we'll focus the session there.",
  },
  {
    icon: "schedule",
    title: "Never rushed",
    body: "Your appointment is planned to give you a calm, complete session.",
  },
  {
    icon: "event_available",
    title: "Your slot, reserved",
    body: "Once confirmed, your time is held exclusively for you.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="w-full py-space-4xl px-margin-mobile lg:px-margin-desktop bg-background"
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-md">
          <div>
            <span className="text-label-sm uppercase tracking-widest text-secondary">
              Services &amp; Rates
            </span>
            <h2 className="font-serif text-headline-lg-mobile md:text-headline-lg text-primary mt-space-2xs">
              Massage, brought to your door
            </h2>
          </div>
          <p className="text-body-md text-on-surface-variant max-w-md">
            Every session is mobile and strictly by appointment. Our current
            price list is sent personally — just send us a DM.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
          {services.map((service) => (
            <article
              key={service.name}
              className="group bg-surface-container rounded-2xl p-space-lg sm:p-space-xl flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div>
                <span className="inline-block text-label-sm uppercase tracking-wider px-space-sm py-1 bg-surface-container-highest rounded text-primary mb-space-sm">
                  {service.category}
                </span>
                <h3 className="font-serif text-headline-md text-primary group-hover:text-secondary transition-colors mb-space-xs">
                  {service.name}
                </h3>
                <p className="text-body-md text-on-surface-variant mb-space-md leading-relaxed">
                  {service.description}
                </p>
              </div>
              <ul className="flex flex-wrap gap-space-2xs">
                {service.goodFor.map((item) => (
                  <li
                    key={item}
                    className="text-body-sm text-on-surface-variant bg-surface-container-high px-space-xs py-0.5 rounded"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}

          {/* Price list call-to-action fills the sixth grid slot. */}
          <div className="bg-primary-container text-surface border border-secondary-fixed-dim/30 rounded-2xl p-space-lg sm:p-space-xl flex flex-col justify-between gap-space-lg">
            <div>
              <span className="text-label-sm uppercase tracking-wider text-secondary-fixed">
                Rates
              </span>
              <h3 className="font-serif text-headline-md mt-space-xs mb-space-xs">
                Ask for our price list
              </h3>
              <p className="text-body-md text-surface-dim">
                Send us a DM and we&apos;ll share current rates, help you choose the
                right massage and find a time that works for you.
              </p>
            </div>
            <div className="flex flex-wrap gap-space-sm">
              <DmLink label="DM for Price List" className={buttonStyles.primary} />
              <WhatsAppLink
                label="WhatsApp"
                className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-md bg-surface/10 text-surface text-label-md uppercase tracking-wider rounded-lg hover:bg-surface/20 transition-colors"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md mt-space-2xl">
          {expectations.map((item) => (
            <div key={item.title} className="flex items-start gap-space-sm">
              <Icon name={item.icon} className="text-secondary text-[22px]" />
              <div>
                <div className="text-label-sm uppercase tracking-wider text-primary mb-1">
                  {item.title}
                </div>
                <p className="text-body-sm text-on-surface-variant">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
