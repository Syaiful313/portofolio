import React from "react";
import Link from "next/link";

const ContactSection = () => {
  return (
    <section className="bg-black text-[#E6E0D3]">
      <div className="mx-auto my-56 max-w-4xl px-4 text-center">
        <p className="mb-4 text-sm uppercase tracking-widest opacity-70">
          PROJECT IN MIND?
        </p>
        <h1 className="mb-6 font-serif text-6xl leading-tight text-[#d9c5a7] md:text-8xl">
          Let&apos;s make your
          <br />
          Website shine
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-[#d9c5a7]">
          Premium web design, development, and SEO services to help your
          business stand out.
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-xl bg-[#d9c5a7] px-6 py-3 text-lg font-medium text-black transition-colors hover:bg-opacity-90"
        >
          GET IN TOUCH
        </Link>
      </div>
    </section>
  );
};

export default ContactSection;
