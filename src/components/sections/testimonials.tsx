import { Icon } from "@/components/icon";
import { site } from "@/lib/site";

type Testimonial = {
  quote: string;
  attribution: string;
};

// Real client feedback from the "client reviews" highlight on Instagram.
// Add new reviews here as they come in.
const testimonials: Testimonial[] = [
  {
    quote:
      "It was great. I slept off after the massage. My body feels so light — woke up a few minutes ago.",
    attribution: "Belvaro client, via WhatsApp",
  },
];

export function Testimonials() {
  return (
    <section
      id="reviews"
      className="w-full py-space-4xl px-margin-mobile lg:px-margin-desktop bg-primary-container text-surface"
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-space-2xl">
          <span className="text-label-sm uppercase tracking-widest text-secondary-fixed">
            Client Reviews
          </span>
          <h2 className="font-serif text-headline-lg-mobile md:text-headline-lg mt-space-2xs">
            How our clients feel afterwards
          </h2>
        </div>

        <div
          className={`grid gap-space-lg ${
            testimonials.length > 1 ? "md:grid-cols-2 lg:grid-cols-3" : "max-w-3xl mx-auto"
          }`}
        >
          {testimonials.map((t) => (
            <figure
              key={t.quote}
              className="bg-surface/5 border border-secondary-fixed-dim/30 rounded-2xl p-space-xl text-center"
            >
              <Icon name="format_quote" className="text-[40px] text-secondary-fixed-dim" />
              <blockquote className="font-serif italic text-headline-md mt-space-sm mb-space-md">
                “{t.quote}”
              </blockquote>
              <figcaption className="text-label-sm uppercase tracking-wider text-surface-dim">
                {t.attribution}
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="text-center mt-space-xl">
          <a
            href={site.instagram.profile}
            target="_blank"
            rel="noopener noreferrer"
            className="text-label-sm uppercase tracking-wider text-secondary-fixed border-b border-secondary-fixed/40 pb-0.5 hover:border-secondary-fixed transition-colors"
          >
            More on Instagram {site.instagram.handle} →
          </a>
        </p>
      </div>
    </section>
  );
}
