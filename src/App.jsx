import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Download, FileDown, ArrowDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const NAV_LINKS = [
  { label: 'À propos', href: '#a-propos' },
  { label: 'Expérience', href: '#experience' },
  { label: 'Compétences', href: '#competences' },
  { label: 'Contact', href: '#contact' }
];

const EXPERIENCES = [
  {
    periode: 'EN COURS — 50%',
    titre: 'ERP de gestion des PME',
    entreprise: 'Projet personnel',
    description:
      'Modules déjà réalisés : gestion des produits, du stock et des clients. Front-end développé avec Flutter en version web, back-end en Java. Mené en autonomie, ce projet illustre ma capacité à construire une application web complète et évolutive.'
  },
  {
    periode: 'EXPÉRIENCE PRATIQUE',
    titre: 'Site e-commerce',
    entreprise: 'Réalisation personnelle',
    description:
      'Conception et développement d\'un site marchand complet sur des bases solides en HTML, CSS et PHP : structuration, mise en page responsive et mise en ligne du catalogue.'
  },
  {
    periode: 'PARTICIPATION',
    titre: 'Application de gestion des marchés',
    entreprise: 'Projet collectif',
    description:
      'Participation au développement d\'une application de gestion des marchés, renforçant mes compétences en travail d\'équipe, en organisation et en conception applicative.'
  }
];

const SKILLS = [
  { nom: 'HTML / CSS', niveau: 90 },
  { nom: 'PHP', niveau: 80 },
  { nom: 'Flutter', niveau: 75 },
  { nom: 'Java', niveau: 70 },
  { nom: 'Organisation & Autonomie', niveau: 85 }
];

const CONTACTS = [
  { icone: Mail, label: 'Email', valeur: 'guiagainromiche8@gmail.com', href: 'mailto:guiagainromiche8@gmail.com' },
  { icone: Phone, label: 'Téléphone', valeur: '+237 692 393 690', href: 'tel:+237692393690' },
  { icone: MapPin, label: 'Localisation', valeur: 'Douala, Cameroun', href: '#contact' }
];

