export default function SectionHeading({ title, intro }: { title: string; intro?: string }) {
  return (
    <div className="heading">
      <h2>{title}</h2>
      {intro && <p className="muted">{intro}</p>}
    </div>
  );
}
