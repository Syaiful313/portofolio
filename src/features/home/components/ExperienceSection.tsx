// src/components/Experience/index.tsx
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experienceData } from "@/constanst/experience";

const ExperienceSection = () => {
  return (
    <section id="experience" className="container mx-auto px-4 py-12 text-[#d9c5a7] my-16">
      <h2 className="mb-8 text-center text-5xl font-bold font-serif">
        Professional Experience
      </h2>
      <div className="grid gap-6 md:grid-cols-1">
        {experienceData.map((job, index) => (
          <Card key={index} className="w-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl font-semibold">
                    {job.title}
                  </CardTitle>
                  <p className="text-muted-foreground">{job.company}</p>
                </div>
                <Badge variant="outline" className="ml-4">
                  {job.duration}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                {job.responsibilities.map((responsibility, respIndex) => (
                  <li key={respIndex} className="flex items-start">
                    <span className="mr-2 text-primary">▪</span>
                    {responsibility}
                  </li>
                ))}
              </ul>
              {job.technologies && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
