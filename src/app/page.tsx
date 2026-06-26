import { Hero } from "@/components/Hero";
import { Concepts } from "@/components/Concepts";
import { WhyUs } from "@/components/WhyUs";
import { Pricing } from "@/components/Pricing";
import { HowItWorks } from "@/components/HowItWorks";
import { Gallery } from "@/components/Gallery";
import { Location } from "@/components/Location";
import { InstagramCTA } from "@/components/InstagramCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Concepts />
      <WhyUs />
      <Pricing />
      <HowItWorks />
      <Gallery />
      <Location />
      <InstagramCTA />
    </>
  );
}
