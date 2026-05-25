import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import WhatIs from "@/components/WhatIs";
import Founder from "@/components/Founder";
import Method from "@/components/Method";
import Compare from "@/components/Compare";
import Tariffs from "@/components/Tariffs";
import WhoFor from "@/components/WhoFor";
import Reviews from "@/components/Reviews";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Problem />
      <WhatIs />
      <Founder />
      <Method />
      <Compare />
      <Tariffs />
      <WhoFor />
      <Reviews />
      <FinalCTA />
      <Footer />
    </>
  );
}
