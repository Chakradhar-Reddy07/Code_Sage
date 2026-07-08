import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import Workflow from "../components/landing/Workflow";
import Timeline from "../components/landing/Timeline";
import SuccessStories from "../components/landing/SuccessStories";
import Pricing from "../components/landing/Pricing";
import Footer from "../components/landing/Footer";

function Landing() {
  return (
    <main className="bg-[#050816] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Workflow />
      <Timeline />
      <SuccessStories />
      <Pricing />
      <Footer />
    </main>
  );
}

export default Landing;