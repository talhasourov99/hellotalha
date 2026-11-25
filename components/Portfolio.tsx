"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Linkedin, Mail, Menu, X, Copy, Check, Sparkles, Download } from "lucide-react";
import { profile } from "@/data/profile";
import Scene from "@/components/Scene";
import { projects } from "@/data/projects";
import { achievements } from "@/data/achievements";
import { journey } from "@/data/experience";

const filters = ["All", "Software", "Research", "Innovation"] as const;
const fade = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: .72, ease: [0.22, 1, 0.36, 1] as const } } };

export default function Portfolio() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [progress, setProgress] = useState(0);
  const reduce = useReducedMotion();
  const visibleProjects = useMemo(() => filter === "All" ? projects : projects.filter(p => p.category === filter), [filter]);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    update(); window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  async function copyEmail() {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); window.setTimeout(() => setCopied(false), 1800); }
    catch { window.location.href = `mailto:${profile.email}`; }
  }

  const nav = [["About", "#about"], ["Selected work", "#work"], ["Research", "#research"], ["Recognition", "#recognition"], ["Journey", "#journey"], ["Contact", "#contact"]];
  return <>
    <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />
    <header className="topbar">
      <a className="wordmark" href="#home" aria-label="Talha home">T<span>.</span></a>
      <div className="topbar-center"><span className="status-dot"/> DHAKA, BANGLADESH <i/> AVAILABLE FOR COLLABORATION</div>
      <button className="menu-toggle" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? "main-nav nav-open" : "main-nav"}>{nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>
      <a className="top-cta" href="#contact">LET&apos;S CONNECT <ArrowUpRight size={15}/></a>
    </header>

    <main>
      <section className="hero-shell" id="home">
        <div className="hero-kicker"><span>PORTFOLIO / 2026</span><span>COMPUTER SCIENCE · RESEARCH · IDEAS</span></div>
        <div className="hero-grid">
          <div className="hero-copy">
            <motion.p className="eyebrow" initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>MOHAMMAD ABU TALHA <span>—</span> BCSE UNDERGRADUATE</motion.p>
            <motion.h1 initial={reduce ? false : { opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, delay: .08, ease: [0.22, 1, .36, 1] }}>Curiosity into<br/><em>capability.</em><span className="hero-period">✳</span></motion.h1>
            <motion.p className="hero-intro" initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .24 }}>{profile.intro}</motion.p>
            <motion.div className="hero-buttons" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .42 }}>
              <a className="btn-primary" href="#work">Explore selected work <ArrowUpRight size={17}/></a>
              <a className="btn-quiet" href="#about">A little about me <ArrowDown size={15}/></a>
            </motion.div>
            <div className="hero-metrics"><div><b>TOP 24</b><span>DataDevelop Prize 2026</span></div><div><b>LEVEL 4</b><span>NSDA qualification</span></div><div><b>BEST</b><span>Questioner · Prime Bank</span></div></div>
          </div>
          <motion.div className="hero-portrait" initial={reduce ? false : { opacity: 0, scale: .94, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1, delay: .15 }} whileHover={reduce ? undefined : { y: -5 }} whileTap={reduce ? undefined : { scale: .995 }}>
            <div className="portrait-halo"/><Scene/><div className="portrait-image"><Image src="/images/talha-profile.jpg" alt="Portrait of Mohammad Abu Talha" fill priority sizes="(max-width: 800px) 80vw, 38vw"/></div>
            <div className="portrait-index">01 / THE PERSON<br/>BEHIND THE WORK</div><div className="portrait-tag">THINK CLEAR.<br/><b>BUILD BETTER.</b></div>
            <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
          </motion.div>
        </div>
        <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span className="scroll-line"/><span>01 — 06</span></div>
      </section>

      <section className="intro-section section-pad" id="about">
        <div className="section-index">01 <span>/ ABOUT</span></div>
        <div className="intro-content"><motion.h2 variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, amount: .3 }}>I like asking<br/>better <em>questions.</em></motion.h2><div className="intro-text"><p className="intro-lead">I&apos;m {profile.name}, a Computer Science & Engineering undergraduate at IUBAT in Bangladesh.</p><p>{profile.about}</p><p>Beyond coursework, I learn through building, research exploration, competitions, volunteering and conversations with people who see problems differently.</p><div className="values"><span>01 / STAY CURIOUS</span><span>02 / BUILD WITH INTENT</span><span>03 / KEEP LEARNING</span></div></div></div>
      </section>

      <section className="work-section section-pad" id="work">
        <div className="section-heading"><div><div className="section-index">02 <span>/ SELECTED WORK</span></div><h2>Ideas, made<br/><em>tangible.</em></h2></div><p>Academic builds, research directions and early-stage concepts. I&apos;m interested in technology that connects thoughtful engineering with meaningful problems.</p></div>
        <div className="filter-row">{filters.map(f => <button key={f} onClick={() => setFilter(f)} className={filter === f ? "filter-chip active" : "filter-chip"}>{f}<span>{f === "All" ? projects.length : projects.filter(p => p.category === f).length}</span></button>)}</div>
        <motion.div layout className="work-grid">{visibleProjects.map((p, i) => <motion.article layout key={p.id} className={`work-card card-${p.id}`} initial={reduce ? false : { opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .55, delay: i * .06 }}>
          <div className="work-visual"><span className="work-number">{p.number} / {p.category.toUpperCase()}</span><div className={`visual-art visual-${p.id}`}>
            {p.id === "rewoven" && <><div className="woven-rings"/><div className="woven-word">RE<br/>WOVEN<span>.</span></div><small>TEXTILE / CIRCULARITY</small></>}
            {p.id === "lost-found" && <div className="terminal-art"><div className="terminal-bar"><i/><i/><i/></div><b>Lost<span>Found</span>()</b><code>find(item);<br/>connect(owner);<br/>return impact;</code></div>}
            {p.id === "ai-detection" && <><div className="ai-orb"/><div className="scan-frame"/><small>GENERALIZATION / UNSEEN</small></>}
            {p.id === "flood-node" && <><div className="wave-field"/><div className="sensor-art">ESP32<br/><span>◉</span></div><small>EARLY WARNING / IOT</small></>}
            {p.id === "coaching-management" && <div className="dashboard-art"><div className="dash-top">STUDENT MANAGEMENT / 01</div><div className="dash-bars"><i/><i/><i/><i/><i/></div><b>Manage.<br/><em>Measure.</em></b></div>}
          </div><span className="visual-year">{p.year}</span></div>
          <div className="work-info"><div className="work-status">{p.category} <span>·</span> {p.status}</div><h3>{p.title}</h3><p>{p.summary}</p><div className="tag-list">{p.stack.map(t => <span key={t}>{t}</span>)}</div><a href={`#detail-${p.id}`} className="text-link">Explore project <ArrowUpRight size={15}/></a></div>
        </motion.article>)}</motion.div>
        <p className="disclaimer">Project status is stated transparently. Concepts and ongoing research are not represented as deployed products or completed results.</p>
      </section>

      <section className="research-section section-pad" id="research">
        <div className="section-index">03 <span>/ THESIS RESEARCH</span></div>
        <div className="research-layout"><div><div className="research-label"><Sparkles size={15}/> CURRENT RESEARCH / IN PROGRESS</div><h2>Explainable and Robust AI-Generated Image Detection <em>Under Unseen Generators</em></h2><p className="research-summary">An undergraduate thesis exploring whether AI-generated image detectors can remain reliable when tested against image generators they have never encountered during training.</p><div className="research-tags"><span>COMPUTER VISION</span><span>EXPLAINABLE AI</span><span>GENERALIZATION</span><span>PYTHON</span></div></div><div className="research-panel"><div className="panel-top"><span>RESEARCH DIRECTION</span><span className="live-dot">ONGOING</span></div><div className="research-step"><b>01</b><div><strong>Dataset integrity</strong><p>Provenance checks, metadata inspection and leakage-aware splits.</p></div></div><div className="research-step"><b>02</b><div><strong>Unseen-generator evaluation</strong><p>Assessing cross-generator generalization beyond familiar sources.</p></div></div><div className="research-step"><b>03</b><div><strong>Explainability & reliability</strong><p>Investigating model evidence and reliability under distribution shifts.</p></div></div><p className="research-note">Implementation, experiments and results are ongoing; no performance claims are made yet.</p></div></div>
      </section>

      <section className="detail-section section-pad"><div className="section-index">04 <span>/ PROJECT NOTES</span></div><div className="detail-list">{projects.map(p => <article id={`detail-${p.id}`} className="detail-row" key={p.id}><span>{p.number} / {p.category}</span><div><h3>{p.title}</h3><p><b>Problem:</b> {p.problem}</p><p><b>Approach:</b> {p.approach}</p><p><b>Next:</b> {p.nextStep}</p></div><span className="status-label">{p.status}</span></article>)}</div></section>

      <section className="recognition-section section-pad" id="recognition"><div className="section-heading"><div><div className="section-index">05 <span>/ RECOGNITION & OPPORTUNITIES</span></div><h2>Showing up.<br/><em>Stepping forward.</em></h2></div><p>Selected milestones, learning experiences and opportunities I&apos;ve pursued. Applications are clearly distinguished from confirmed appointments.</p></div>
        <div className="recognition-feature-grid"><article className="recognition-feature prime"><Image src="/images/prime-bank-best-questioner.jpg" alt="Prime Bank Best Questioner trophy" fill sizes="(max-width:700px) 100vw, 50vw"/><div className="feature-overlay"><span>INDIVIDUAL RECOGNITION / 2026</span><h3>Best Questioner</h3><p>Prime Bank · Empowering Youth — Engaging & Inspiring Youth in Banking</p></div></article><article className="recognition-feature ddp"><Image src="/images/ddp-participation.jpg" alt="DataDevelop Prize 2026 certificate of participation" fill sizes="(max-width:700px) 100vw, 50vw"/><div className="feature-overlay"><span>CASE COMPETITION / 2026</span><h3>Top 24 Finalist</h3><p>DataDevelop Prize 2026 BD Case Competition · selected among 1,000+ students from 12 universities</p></div></article></div>
        <div className="recognition-list">{achievements.filter(a => !a.title.includes("Best Questioner") && !a.title.includes("Top 24 Finalist")).map(a => <div className="recognition-line" key={a.number}><span>{a.number}</span><div><small>{a.label}</small><h3>{a.title}</h3><p>{a.description}</p></div><time>{a.year}</time></div>)}</div>
        <div className="applications"><div className="applications-heading"><span>LEADERSHIP & OPPORTUNITIES</span><p>Applications submitted — not confirmed appointments.</p></div><div className="application-card"><div className="application-mark">H</div><div><small>APPLICATION SUBMITTED</small><h3>Huawei Campus Ambassador</h3><p>Applied to contribute to campus engagement, technology awareness and student community initiatives.</p></div><span className="application-status">APPLIED</span></div><div className="application-card"><div className="application-mark">HP</div><div><small>APPLICATION SUBMITTED</small><h3>Hult Prize — Deputy Campus Director</h3><p>Applied for a campus leadership opportunity supporting student entrepreneurship and social-impact innovation.</p></div><span className="application-status">APPLIED</span></div></div>
      </section>

      <section className="credentials-section section-pad" id="credentials"><div className="section-heading"><div><div className="section-index">06 <span>/ CREDENTIALS</span></div><h2>Proof of<br/><em>progress.</em></h2></div><p>Selected qualifications, awards and professional learning. Open a credential to view its original document.</p></div>
        <div className="credential-feature-grid"><a href="/images/unesco-infinix-cog-labs.jpg" target="_blank" className="credential-feature"><Image src="/images/unesco-infinix-cog-labs.jpg" alt="UNESCO Infinix COG Labs workshop certificate" fill sizes="(max-width:700px) 100vw, 50vw"/><div className="feature-overlay"><span>TECHNOLOGY WORKSHOP / 24 JAN 2026</span><h3>UNESCO–Infinix COG Labs</h3><p>Certificate of participation · Dhaka, Bangladesh</p></div></a><a href="/images/computer-office-application.jpg" target="_blank" className="credential-feature"><Image src="/images/computer-office-application.jpg" alt="Computer Office Application certificate" fill sizes="(max-width:700px) 100vw, 50vw"/><div className="feature-overlay"><span>TECHNICAL QUALIFICATION</span><h3>Computer Office Application</h3><p>Bangladesh Technical Education Board · Grade A+</p></div></a></div>
        <div className="credential-links">{[["NSDA Level 4 — Android Mobile Application Development","360-hour national skills qualification · assessment included written, aptitude and viva","#recognition"],["UX/UI Design","a2i · 75-hour training","/images/ux-ui-certificate.jpg"],["Turn Ideas into Impact","Grameenphone Academy · Certificate of Excellence","/certificates/certificate-turn-ideas-into-impact.pdf"],["Data Foundations with AI","Grameenphone Academy","/certificates/certificate-data-foundations-with-ai.pdf"],["GenAI and Prompt Engineering","Grameenphone Academy","/certificates/certificate-genai-and-prompt-engineering1.pdf"],["Think AI","Grameenphone Academy","/certificates/certificate-think-ai.pdf"],["Network Smarter with AI","Grameenphone Academy","/certificates/certificate-Network-smarter-with.pdf"],["Design System Thinking with AI","Grameenphone Academy","/certificates/certificate-design-system-thinking-with-ai.pdf"],["AI+Superpresentations","Grameenphone Academy","/certificates/certificate-aisuperpresentations.pdf"],["Impactful Presentations","Grameenphone Academy","/certificates/certificate-impactful-presentations.pdf"],["Art of Communication","Grameenphone Academy","/certificates/certificate-art-of-communication.pdf"],["Online Safety Fundamentals","Grameenphone Academy","/certificates/certificate-online-safety-fundamentals.pdf"],["Sharpen Your Interview Skills","Grameenphone Academy","/certificates/certificate-sharpen-your-interview-skills.pdf"],["Crack the Hiring Game","Grameenphone Academy","/certificates/certificate-crack-the-hiring-game.pdf"],["Build Your Future Before Graduation","Grameenphone Academy","/certificates/certificate-Buildyourfuturebeforegraduation.pdf"],["AI Hacks for a Winning CV","Grameenphone Academy","/certificates/certificate-ai-hacks-for-a-winning-cv.pdf"],["Excel Mastery","Grameenphone Academy","/certificates/certificate-excel-mastery.pdf"],["Test Hacks to Get Hired","Grameenphone Academy","/certificates/certificate-test-hacks-to-get-hired.pdf"]].map(([title, note, href]) => <a href={href} target="_blank" rel="noreferrer" key={title}><span>{title}<small>{note}</small></span><ArrowUpRight size={17}/></a>)}</div>
      </section>

      <section className="journey-section section-pad" id="journey"><div className="section-heading"><div><div className="section-index">07 <span>/ THE JOURNEY</span></div><h2>Learning by<br/><em>doing.</em></h2></div><p>A path shaped by coursework, practical projects, communities and new questions.</p></div><div className="journey-grid">{journey.map((j, i) => <article className="journey-card" key={j.eyebrow}><span>0{i + 1} / {j.eyebrow}</span><h3>{j.title}</h3><b>{j.role}</b><p>{j.description}</p><small>{j.meta}</small></article>)}</div><div className="skill-strip"><span>DEVELOPMENT</span><p>C# · HTML · CSS · JavaScript · PHP · ASP.NET Core MVC</p><span>DATA & SYSTEMS</span><p>SQL Server · MySQL · Database Design · Networking</p><span>RESEARCH INTERESTS</span><p>Python (learning) · Computer Vision · Machine Learning · Explainable AI</p></div></section>

      <section className="contact-section section-pad" id="contact"><div className="section-index">08 <span>/ OPEN CHANNEL</span></div><div className="contact-layout"><div><span className="contact-kicker">HAVE A QUESTION, IDEA OR OPPORTUNITY?</span><h2>Let&apos;s build<br/>what&apos;s <em>next.</em></h2></div><div className="contact-copy"><p>I&apos;m open to thoughtful conversations, collaborative projects, research opportunities and learning from people building meaningful things.</p><button className="email-copy" onClick={copyEmail}>{copied ? <Check size={17}/> : <Copy size={17}/>} {copied ? "EMAIL COPIED" : profile.email}</button><a className="cv-contact-link" href="/cv.pdf" download="Mohammad-Abu-Talha-CV.pdf"><Download size={15}/> DOWNLOAD PROFILE / CV <ArrowUpRight size={14}/></a><div className="socials"><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={14}/></a><a href="mailto:smtalhaid@gmail.com"><Mail size={17}/> Email <ArrowUpRight size={14}/></a></div></div></div><footer><a className="wordmark" href="#home">T<span>.</span></a><span>DESIGNED TO EVOLVE · © 2026 MOHAMMAD ABU TALHA</span><a href="#home">BACK TO TOP ↑</a></footer></section>
    </main>
  </>;
}
