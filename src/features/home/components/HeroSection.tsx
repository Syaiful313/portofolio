import Link from "next/link";

const HomeSection = () => {
  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black px-6 py-20 text-center"
    >
      <div className="w-full max-w-4xl">
        <header>
          <h1
            id="home-heading"
            className="animate-enhancedFadeIn mb-8 font-serif text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-tight tracking-wide text-[#d9c5a7] sm:mb-10"
          >
            I'am Web Developer
          </h1>
        </header>

        <p className="animate-enhancedFadeIn delay-1s text-xl font-light text-[#d9c5a7] sm:text-2xl md:text-3xl lg:text-4xl">
          Passionate Web Developer
        </p>
        <article className="prose prose-lg mx-auto mt-6 max-w-2xl text-[#d9c5a7]">
          <p className="animate-enhancedFadeIn delay-2s text-base sm:text-lg md:text-xl">
            I create stunning and highly functional websites that blend modern
            design with user-focused functionality. My mission is to turn ideas
            into digital realities with precision and creativity.
          </p>
          <p className="animate-enhancedFadeIn mt-4 text-sm italic text-gray-400 sm:text-base">
            "Bringing your vision to life through code."
          </p>
        </article>

        <div className="animate-enhancedFadeIn delay-3s mt-10">
          <Link
            href="#projects"
            className="rounded-lg bg-[#d9c5a7] px-6 py-3 text-sm font-medium text-black shadow-md transition-transform hover:scale-105 hover:bg-[#c8b397] focus:outline-none focus:ring-4 focus:ring-[#d9c5a7]/50 sm:text-base"
          >
            Explore My Work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
