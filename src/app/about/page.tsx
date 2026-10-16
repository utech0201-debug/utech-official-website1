import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = { title: "About" };

const values = [
  ["Excellence", "We build things to work properly, then improve them."],
  ["Creativity", "We try new ideas and show the results openly."],
  ["Integrity", "We say what is finished and what is still being built."],
  ["Innovation", "We explore new technology and turn it into something people can use."],
];
const roadmap = [
  ["Foundation", "Stable site, shared components, platform directory."],
  ["Public pages", "About, Projects, Contact, accessibility, and SEO."],
  ["Accounts and data", "Sign-in, profiles, and a first personalized feature."],
  ["Learning and experiments", "Lessons, real progress tracking, and interactive demos."],
  ["Operations", "Administration, monitoring, backups, and more integrations."],
];

export default function About() {
  return (
    <section className="section">
      <div className="container detail">
        <SectionHeading
          title="About UTECH"
          intro="UTECH is a technology ecosystem where people learn, build, experiment, and access technology products. This site represents the whole ecosystem, not any one person."
        />
        <div>
          <h2>Mission</h2>
          <p className="muted" style={{ marginTop: ".5rem", maxWidth: "60ch" }}>
            Build a technology playground around learning, creativity, cybersecurity, software
            development, and innovation, on a foundation that lets every part work together.
          </p>
        </div>
        <div>
          <h2 style={{ marginBottom: "1rem" }}>Values</h2>
          <div className="grid">
            {values.map(([t, d]) => (
              <div className="card" key={t}><h3>{t}</h3><p className="muted">{d}</p></div>
            ))}
          </div>
        </div>
        <div>
          <h2 style={{ marginBottom: "1rem" }}>Roadmap</h2>
          <ol className="features">
            {roadmap.map(([t, d]) => <li key={t}><strong>{t}:</strong> <span className="muted">{d}</span></li>)}
          </ol>
        </div>
      </div>
    </section>
  );
}
