"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SearchDialog from "./SearchDialog";

const menus = [
  { label: "Ecosystem", items: [["Platform directory", "/platforms"], ["UTECH Core", "/#core"]] },
  { label: "Projects", items: [["All projects", "/projects"], ["Official website", "/projects/utech-official-website"]] },
  { label: "Learning", items: [["Learning overview", "/learning"], ["Learning Hub", "/platforms/learning-hub"]] },
  { label: "Labs", items: [["Cyber Labs", "/platforms/cyber-labs"], ["Experiments", "/platforms/experiments"]] },
  { label: "About", items: [["About UTECH", "/about"], ["Contact", "/contact"]] },
];

export default function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const nav = useRef<HTMLElement>(null);

  useEffect(() => {
    const away = (e: MouseEvent) => { if (!nav.current?.contains(e.target as Node)) setOpen(null); };
    const esc = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(null); };
    document.addEventListener("mousedown", away);
    document.addEventListener("keydown", esc);
    return () => { document.removeEventListener("mousedown", away); document.removeEventListener("keydown", esc); };
  }, []);

  const go = () => { setOpen(null); setMobile(false); };

  return (
    <header className="nav">
      <nav ref={nav} className="container nav-inner" aria-label="Main">
        <Link href="/" className="brand" onClick={go}>U<span>TECH</span></Link>
        <ul id="nav-links" className={`nav-links${mobile ? " open" : ""}`}>
          {menus.map((m) => (
            <li key={m.label} className="has-menu" onMouseEnter={() => setOpen(m.label)} onMouseLeave={() => setOpen(null)}>
              <button className="menu-trigger" aria-expanded={open === m.label} aria-haspopup="true"
                onClick={() => setOpen(open === m.label ? null : m.label)}>
                {m.label} <span aria-hidden="true">▾</span>
              </button>
              {open === m.label && (
                <ul className="dropdown">
                  {m.items.map(([t, h]) => <li key={h}><Link href={h} onClick={go}>{t}</Link></li>)}
                </ul>
              )}
            </li>
          ))}
          <li><Link href="/platforms" className="btn btn-primary nav-cta" onClick={go}>Get started</Link></li>
        </ul>
        <div className="nav-tools">
          <SearchDialog />
          <button className="menu-btn" aria-expanded={mobile} aria-controls="nav-links" onClick={() => setMobile(!mobile)}>
            {mobile ? "Close" : "Menu"}
          </button>
        </div>
      </nav>
    </header>
  );
}
