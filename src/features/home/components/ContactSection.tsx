import Link from "next/link";

const ContactSection = () => {
  return (
    <section id="contact" className="scroll-mt-24">
      <div className="section-shell py-20 sm:py-24">
        <div className="section-divider pb-10" />

        <div className="grid gap-10 rounded-[8px] border border-[color:var(--color-olive-stone)] p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="space-y-4">
            <p className="curly-label">{`{ Contact }`}</p>
            <h2 className="max-w-3xl text-3xl leading-[0.98] tracking-[-0.05em] sm:text-4xl lg:text-6xl">
              Punya ide yang ingin dijadikan website yang rapi dan meyakinkan?
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-[color:var(--color-ash-gray)] sm:text-lg">
              Kirim brief, tujuan bisnis, atau referensi visual yang kamu suka.
              Saya akan bantu merapikan arah desain dan implementasinya.
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:items-end">
            <Link href="/contact" className="pill-link">
              Start the conversation
            </Link>
            <a href="mailto:mthitz313@gmail.com" className="text-sm text-[color:var(--color-ash-gray)] transition-colors hover:text-[color:var(--color-cream-glow)]">
              mthitz313@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
