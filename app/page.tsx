import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import CelestialOrbHero from "@/components/ui/celestial-orb-hero";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { CertificationsSection } from "@/components/sections/certifications-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <CelestialOrbHero
          name="Sofia Asif"
          title="Cybersecurity Professional"
          description="Entry-level cybersecurity practitioner with hands-on exposure to both offensive and defensive security, network monitoring, and SIEM deployment. Eager to contribute to security operations or network defense teams through practical skills in threat detection, penetration testing, and log analysis."
        />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <CertificationsSection />
      </main>
      <Footer />
    </div>
  );
}
