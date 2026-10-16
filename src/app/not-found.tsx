import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <h1>Page not found</h1>
        <p className="muted" style={{ margin: "1rem 0 1.5rem" }}>That page doesn't exist or has moved.</p>
        <Button href="/">Back to home</Button>
      </div>
    </section>
  );
}
