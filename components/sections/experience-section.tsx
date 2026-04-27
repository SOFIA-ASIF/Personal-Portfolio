"use client";

import { motion } from "framer-motion";
import { TextSplit } from "@/components/ui/split-text";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "STEM Instructor / Junior Instructor",
    period: "2025 – Present",
    description: [
      "Design and deliver lesson plans in Scratch, Python, and Web Development for school-level students.",
      "Develop hands-on projects reinforcing computational thinking and programming fundamentals.",
      "Mentor students in debugging and iterative development while adapting teaching methods to diverse learning styles.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <TextSplit
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            maxMove={100}
            falloff={0.15}
          >
            Experience
          </TextSplit>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            My professional journey and contributions
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-primary"
            >
              <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary" />
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-foreground text-lg">
                      {experience.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{experience.period}</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {experience.description.map((item, i) => (
                    <li
                      key={i}
                      className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-primary mt-1.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