function Navbar({ scrolled }) {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-xl">
      <nav
        className={`flex items-center justify-between gap-3 px-4 sm:px-6 py-3 rounded-full border transition-all duration-500 ${
          scrolled
            ? 'bg-charbon/60 backdrop-blur-xl border-or/20 shadow-[0_8px_32px_rgba(0,0,0,0.45)]'
            : 'bg-transparent border-transparent'
        }`}
      >
        <a href="#top" className="lift font-display-italic text-or text-xl leading-none shrink-0">
          RD
        </a>
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="lift text-sm font-medium text-creme/80 hover:text-or transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="/cv-romiche.pdf"
          download
          className="magnetic-btn inline-flex items-center gap-2 rounded-full bg-or text-charbon font-semibold text-sm px-4 py-2 shadow-[0_8px_24px_rgba(212,168,67,0.25)]"
        >
          <FileDown size={15} strokeWidth={2.5} />
          <span className="hidden xs:inline">Télécharger CV</span>
          <span className="xs:hidden">CV</span>
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      ref={(el) => el && ((window.__hero = el))}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop')" }} />
      <div className="absolute inset-0 bg-gradient-to-t from-charbon via-charbon/70 to-charbon/30" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-24 pb-16">
        <div
          className="hero-photo w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-ardoise border-2 border-or flex items-center justify-center shadow-[0_16px_48px_rgba(212,168,67,0.18)]"
        >
          <span className="font-display-italic text-or text-4xl sm:text-5xl">RD</span>
        </div>

        <p className="hero-kicker mt-8 font-mono text-xs sm:text-sm tracking-[0.35em] text-or/90 uppercase">
          Portfolio — Développeur web
        </p>

        <h1 className="hero-name mt-5 font-sans font-black text-creme text-tracking-tight2 text-[clamp(2.6rem,7.5vw,5.5rem)] leading-[0.95]">
          GUIAGAIN DJOUGUELA
        </h1>
        <h2 className="hero-title font-display-italic text-or mt-4 text-[clamp(1.4rem,3.5vw,2.4rem)]">
          Romiche — Développeur Web
        </h2>

        <div className="hero-stats mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono text-xs sm:text-sm text-creme/70">
          <span>03 projets</span>
          <span className="text-or">|</span>
          <span>50% ERP en cours</span>
          <span className="text-or">|</span>
          <span>Douala — Cameroun</span>
        </div>

        <div className="hero-ctas mt-10 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="/cv-romiche.pdf"
            download
            className="magnetic-btn inline-flex items-center gap-2 rounded-full bg-or text-charbon font-semibold px-8 py-4 text-base shadow-[0_16px_40px_rgba(212,168,67,0.3)]"
          >
            <Download size={18} strokeWidth={2.5} />
            Télécharger CV
          </a>
          <a
            href="#contact"
            className="magnetic-btn inline-flex items-center gap-2 rounded-full border border-creme/30 text-creme font-semibold px-8 py-4 text-base hover:border-or hover:text-or transition-colors"
          >
            Me contacter
          </a>
        </div>

        <a href="#a-propos" className="hero-scroll lift mt-16 text-creme/50 hover:text-or transition-colors" aria-label="Descendre">
          <ArrowDown size={22} />
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="a-propos" className="bg-creme text-charbon py-28 px-6 rounded-t-[3rem] relative z-10 -mt-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[minmax(0,1fr)_2px_minmax(0,1.4fr)] gap-10 md:gap-14 items-start">
        <h2 className="about-title font-display-italic text-5xl sm:text-6xl leading-none text-charbon">
          À propos
        </h2>
        <div className="hidden md:block w-0.5 h-full bg-or/60" />
        <div className="about-text space-y-5 text-[17px] sm:text-[19px] leading-relaxed text-charbon/85">
          <p>
            Développeur web avec des bases solides en <strong className="text-charbon">HTML/CSS/PHP</strong>,
            complétées par la maîtrise de <strong className="text-charbon">Flutter</strong> et{' '}
            <strong className="text-charbon">Java</strong>. Expérience pratique de création de sites — dont un
            site e-commerce — et participation à une application de gestion des marchés.
          </p>
          <p>
            Je développe actuellement une <span className="font-display-italic text-or text-[1.1em]">ERP de gestion des PME</span>{' '}
            (projet en cours à 50%), ce qui renforce ma polyvalence et mon autonomie.
          </p>
          <p>
            Bon relationnel, organisé et adaptable, je recherche un{' '}
            <strong className="text-charbon">stage en développement web</strong> pour contribuer concrètement
            à vos projets.
          </p>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="bg-charbon py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-center font-mono text-xs tracking-[0.35em] text-or/80 uppercase mb-3">Parcours</p>
        <h2 className="text-center font-display-italic text-5xl sm:text-6xl text-creme mb-20">
          L'expérience en mouvement
        </h2>

        <div className="relative">
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-or/30 md:-translate-x-1/2" />

          <div className="space-y-16 md:space-y-24">
            {EXPERIENCES.map((exp, i) => {
              const left = i % 2 === 0;
              return (
                <div key={exp.titre} className="relative md:grid md:grid-cols-2 md:gap-20 items-center">
                  <div className={`experience-dot absolute left-5 md:left-1/2 top-2 md:top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-or shadow-[0_0_20px_rgba(212,168,67,0.7)]`} />
                  <article
                    className={`experience-card ml-14 md:ml-0 bg-ardoise rounded-xl2 p-7 sm:p-9 border border-creme/5 ${
                      left ? 'md:col-start-1' : 'md:col-start-2'
                    }`}
                  >
                    <p className="font-mono text-xs tracking-widest text-or mb-3">{exp.periode}</p>
                    <h3 className="font-sans font-bold text-xl sm:text-2xl text-creme">{exp.titre}</h3>
                    <p className="text-creme/55 font-medium mt-1 text-sm">{exp.entreprise}</p>
                    <p className="text-creme/75 mt-4 leading-relaxed text-[15px]">{exp.description}</p>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCircle({ nom, niveau, index }) {
  const C = 2 * Math.PI * 42;
  const target = C * (1 - niveau / 100);
  return (
    <div
      className={`skill-card bg-ardoise rounded-xl2 p-7 flex flex-col items-center border border-creme/5 shadow-[0_20px_40px_rgba(0,0,0,0.35)] ${
        index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
      }`}
    >
      <div className="relative w-28 h-28">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(245,243,238,0.08)" strokeWidth="6" />
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="#D4A843"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={C}
            strokeDashoffset={C}
            data-circle={niveau}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="skill-counter font-mono text-xl font-semibold text-creme" data-target={niveau}>
            0
          </span>
          <span className="font-mono text-sm text-or mt-1">%</span>
        </div>
      </div>
      <h3 className="mt-5 text-center font-semibold text-creme text-[15px] leading-snug">{nom}</h3>
    </div>
  );
}

function Skills() {
  return (
    <section id="competences" className="bg-ardoise py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-center font-mono text-xs tracking-[0.35em] text-or/80 uppercase mb-3">Compétences</p>
        <h2 className="text-center font-display-italic text-5xl sm:text-6xl text-creme mb-4">
          Le tableau de bord
        </h2>
        <p className="text-center text-creme/55 max-w-xl mx-auto mb-16 text-[15px]">
          Une maîtrise mesurée, affichée sans fioritures — comme une interface de contrôle.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((s, i) => (
            <SkillCircle key={s.nom} nom={s.nom} niveau={s.niveau} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Formation() {
  return (
    <section id="formation" className="bg-charbon py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-center font-mono text-xs tracking-[0.35em] text-or/80 uppercase mb-3">Formation</p>
        <h2 className="text-center font-display-italic text-5xl sm:text-6xl text-creme mb-16">Les fondations</h2>

        <div className="space-y-6">
          <div className="edu-card bg-ardoise rounded-xl2 p-8 border border-creme/5 flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="font-mono text-xs tracking-widest text-or shrink-0">FORMATION TECHNIQUE</p>
            <div className="sm:ml-6">
              <h3 className="font-bold text-lg text-creme">Technicien en Électricité Bâtiment</h3>
              <p className="text-creme/60 mt-1 text-sm">
                Développement de compétences relationnelles et organisationnelles.
              </p>
            </div>
          </div>

          <div className="edu-card bg-ardoise rounded-xl2 p-8 border border-creme/5 flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="font-mono text-xs tracking-widest text-or shrink-0">LANGUES</p>
            <div className="sm:ml-6">
              <h3 className="font-bold text-lg text-creme">Français — Courant</h3>
              <p className="text-creme/60 mt-1 text-sm">Lu, parlé, écrit. &nbsp;·&nbsp; Anglais — Moyen (lu, écrit).</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative bg-charbon py-32 px-6 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1800&auto=format&fit=crop')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charbon via-charbon/85 to-charbon" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="contact-title font-display-italic text-[clamp(2.4rem,6vw,4.5rem)] text-creme leading-tight">
          Travaillons <span className="text-or">ensemble</span>
        </h2>
        <p className="mt-6 text-creme/70 max-w-xl mx-auto text-[15px] sm:text-base">
          À la recherche d'un stage en développement web — prêt à contribuer concrètement à vos projets dès demain.
        </p>

        <div className="contact-links mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          {CONTACTS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="lift group inline-flex items-center gap-3 rounded-full bg-ardoise/80 backdrop-blur px-6 py-4 border border-creme/10 hover:border-or/50 transition-colors"
            >
              <c.icone size={18} className="text-or shrink-0" />
              <span className="text-left">
                <span className="block text-[11px] uppercase tracking-widest text-creme/50">{c.label}</span>
                <span className="block text-sm font-medium text-creme group-hover:text-or transition-colors">
                  {c.valeur}
                </span>
              </span>
            </a>
          ))}
        </div>

        <a
          href="/cv-romiche.pdf"
          download
          className="contact-cta magnetic-btn mt-12 inline-flex items-center gap-3 rounded-full bg-or text-charbon font-bold px-10 py-5 text-lg shadow-[0_20px_50px_rgba(212,168,67,0.35)]"
        >
          <Download size={20} strokeWidth={2.5} />
          Télécharger mon CV
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-charbon rounded-t-[4rem] px-6 pt-16 pb-10 border-t border-creme/5">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-center sm:text-left">
          <span className="font-semibold text-creme">Romiche GUIAGAIN DJOUGUELA</span>
          <span className="block text-creme/50 text-sm mt-1 font-mono">Fait avec le vibe coding — 2026</span>
        </p>
        <p className="inline-flex items-center gap-2 font-mono text-xs text-creme/70">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
          </span>
          En ligne
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    const hero = document.getElementById('top');
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (hero) observer.observe(hero);

    const ctx = gsap.context(() => {
      const ease = 'power3.out';

      gsap.fromTo(
        '.hero-photo, .hero-kicker, .hero-name, .hero-title, .hero-stats, .hero-ctas, .hero-scroll',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.12, ease }
      );

      gsap.fromTo(
        '.about-title, .about-text',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease,
          scrollTrigger: { trigger: '#a-propos', start: 'top 75%' }
        }
      );

      gsap.utils.toArray('.experience-card').forEach((card, i) => {
        const fromLeft = i % 2 === 0;
        gsap.fromTo(
          card,
          { x: fromLeft ? -80 : 80, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease,
            scrollTrigger: { trigger: card, start: 'top 80%' }
          }
        );
      });

      gsap.utils.toArray('.experience-dot').forEach((dot) => {
        gsap.fromTo(
          dot,
          { scale: 0 },
          {
            scale: 1,
            duration: 0.6,
            ease: 'elastic.out(1, 0.6)',
            scrollTrigger: { trigger: dot, start: 'top 85%' }
          }
        );
      });

      gsap.utils.toArray('.skill-card').forEach((card) => {
        gsap.fromTo(
          card,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.15,
            ease,
            scrollTrigger: { trigger: card, start: 'top 85%' }
          }
        );
      });

      gsap.utils.toArray('.skill-counter').forEach((el) => {
        const target = Number(el.dataset.target);
        const proxy = { val: 0 };
        gsap.to(proxy, {
          val: target,
          duration: 1.6,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = Math.round(proxy.val);
          },
          scrollTrigger: { trigger: el, start: 'top 85%' }
        });
      });

      gsap.utils.toArray('[data-circle]').forEach((circle) => {
        const C = 2 * Math.PI * 42;
        const target = C * (1 - Number(circle.dataset.circle) / 100);
        gsap.to(circle, {
          strokeDashoffset: target,
          duration: 1.8,
          ease: 'power2.inOut',
          scrollTrigger: { trigger: circle, start: 'top 85%' }
        });
      });

      gsap.fromTo(
        '.edu-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.15,
          ease,
          scrollTrigger: { trigger: '#formation', start: 'top 75%' }
        }
      );

      gsap.fromTo(
        '.contact-title',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease,
          scrollTrigger: { trigger: '#contact', start: 'top 70%' }
        }
      );

      gsap.fromTo(
        '.contact-links a, .contact-cta',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease,
          scrollTrigger: { trigger: '#contact', start: 'top 60%' }
        }
      );
    }, rootRef);

    return () => {
      observer.disconnect();
      ctx.revert();
    };
  }, []);

  return (
    <div ref={rootRef} className="min-h-screen bg-charbon text-creme">
      <div className="noise-overlay" aria-hidden="true" />
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Formation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}