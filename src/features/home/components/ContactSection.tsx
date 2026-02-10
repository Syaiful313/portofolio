import Link from "next/link";

const ContactSection = () => {
  return (
    <section id="contact" className="scroll-mt-24 bg-black text-[#E6E0D3]">
      <div className="mx-auto my-24 max-w-4xl px-6 py-16 text-center sm:my-32 md:my-44 md:px-8">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#d9c5a7]/70 sm:text-sm">
          PROJECT IN MIND?
        </p>
        <h2 className="mb-6 font-serif text-3xl leading-snug text-[#d9c5a7] sm:text-5xl md:text-7xl">
          Let&apos;s make your
          <br className="hidden sm:block" />
          <span className="sm:hidden">&nbsp;</span>
          Website shine
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-base text-[#d9c5a7] sm:text-lg">
          Premium web design, development, and SEO services to help your
          business stand out.
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-full bg-[#d9c5a7] px-6 py-3 text-sm font-medium text-black shadow-md transition hover:scale-[1.02] hover:bg-opacity-90 focus:outline-none focus:ring-4 focus:ring-[#d9c5a7]/40 sm:px-8 sm:py-4 sm:text-lg"
        >
          GET IN TOUCH
        </Link>
      </div>
    </section>
  );
};

export default ContactSection;
