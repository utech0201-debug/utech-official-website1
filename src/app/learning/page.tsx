import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = { title: "Learning" };

const planned = ["Course catalog and lessons", "Lesson completion and progress", "Bookmarks and saved resources", "Quizzes and assessments"];

export default function Learning() {
  return (
    <section className="section">
      <div className="container detail">
        <SectionHeading
          title="Learning Hub"
          intro="Courses and lessons across software development, networking, and security. The Hub is still being built."
        />
        <div>
          <h2>Planned features</h2>
          <ul className="features" style={{ marginTop: ".75rem" }}>{planned.map((f) => <li key={f}>{f}</li>)}</ul>
        </div>
        <div className="actions">
          <Button href="/platforms/learning-hub">Learning Hub details</Button>
          <Button href="/platforms/cyber-labs" variant="secondary">Cyber Labs</Button>
        </div>
      </div>
    </section>
  );
}
