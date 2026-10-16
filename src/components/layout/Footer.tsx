import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <strong>UTECH</strong>
          <p className="muted">Learn, build, and experiment with technology.</p>
        </div>
        <ul>
          <li><Link href="/platforms">Platforms</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </footer>
  );
}
