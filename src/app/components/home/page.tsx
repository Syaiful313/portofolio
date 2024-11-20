const HomeSection = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col items-center justify-center bg-black px-4 sm:px-8 pb-12 sm:pb-16 pt-20 md:pt-24 text-center"
    >
      <div className="max-w-3xl w-full">
        <h1 className="animate-fadeIn mb-4 font-serif font-normal sm:text-4xl md:text-6xl lg:text-8xl text-[#d9c5a7]">
          Web Desainer & Developer
        </h1>
        <p className="animate-fadeIn delay-2s text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-[#d9c5a7]">
          Passionate Web Developer
        </p>

        <p className="animate-fadeIn mx-auto mt-4 max-w-xl text-base sm:text-lg md:text-xl lg:text-1xl text-[#d9c5a7]">
          Creating beautiful and functional websites for modern users with a
          touch of creativity and attention to detail.
        </p>
      </div>
    </section>
  );
};

export default HomeSection;
