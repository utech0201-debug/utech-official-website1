import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = { title: "Contact" };

export default function Contact() {
  return (
    <section className="section">
      <div className="container detail" style={{ maxWidth: 640 }}>
        <SectionHeading title="Contact UTECH" intro="Questions, collaboration ideas, or feedback. Send us a message." />
        <ContactForm />
      </div>
    </section>
  );
}
