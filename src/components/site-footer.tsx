import { LogoMark } from "@/components/logo";
import { navLinks, site } from "@/lib/site";

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

export function SiteFooter() {
  return (
    <footer className="w-full bg-surface-container-low border-t border-surface-variant">
      <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop py-space-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-2xl mb-space-2xl">
          <div className="space-y-space-sm">
            <div className="flex items-center gap-space-xs">
              <LogoMark className="h-14 w-14" />
              <div className="flex flex-col">
                <span className="font-serif text-headline-sm text-primary tracking-tight">
                  BELVARO BODY THERAPY
                </span>
                <span className="text-label-sm text-secondary uppercase tracking-wider">
                  {site.location}
                </span>
              </div>
            </div>
            <p className="text-body-sm text-on-surface-variant pr-space-md">
              {site.tagline} Mobile massage and holistic wellness therapy,
              strictly by appointment.
            </p>
            <div className="pt-space-xs text-on-surface-variant text-label-sm tracking-wider uppercase">
              Wellness • Care • You
            </div>
          </div>

          <div className="space-y-space-sm">
            <h4 className="font-serif text-headline-sm text-primary">
              Service Area &amp; Hours
            </h4>
            <div className="text-body-sm text-on-surface-variant space-y-space-2xs">
              <div>Home-service massage across Lagos</div>
              <div>Island &amp; Mainland • Mobile only</div>
              <div className="pt-space-xs text-on-surface">
                Daily: {site.hours.general}
              </div>
              <div>Mainland: {site.hours.mainland} only</div>
            </div>
          </div>

          <div className="space-y-space-sm">
            <h4 className="font-serif text-headline-sm text-primary">Booking</h4>
            <div className="text-body-sm text-on-surface-variant space-y-space-xs">
              <p>
                Strictly by appointment. A {site.deposit} deposit confirms your
                slot.
              </p>
              <p>Changes need at least 24 hours&apos; notice.</p>
              <a
                href="#booking"
                className="inline-block text-label-sm uppercase tracking-wider text-secondary border-b border-secondary/40 pb-0.5 hover:border-secondary transition-colors"
              >
                Read the full policy →
              </a>
            </div>
          </div>

          <div className="space-y-space-sm">
            <h4 className="font-serif text-headline-sm text-primary">Get in Touch</h4>
            <div className="text-body-sm text-on-surface-variant space-y-space-2xs">
              <a href={site.instagram.profile} {...external} className="block hover:text-on-surface">
                Instagram: {site.instagram.handle}
              </a>
              <a href={site.whatsapp.href} {...external} className="block hover:text-on-surface">
                WhatsApp: {site.whatsapp.display}
              </a>
            </div>
            <div className="pt-space-xs">
              <a
                href={site.instagram.dm}
                {...external}
                className="inline-block text-label-sm uppercase tracking-wider text-secondary border-b border-secondary/40 pb-0.5 hover:border-secondary transition-colors"
              >
                DM for the price list →
              </a>
            </div>
          </div>
        </div>

        <div className="pt-space-lg border-t border-surface-variant/80 flex flex-col sm:flex-row items-center justify-between gap-space-md text-on-surface-variant text-label-sm">
          <div className="tracking-wider uppercase text-center sm:text-left">
            © {site.copyrightYear} {site.name}. All rights reserved.
          </div>
          <nav aria-label="Footer" className="flex flex-wrap justify-center items-center gap-x-space-lg gap-y-space-xs">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-on-surface transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
