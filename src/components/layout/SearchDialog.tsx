"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { platforms } from "@/data/platforms";
import { projects } from "@/data/projects";

const index = [
  { title: "Home", href: "/", kind: "Page" },
  { title: "About UTECH", href: "/about", kind: "Page" },
  { title: "Learning Hub", href: "/learning", kind: "Page" },
  { title: "Contact", href: "/contact", kind: "Page" },
  ...platforms.map((p) => ({ title: p.name, href: `/platforms/${p.slug}`, kind: "Platform", text: p.tagline })),
  ...projects.map((p) => ({ title: p.name, href: `/projects/${p.slug}`, kind: "Project", text: p.description })),
];

export default function SearchDialog() {
  const ref = useRef<HTMLDialogElement>(null);
  const [q, setQ] = useState("");
  const close = () => { ref.current?.close(); setQ(""); };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); ref.current?.showModal(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const term = q.trim().toLowerCase();
  const results = term
    ? index.filter((r) => `${r.title} ${"text" in r ? r.text : ""} ${r.kind}`.toLowerCase().includes(term))
    : index.slice(0, 6);

  return (
    <>
      <button className="icon-btn" aria-label="Search the site (Ctrl+K)" onClick={() => ref.current?.showModal()}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
      </button>
      <dialog ref={ref} className="search" onClick={(e) => e.target === ref.current && close()}>
        <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search platforms, projects, pages" aria-label="Search" />
        <ul>
          {results.map((r) => (
            <li key={r.href}><Link href={r.href} onClick={close}><span>{r.title}</span><small>{r.kind}</small></Link></li>
          ))}
          {results.length === 0 && <li className="muted empty">No results for “{q}”.</li>}
        </ul>
        <button className="btn btn-secondary" onClick={close}>Close</button>
      </dialog>
    </>
  );
}
