import Link from "next/link";
import Button from "@/components/ui/Button";
import HeroArt from "@/components/core/HeroArt";
import HeroVideo from "@/components/core/HeroVideo";
import EcosystemWheel from "@/components/core/EcosystemWheel";
import { platforms } from "@/data/platforms";
import { projects } from "@/data/projects";

const grad = "radial-gradient(circle at 50% 120%, #2f7bff 0%, #0b2150 55%, #07122a 100%)";
const pillars = [
  ["Build", "Turn ideas into real solutions.", "</>", "build"],
  ["Explore", "Learn, experiment and grow.", "◎", "explore"],
  ["Protect", "Secure people, data and systems.", "⛉", "protect"],
  ["Connect", "Join a community of builders.", "◇", "connect"],
];
const domains = [
  ["Software & Engineering", "Scalable systems, web apps and modern solutions.", "</>", "/projects", "software"],
  ["Artificial Intelligence", "Smarter solutions for a brighter future.", "AI", "/platforms/experiments", "ai"],
  ["Cybersecurity", "Stronger systems. Safer tomorrow.", "⛉", "/platforms/cyber-labs", "security"],
  ["Technology & Hardware", "Devices, IoT and next-gen tech.", "▣", "/platforms", "hardware"],
  ["Products & Platforms", "Tools and experiences for creators.", "◆", "/platforms", "products"],
];
const platformCards = [
  ["Builder Identity", "Your profile, skills, projects and achievements.", "/platforms", true, "identity"],
  ["Projects", "Build, share and collaborate.", "/projects", false, "projects"],
  ["Learning Hub", "Courses, tutorials and real-world skills.", "/platforms/learning-hub", false, "learning"],
  ["Labs", "Experiment, innovate and research.", "/platforms/cyber-labs", false, "labs"],
  ["Store", "Digital products, tools and hardware.", "/platforms", true, "store"],
] as const;

export default function Home() {
  return (
    <>
      <section className="hero2">
        <HeroArt />
        <div className="herophoto" aria-hidden="true" />
        <HeroVideo />
        <div className="container hero2-body">
          <h1>Technology.<br /><span>Built without limits.</span></h1>
          <p>
            UTECH is a technology ecosystem for builders, creators and problem solvers. We combine software,
            AI, cybersecurity, learning, products and innovation to build a smarter, safer and more connected world.
          </p>
          <div className="actions">
            <Button href="/platforms">Explore the Ecosystem</Button>
            <Button href="/about" variant="secondary">Our Vision</Button>
          </div>
          <ul className="stats">
            <li><span>Projects</span><b>{projects.length}</b></li>
            <li><span>Platforms</span><b>{platforms.length}</b></li>
            <li><span>Builders</span><b>Growing</b></li>
            <li><span>Global vision</span><b>Always</b></li>
          </ul>
        </div>
      </section>

      <section className="row">
        <div className="container row-grid">
          <div className="row-text">
            <span className="num">01</span>
            <div><small>The vision</small><h2>A global ecosystem for a better tomorrow.</h2>
              <p>We envision a world where technology empowers people, ideas become solutions, and innovation creates opportunities for everyone.</p>
              <Button href="/about" variant="secondary">Learn more about UTECH</Button></div>
          </div>
          <div className="tiles four">
            {pillars.map(([t, d, g, img]) => (
              <div className="tile art" key={t}>
                <span className="art-top" style={{ backgroundImage: `url(/images/pillars/${img}.jpg), ${grad}` }}><span className="glyph big">{g}</span></span>
                <h3>{t}</h3><p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="row">
        <div className="container row-grid">
          <div className="row-text">
            <span className="num">02</span>
            <div><small>What UTECH builds</small><h2>Innovation across multiple domains.</h2>
              <p>Technology, products and experiences that make an impact, from software and AI to cybersecurity, hardware and beyond.</p>
              <Button href="/projects" variant="secondary">Explore our projects</Button></div>
          </div>
          <div className="tiles five">
            {domains.map(([t, d, g, h, img]) => (
              <Link href={h} className="tile art" key={t}>
                <span className="art-top" style={{ backgroundImage: `url(/images/domains/${img}.jpg), radial-gradient(circle at 50% 120%, #2f7bff 0%, #0b2150 55%, #07122a 100%)` }}><span className="glyph big">{g}</span></span>
                <h3>{t}</h3><p>{d}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="row" id="core">
        <div className="container row-grid">
          <div className="row-text">
            <span className="num">03</span>
            <div><small>The UTECH ecosystem</small><h2>Everything works together.</h2>
              <p>Our ecosystem connects technology, learning, projects, labs, products and community into one powerful platform.</p>
              <Button href="/platforms" variant="secondary">Explore the ecosystem</Button></div>
          </div>
          <div className="wheel-wrap">
            <EcosystemWheel />
            <div className="core-note">
              <h3>UTECH Core</h3>
              <strong>The heart of our ecosystem.</strong>
              <p>The Core connects every division (Technology, AI, Security, Learning, Projects and Products) into one unified system.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="row">
        <div className="container row-grid">
          <div className="row-text">
            <span className="num">04</span>
            <div><small>The platform</small><h2>More than a website. A complete ecosystem.</h2>
              <p>The UTECH platform brings together learning, building, collaboration and commerce in one place.</p>
              <Button href="/platforms" variant="secondary">Discover the platform</Button></div>
          </div>
          <div className="tiles five">
            {platformCards.map(([t, d, h, soon, img]) => (
              <Link href={h} className="tile art" key={t}>
                <span className="art-top" style={{ backgroundImage: `url(/images/platform/${img}.jpg), ${grad}` }}><span className="glyph big">◈</span></span>
                <h3>{t}</h3><p>{d}</p>
                {soon && <span className="badge badge-planned soon">Coming soon</span>}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="row cta">
        <div className="container row-grid">
          <div className="row-text">
            <span className="num">05</span>
            <div><small>Start here</small><h2>Ready to build the future?</h2>
              <p>Join UTECH and be part of a growing community of builders, creators and innovators.</p></div>
          </div>
          <div className="actions" style={{ alignSelf: "center" }}>
            <Button href="/contact">Join the Community</Button>
            <Button href="/platforms" variant="secondary">Explore the Platform</Button>
          </div>
        </div>
      </section>
    </>
  );
}
