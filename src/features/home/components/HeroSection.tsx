const HomeSection = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col items-center justify-center bg-black px-4 pb-12 pt-20 text-center sm:px-8 sm:pb-16 md:pt-24"
    >
      <div className="w-full max-w-3xl">
        <h1 className="animate-fadeIn mb-4 font-serif font-normal text-[#d9c5a7] sm:text-4xl md:text-6xl lg:text-8xl">
          Web Desainer & Developer
        </h1>
        <p className="animate-fadeIn delay-2s text-lg font-light text-[#d9c5a7] sm:text-xl md:text-2xl lg:text-3xl">
          Passionate Web Developer
        </p>

        <p className="animate-fadeIn lg:text-1xl mx-auto mt-4 max-w-xl text-base text-[#d9c5a7] sm:text-lg md:text-xl">
          Creating beautiful and functional websites for modern users with a
          touch of creativity and attention to detail.
        </p>
      </div>
    </section>
  );
};

export default HomeSection;
