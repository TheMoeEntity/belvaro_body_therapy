import { DmLink, InstagramIcon } from "@/components/contact-links";
import { Icon } from "@/components/icon";
import { LogoMark } from "@/components/logo";
import { navLinks, site } from "@/lib/site";

function Brand() {
  return (
    <a href="#top" className="flex items-center gap-space-xs lg:gap-space-sm shrink-0">
      <LogoMark className="h-10 w-10 lg:h-12 lg:w-12" />
      <span className="flex flex-col">
        <span className="font-serif text-[18px] lg:text-headline-sm font-medium tracking-tight text-primary leading-none">
          BELVARO
        </span>
        <span className="text-label-sm text-[9px] tracking-widest text-on-surface-variant uppercase">
          Body Therapy
        </span>
      </span>
    </a>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-surface/90 backdrop-blur-md border-b border-surface-variant">
      {/* Mobile announcement strip */}
      <div className="lg:hidden w-full bg-surface-container-low border-b border-surface-variant/60 py-1.5 px-margin-mobile">
        <div className="flex items-center justify-center gap-space-2xs text-secondary">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
          <span className="text-label-sm text-[9px] sm:text-label-sm uppercase tracking-wider">
            Mobile Massage Service • Strictly by Appointment
          </span>
        </div>
      </div>

      {/* Desktop utility strip */}
      <div className="hidden lg:block bg-surface-container-low border-b border-surface-variant/60 py-space-2xs px-margin-desktop">
        <div className="max-w-[1320px] mx-auto flex items-center justify-between text-label-sm uppercase tracking-wider text-on-surface-variant">
          <div className="flex items-center gap-space-xs">
            <Icon name="commute" className="text-[15px] text-secondary" />
            <span>Mobile Massage Service · Strictly by Appointment</span>
          </div>
          <div className="flex items-center gap-space-lg">
            <span>{site.serviceArea}</span>
            <span className="normal-case">WhatsApp: {site.whatsapp.display}</span>
          </div>
        </div>
      </div>

      <div className="h-16 lg:h-20 max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop flex items-center justify-between gap-space-md">
        <Brand />

        <nav aria-label="Primary" className="hidden xl:flex items-center gap-space-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-body-sm text-on-surface-variant hover:text-on-surface transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <DmLink
          label="DM to Book"
          className="hidden lg:inline-flex items-center justify-center gap-space-2xs px-space-md py-space-xs bg-primary-container text-surface text-label-md uppercase tracking-wider rounded transition-colors hover:bg-primary"
        />

        {/* Mobile actions */}
        <div className="flex lg:hidden items-center gap-space-xs">
          <a
            href={site.instagram.profile}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Belvaro on Instagram"
            className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-surface-container-high transition-colors"
          >
            <InstagramIcon className="w-[18px] h-[18px]" />
          </a>
          <a
            href="#booking"
            className="inline-flex items-center justify-center px-space-sm py-1.5 bg-primary text-surface text-label-sm uppercase tracking-wider rounded-lg shadow-sm hover:bg-secondary transition-colors"
          >
            <Icon name="calendar_today" className="text-[14px] mr-1" />
            Book
          </a>
        </div>
      </div>
    </header>
  );
}

export function AnnouncementRibbon() {
  return (
    <section className="w-full bg-surface-container-high text-on-surface-variant py-space-xs px-margin-mobile lg:px-margin-desktop">
      <div className="max-w-[1320px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-space-xs text-center sm:text-left text-label-sm">
        <div className="flex items-center gap-space-xs uppercase tracking-widest text-secondary">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
          <span>Home-Service Massage • {site.location}</span>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-space-md gap-y-1 tracking-wider">
          <span>Price list sent on request</span>
          <span className="hidden sm:inline opacity-40">•</span>
          <span>Book via Instagram DM or WhatsApp</span>
        </div>
      </div>
    </section>
  );
}
