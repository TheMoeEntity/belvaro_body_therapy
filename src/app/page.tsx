import { About } from "@/components/sections/about";
import { Booking } from "@/components/sections/booking";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Setup } from "@/components/sections/setup";
import { Testimonials } from "@/components/sections/testimonials";
import { Therapist } from "@/components/sections/therapist";
import { WellnessTips } from "@/components/sections/wellness-tips";
import { SiteFooter } from "@/components/site-footer";
import { AnnouncementRibbon, SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div id="top">
      <SiteHeader />
      <main>
        <AnnouncementRibbon />
        <Hero />
        <About />
        <Therapist />
        <Services />
        <Setup />
        <Testimonials />
        <WellnessTips />
        <Booking />
      </main>
      <SiteFooter />
    </div>
  );
}
