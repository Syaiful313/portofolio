import { testimonials } from "@/utils/testimonials";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="scroll-mt-24">
      <div className="section-shell py-20 sm:py-24">
        <div className="section-divider pb-10" />

        <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="space-y-4">
            <p className="curly-label">{`{ Testimonials }`}</p>
            <h2 className="text-3xl leading-[1.05] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Reputasi yang saya bangun datang dari komunikasi yang jelas dan
              hasil yang konsisten.
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-[color:var(--color-ash-gray)] sm:text-lg">
              Testimoni di bawah ini menunjukkan bagaimana saya bekerja: rapi,
              responsif, dan fokus menyelesaikan masalah nyata.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {testimonials.slice(0, 4).map((testimonial, index) => (
              <article
                key={testimonial.id}
                className="rounded-[8px] border border-[color:var(--color-olive-stone)] p-5"
              >
                <Quote
                  className="h-6 w-6 text-[color:var(--color-pulse-green)]"
                  aria-hidden="true"
                />
                <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-cream-glow)] sm:text-base">
                  {testimonial.quote}
                </p>
                <div className="mt-5 border-t border-[color:var(--color-olive-stone)] pt-4">
                  <p className="text-sm font-medium tracking-[-0.02em]">
                    {testimonial.name}
                  </p>
                  <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-ash-gray)]">
                    {testimonial.position}
                  </p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-ash-gray)]">
                    0{index + 1}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
