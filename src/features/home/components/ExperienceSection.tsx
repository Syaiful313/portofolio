import { Badge } from "@/components/ui/badge";
import { experiences } from "@/utils/experiences";
import { Briefcase, Calendar } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="scroll-mt-24">
      <div className="section-shell py-20 sm:py-24">
        <div className="section-divider pb-10" />

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="space-y-4">
            <p className="curly-label">{`{ Experience }`}</p>
            <h2 className="text-3xl leading-[1.05] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Pengalaman saya dibentuk dari proyek freelance, volunteer, dan
              kerja sistem internal.
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-[color:var(--color-ash-gray)] sm:text-lg">
              Kombinasi itu bikin saya terbiasa melihat produk dari sisi
              komunikasi bisnis, kualitas teknis, dan konsistensi implementasi.
            </p>
          </div>

          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <article
                key={exp.id}
                className="rounded-[8px] border border-[color:var(--color-olive-stone)] p-6"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-3">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-[color:var(--color-ash-gray)]">
                      {`0${index + 1}`}
                    </p>
                    <h3 className="text-2xl leading-[1.05] tracking-[-0.03em]">
                      {exp.title}
                    </h3>
                    <div className="space-y-1 text-sm text-[color:var(--color-ash-gray)]">
                      <p className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4" aria-hidden="true" />
                        {exp.company}
                      </p>
                      <p className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" aria-hidden="true" />
                        {exp.period}
                      </p>
                    </div>
                  </div>

                  <Badge variant="outline">
                    {index === experiences.length - 1 ? "Current" : "Past"}
                  </Badge>
                </div>

                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[color:var(--color-cream-glow)] sm:text-base">
                  {exp.description.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-[0.55em] h-1.5 w-1.5 rounded-full bg-[color:var(--color-pulse-green)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
