"use client";

import { BorderRotate } from "@/components/ui/animated-gradient-border";
import { TextSplit } from "@/components/ui/split-text";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <TextSplit
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            maxMove={100}
            falloff={0.15}
          >
            About Me
          </TextSplit>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about securing digital infrastructures and hunting
            vulnerabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m an entry-level cybersecurity practitioner with hands-on
              exposure to both offensive and defensive security, network
              monitoring, and SIEM deployment. I&apos;m eager to contribute to
              security operations or network defense teams through practical
              skills in threat detection, penetration testing, and log analysis.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently pursuing my Bachelor&apos;s degree in Cybersecurity at
              Dawood University of Engineering and Technology, I&apos;m
              constantly expanding my knowledge through certifications and
              hands-on projects. My experience spans from deploying Wazuh SIEM
              systems to building secure web applications.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Karachi, Pakistan</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <GraduationCap className="w-4 h-4 text-primary" />
                <span>BS Cybersecurity (2023-2027)</span>
              </div>
            </div>
          </div>

          <BorderRotate
            className="p-6"
            animationSpeed={8}
            gradientColors={{
              primary: "#124170",
              secondary: "#67C090",
              accent: "#26667F",
            }}
            backgroundColor="#ffffff"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Education
              </h3>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-medium text-foreground">
                    Bachelor of Science in Cybersecurity
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Dawood University of Engineering and Technology
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                    <Calendar className="w-3 h-3" />
                    <span>2023 - 2027</span>
                    <span className="text-primary">CGPA: 3.0</span>
                  </div>
                </div>
                <div className="border-l-2 border-border pl-4">
                  <h4 className="font-medium text-foreground">
                    Intermediate (Pre-Engineering)
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Khatoon-e-Pakistan Government Degree Girls College
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                    <Calendar className="w-3 h-3" />
                    <span>2021 - 2023</span>
                  </div>
                </div>
              </div>
            </div>
          </BorderRotate>
        </div>
      </div>
    </section>
  );
}
