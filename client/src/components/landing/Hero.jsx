import BackgroundGlow from "./BackgroundGlow";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      <BackgroundGlow />

      <div className="relative z-10 max-w-[1400px] mx-auto px-8">

        <div className="grid lg:grid-cols-[42%_58%] min-h-screen items-center gap-6">

          <HeroContent />

          <HeroVisual />

        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">

        <div className="w-6 h-10 rounded-full border border-white/20 flex justify-center">

          <div className="w-1.5 h-3 rounded-full bg-violet-400 mt-2 animate-bounce" />

        </div>

      </div>

    </section>
  );
}

export default Hero;