import Image from "next/image";
import { buttonStyles, DmLink } from "@/components/contact-links";
import { Icon } from "@/components/icon";
import { site } from "@/lib/site";

// Portrait is a stock placeholder (Unsplash, "K Studios", Unsplash License).
// Bio is draft copy: replace both with Stephanie's own photo and words.
export function Therapist() {
  const { therapist } = site;

  return (
    <section
      id="therapist"
      className="w-full py-space-4xl px-margin-mobile lg:px-margin-desktop bg-background"
    >
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-2xl lg:gap-space-3xl items-center">
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden bg-surface-container shadow-xl aspect-[4/5]">
            <Image
              src="/images/therapist.jpg"
              alt={`${therapist.name}, founder and massage therapist at ${site.name}`}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-top"
            />
          </div>
          <div className="hidden sm:block absolute -bottom-6 -right-6 bg-surface p-space-md rounded-xl shadow-xl max-w-[240px]">
            <div className="flex items-center gap-space-xs text-secondary mb-space-2xs">
              <Icon name="spa" className="text-[18px]" />
              <span className="text-label-sm uppercase tracking-wider">
                {therapist.role}
              </span>
            </div>
            <p className="text-body-sm text-on-surface-variant leading-tight">
              Home-service massage across Lagos Island &amp; Mainland.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col">
          <span className="text-label-sm uppercase tracking-widest text-secondary">
            Meet Your Therapist
          </span>
          <h2 className="font-serif text-headline-lg-mobile md:text-headline-lg text-primary mt-space-2xs mb-space-md">
            Hi, I&apos;m {therapist.name}.
          </h2>
          <div className="space-y-space-md text-body-lg text-on-surface-variant mb-space-xl">
            <p>
              I started Belvaro Body Therapy because I kept seeing the people
              around me carry so much stress in their bodies — from long
              workdays, endless traffic and never really stopping to rest.
            </p>
            <p>
              Massage became my way of helping people slow down, reconnect with
              their bodies and feel lighter again. Every session I bring to your
              home is unhurried and shaped around you: tell me where it hurts, and
              we&apos;ll work on it together.
            </p>
            <p>
              My goal is simple — to help you understand your body, manage
              everyday tension and make your wellness a priority.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-space-md">
            <DmLink label="Book with Stephanie" className={buttonStyles.dark} />
            <span className="font-serif italic text-headline-sm text-primary">
              — {therapist.name.split(" ")[0]}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
