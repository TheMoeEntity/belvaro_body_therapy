import { buttonStyles, DmLink, WhatsAppLink } from "@/components/contact-links";
import { Icon, type IconName } from "@/components/icon";
import { site } from "@/lib/site";

const steps: { title: string; body: string }[] = [
  {
    title: "Send us a DM",
    body: "Message us on Instagram (preferred) or WhatsApp with your location and preferred day.",
  },
  {
    title: "Get the price list",
    body: "We'll send our current rates and help you pick the right massage and time.",
  },
  {
    title: `Pay the ${site.deposit} deposit`,
    body: "Your time slot is only confirmed once the deposit has been received.",
  },
  {
    title: "Relax — we come to you",
    body: "Be ready at the agreed time. We arrive, set up and take care of the rest.",
  },
];

// From the "Service Policy" highlight and the down payment policy post.
const policies: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "event_available",
    title: "Advance booking",
    body: "Appointments should be booked in advance to allow time for preparation and travel. Same-day bookings are subject to availability.",
  },
  {
    icon: "payments",
    title: "Booking deposit",
    body: `A ${site.deposit} deposit confirms your appointment. The remaining balance is due before the session, by cash, transfer or card.`,
  },
  {
    icon: "update",
    title: "Changes & cancellations",
    body: "Reschedule or cancel at least 24 hours in advance. Deposits are non-refundable for cancellations within 24 hours or missed appointments.",
  },
  {
    icon: "schedule",
    title: "Please be on time",
    body: "Be ready at the agreed time. Sessions aren't rushed, so a late start still ends at the originally scheduled time.",
  },
  {
    icon: "location_on",
    title: "On-site cancellations",
    body: "If the therapist arrives and the session is cancelled for reasons not caused by the therapist, the full session fee applies.",
  },
  {
    icon: "dark_mode",
    title: "No late-night bookings",
    body: `For safety and service quality, all appointments fall within service hours (${site.hours.general}; Mainland ${site.hours.mainland}).`,
  },
  {
    icon: "home",
    title: "Location & access",
    body: "Please provide a safe, accessible and suitable space, and make sure the therapist can reach it without delays.",
  },
  {
    icon: "handshake",
    title: "Professional environment",
    body: "We provide professional, respectful care and kindly ask clients to extend the same respect to our therapist.",
  },
];

export function Booking() {
  return (
    <section
      id="booking"
      className="w-full py-space-4xl px-margin-mobile lg:px-margin-desktop bg-surface-container-low"
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-space-2xl">
          <span className="text-label-sm uppercase tracking-widest text-secondary">
            How to Book
          </span>
          <h2 className="font-serif text-headline-lg-mobile md:text-headline-lg text-primary mt-space-2xs">
            Booking is simple — just send a DM
          </h2>
          <p className="text-body-md text-on-surface-variant mt-space-xs">
            All sessions are strictly by appointment.
          </p>
        </div>

        <div className="bg-surface rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-surface-container p-space-md flex flex-wrap items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-xs text-label-sm uppercase tracking-wider text-primary">
              <Icon name="location_on" className="text-[16px] text-secondary" />
              {site.serviceArea}
            </div>
            <div className="flex items-center gap-space-xs text-secondary text-label-sm">
              <Icon name="query_builder" className="text-[16px]" />
              <span>
                {site.hours.general} • Mainland {site.hours.mainland}
              </span>
            </div>
          </div>

          <div className="p-space-md sm:p-space-xl lg:p-space-2xl grid grid-cols-1 lg:grid-cols-12 gap-space-2xl">
            <div className="lg:col-span-5 flex flex-col justify-between gap-space-xl">
              <ol className="space-y-space-lg">
                {steps.map((step, i) => (
                  <li key={step.title} className="flex items-start gap-space-md">
                    <span
                      className={`w-8 h-8 shrink-0 rounded-full text-label-md flex items-center justify-center ${
                        i === 0 ? "bg-secondary text-surface" : "bg-primary text-surface"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-serif text-headline-sm text-primary">{step.title}</h3>
                      <p className="text-body-sm text-on-surface-variant">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="space-y-space-sm">
                <DmLink
                  label="DM on Instagram to Book"
                  className={`${buttonStyles.primary} w-full`}
                />
                <WhatsAppLink
                  label={`Or WhatsApp ${site.whatsapp.display}`}
                  className={`${buttonStyles.secondary} w-full`}
                />
              </div>
            </div>

            <div className="lg:col-span-7 bg-surface-container-low p-space-md sm:p-space-lg rounded-2xl">
              <div className="flex items-center justify-between gap-space-sm mb-space-md">
                <span className="text-label-sm uppercase tracking-wider text-primary">
                  Booking &amp; Service Policy
                </span>
                <span className="text-label-sm text-secondary">Please read before booking</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                {policies.map((policy) => (
                  <li key={policy.title} className="p-space-md bg-surface rounded-xl">
                    <div className="flex items-center gap-space-xs text-secondary mb-1">
                      <Icon name={policy.icon} className="text-[18px]" />
                      <span className="text-label-sm uppercase tracking-wider text-primary">
                        {policy.title}
                      </span>
                    </div>
                    <p className="text-body-sm text-on-surface-variant">{policy.body}</p>
                  </li>
                ))}
              </ul>
              <p className="text-body-sm text-on-surface-variant mt-space-md italic">
                Your time matters to us — and our therapist&apos;s time matters too.
                These policies help us arrive on time and give every client a calm,
                professional experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
