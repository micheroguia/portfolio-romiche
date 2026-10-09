import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Briefcase,
  Check,
  ChevronDown,
  Clock,
  Globe,
  Layers,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Paintbrush,
  Phone,
  Rocket,
  Sparkles,
  X
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/* ============================================================
   CONTENU ÉDITABLE — modifie ici tes textes, chiffres et liens
   ============================================================ */
const CONTENU = {
  nom: 'Romiche',
  nomComplet: 'Romiche GUIAGAIN DJOUGUELA',
  titre: 'Développeur Fullstack',
  baseline: 'Je crée des sites & applications d’exception.',
  accroche:
    'Je conçois des sites vitrines et des applications web rapides, modernes et pensées pour convertir — de la maquette à la mise en ligne, avec suivi.',
  email: 'guiagainromiche8@gmail.com',
  telephone: '+237 692 393 690',
  telephoneLien: 'tel:+237692393690',
  whatsapp: 'https://wa.me/237692393690',
  localisation: 'Douala, Cameroun',
  disponible: true
};

const STATS = [
  { valeur: 5, suffixe: '+', label: 'Projets réalisés' },
  { valeur: 3, suffixe: '+', label: 'Ans de pratique' },
  { valeur: 6, suffixe: '', label: 'Technologies maîtrisées' }
];

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Réalisations', href: '#realisations' },
  { label: 'Parcours', href: '#parcours' },
  { label: 'Tarifs', href: '#tarifs' },
  { label: 'FAQ', href: '#faq' }
];

const SERVICES = [
  {
    icone: Globe,
    titre: 'Sites vitrines',
    description:
      'Des sites qui présentent ton activité et transforment les visiteurs en clients : rapides, responsives, optimisés pour Google.',
    points: [
      'Design sur mesure',
      'Responsive mobile & desktop',
      'Formulaires de contact',
      'SEO de base',
      'Mise en ligne incluse'
    ]
  },
  {
    icone: Layers,
    titre: 'Applications web & SaaS',
    description:
      'Des applications complètes avec comptes, base de données et espace d’administration : candidatures en ligne, gestion, tableaux de bord.',
    points: [
      'React + Node.js',
      'Base de données sécurisée',
      'Espace administrateur',
      'Uploads de fichiers',
      'Comptes & rôles'
    ]
  },
  {
    icone: Paintbrush,
    titre: 'Refonte de sites',
    description:
      'Ton site actuel est dépassé ? Je le transforme en expérience moderne qui inspire confiance et retient les visiteurs.',
    points: [
      'Audit de l’existant',
      'Nouveau design moderne',
      'Contenus réorganisés',
      'Vitesse optimisée',
      'Zéro perte de données'
    ]
  },
  {
    icone: Rocket,
    titre: 'Déploiement & suivi',
    description:
      'Mise en ligne, nom de domaine, HTTPS, sauvegardes et maintenance : ton site reste rapide et en ligne, sans t’en occuper.',
    points: [
      'Hébergement configuré',
      'HTTPS & domaine',
      'Sauvegardes automatiques',
      'Mises à jour',
      'Support par WhatsApp'
    ]
  }
];

const REALISATIONS = [
  {
    titre: 'CamerImmo — SaaS de gestion locative',
    description:
      'Plateforme complète : immeubles, baux, loyers, quittances PDF, pénalités automatiques et exports comptables.',
    client: 'Projet produit',
    tags: ['NestJS', 'React', 'PostgreSQL'],
    lien: '#contact',
    lienLabel: 'Demander une démo'
  },
  {
    titre: 'IBA Nkongsamba — site + candidatures',
    description:
      'Site institutionnel de l’Institut des Beaux-Arts : galerie, actualités, candidatures en ligne avec pièces jointes et espace admin.',
    client: 'Institut des Beaux-Arts',
    tags: ['Node.js', 'SQLite', 'En ligne'],
    lien: 'https://iba-nkongsamba.onrender.com',
    lienLabel: 'Voir le site',
    externe: true
  },
  {
    titre: 'ERP de gestion des PME',
    description:
      'Produits, stock et clients dans une application web évolutive menée en autonomie, de bout en bout.',
    client: 'Projet personnel',
    tags: ['Flutter', 'Java'],
    lien: '#contact',
    lienLabel: 'Demander une démo'
  },
  {
    titre: 'Site e-commerce',
    description:
      'Boutique en ligne complète : catalogue, fiches produits et parcours d’achat sur des bases saines et responsives.',
    client: 'Projet personnel',
    tags: ['HTML/CSS', 'PHP'],
    lien: '#contact',
    lienLabel: 'Demander une démo'
  }
];

const PARCOURS = [
  {
    periode: '2025 — Présent',
    titre: 'Développeur Fullstack indépendant',
    entreprise: 'Freelance — Douala',
    description:
      'Sites vitrines et applications web pour des clients institutionnels (Institut des Beaux-Arts) et produits SaaS : du besoin exprimé à la mise en ligne, avec formation et suivi.'
  },
  {
    periode: '2025 — 2026',
    titre: 'CamerImmo — SaaS de gestion locative',
    entreprise: 'Projet produit',
    description:
      'API NestJS + PostgreSQL, application React, quittances PDF, automatisations et 150+ tests : une application métier complète et déployée.'
  },
  {
    periode: 'En cours',
    titre: 'ERP de gestion des PME',
    entreprise: 'Projet personnel',
    description:
      'Modules produits, stock et clients. Front-end Flutter web, back-end Java. Projet mené en autonomie, preuve de ma capacité à construire une application complète et évolutive.'
  },
  {
    periode: 'Expérience pratique',
    titre: 'Site e-commerce & app de gestion des marchés',
    entreprise: 'Réalisations personnelles & collectives',
    description:
      'Boutique en ligne (HTML, CSS, PHP) et participation à une application collective de gestion des marchés : travail d’équipe, organisation et conception applicative.'
  }
];

const PROCESSUS = [
  {
    etape: '01',
    titre: 'Écoute & cadrage',
    description:
      'On clarifie ton besoin, tes objectifs et ton budget. Tu reçois un devis clair, sans jargon ni surprise.'
  },
  {
    etape: '02',
    titre: 'Design',
    description:
      'Maquette moderne à ton image, validée avec toi avant le développement. Chaque écran a un but : convertir.'
  },
  {
    etape: '03',
    titre: 'Réalisation & mise en ligne',
    description:
      'Développement rapide et soigné, tests, mise en ligne, formation à la prise en main — puis suivi.'
  }
];

const TARIFS = [
  {
    nom: 'Vitrine',
    prix: '75 000',
    unite: 'FCFA',
    base: 'à partir de',
    description: 'Pour présenter ton activité et être trouvé en ligne.',
    points: [
      'Site 5 pages sur mesure',
      'Responsive mobile & desktop',
      'Formulaire de contact',
      'SEO de base',
      'Mise en ligne incluse'
    ],
    vedette: false
  },
  {
    nom: 'Sur mesure',
    prix: '250 000',
    unite: 'FCFA',
    base: 'à partir de',
    description: 'Application web, espace admin, base de données.',
    points: [
      'Fonctionnalités sur mesure',
      'Base de données sécurisée',
      'Espace administrateur',
      'Formation prise en main',
      'Maintenance 3 mois offerte'
    ],
    vedette: true
  }
];

const FAQ = [
  {
    question: 'En combien de temps mon site sera-t-il prêt ?',
    reponse:
      'Comptez 2 à 3 semaines pour un site vitrine, 1 à 3 mois pour une application sur mesure selon la complexité. Un calendrier précis est fixé dans le devis.'
  },
  {
    question: 'Comment se passe le paiement ?',
    reponse:
      '50 % d’acompte pour démarrer, le solde à la livraison. Paiement par Mobile Money ou virement. Chaque étape est validée avec toi avant de continuer.'
  },
  {
    question: 'Je n’ai ni textes ni photos, on fait comment ?',
    reponse:
      'On s’en occupe ensemble : je te guide sur les contenus à fournir et je mets en forme textes et images pour un rendu professionnel.'
  },
  {
    question: 'Proposes-tu la maintenance après la mise en ligne ?',
    reponse:
      'Oui : mises à jour, sauvegardes, petites évolutions et support par WhatsApp. 3 mois offerts pour les projets sur mesure, puis forfait simple.'
  },
  {
    question: 'Mon site sera-t-il visible sur Google ?',
    reponse:
      'Oui : structure SEO de base incluse (titres, descriptions, vitesse, mobile). Pour aller plus loin, je propose un accompagnement référencement.'
  },
  {
    question: 'Et si je veux modifier mon site moi-même ?',
    reponse:
      'Je te forme à la prise en main (mise à jour des textes, photos, actualités) en une session simple. Les espaces admin sont pensés pour les non-techniques.'
  }
];

// TODO : remplacer par de vrais témoignages clients
const TEMOIGNAGES = [
  {
    texte:
      'Travail sérieux et à l’écoute : le site a été livré dans les délais, avec une galerie et des candidatures en ligne qui nous font gagner un temps précieux.',
    auteur: 'Client institutionnel',
    role: 'Institut de formation'
  },
  {
    texte:
      'De la maquette à la mise en ligne, tout était clair. Le suivi après livraison est vraiment appréciable, on n’est jamais lâché.',
    auteur: 'Porteur de projet',
    role: 'PME locale'
  }
];

/* ============================ COMPOSANTS ============================ */

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' }
        }
      );
    });
    return () => ctx.revert();
  }, [delay]);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

function Compteur({ valeur, suffixe }) {
  const ref = useRef(null);
  const [affiche, setAffiche] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obj = { n: 0 };
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        n: valeur,
        duration: 1.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          onUpdate: () => setAffiche(Math.round(obj.n))
        }
      });
    });
    return () => ctx.revert();
  }, [valeur]);
  return (
    <span ref={ref}>
      {affiche}
      {suffixe}
    </span>
  );
}

function SectionTitre({ eyebrow, titre, description }) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-or">{eyebrow}</p>
      <h2 className="font-display-italic text-4xl leading-tight text-creme sm:text-5xl">{titre}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-creme/70">{description}</p>}
    </Reveal>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [ouvert, setOuvert] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-4">
      <nav
        className={`mx-auto flex max-w-4xl items-center justify-between gap-3 rounded-2xl border px-4 py-3 transition-all duration-500 sm:rounded-full sm:px-6 ${
          scrolled || ouvert
            ? 'border-or/20 bg-charbon/80 shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        }`}
      >
        <a href="#top" className="lift flex items-center gap-2" aria-label="Accueil">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-or font-display-italic text-lg text-charbon">
            R
          </span>
          <span className="hidden font-semibold tracking-tight text-creme sm:inline">
            {CONTENU.nom}
            <span className="text-or">.</span>
          </span>
        </a>
        <div className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="lift text-sm font-medium text-creme/80 transition-colors hover:text-or"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="magnetic-btn hidden items-center gap-2 rounded-full bg-or px-4 py-2 text-sm font-semibold text-charbon sm:inline-flex"
          >
            Démarrer un projet <ArrowRight size={15} strokeWidth={2.5} />
          </a>
          <button
            type="button"
            onClick={() => setOuvert((o) => !o)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-creme/15 text-creme lg:hidden"
            aria-label="Menu"
          >
            {ouvert ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>
      {ouvert && (
        <div className="mx-auto mt-2 max-w-4xl rounded-2xl border border-or/20 bg-charbon/95 p-3 backdrop-blur-xl lg:hidden">
          {[...NAV_LINKS, { label: 'Démarrer un projet', href: '#contact' }].map((l) => (
            <a
              key={l.href + l.label}
              href={l.href}
              onClick={() => setOuvert(false)}
              className="block rounded-xl px-4 py-3 text-sm font-medium text-creme/85 transition-colors hover:bg-creme/5 hover:text-or"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 sm:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-or/10 blur-[140px]"
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-or/25 bg-or/10 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-or">
            <Sparkles size={13} />
            {CONTENU.titre} — {CONTENU.localisation}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-creme sm:text-6xl">
            Salut, moi c’est{' '}
            <span className="font-display-italic text-or">{CONTENU.nom}.</span>
            <br />
            {CONTENU.baseline}
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-creme/70 sm:text-lg">
            {CONTENU.accroche}
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="magnetic-btn inline-flex w-full items-center justify-center gap-2 rounded-full bg-or px-7 py-3.5 font-semibold text-charbon sm:w-auto"
            >
              Démarrer un projet <ArrowRight size={17} strokeWidth={2.5} />
            </a>
            <a
              href="#realisations"
              className="magnetic-btn inline-flex w-full items-center justify-center gap-2 rounded-full border border-creme/20 px-7 py-3.5 font-semibold text-creme transition-colors hover:border-or/50 hover:text-or sm:w-auto"
            >
              Voir mes réalisations
            </a>
          </div>
        </Reveal>
        {CONTENU.disponible && (
          <Reveal delay={0.4}>
            <p className="mt-6 inline-flex items-center gap-2 text-sm text-creme/60">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              Disponible pour de nouvelles missions
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="px-4 sm:px-6">
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="rounded-3xl border border-creme/10 bg-ardoise/60 px-6 py-8 text-center">
              <p className="font-display-italic text-5xl text-or">
                <Compteur valeur={s.valeur} suffixe={s.suffixe} />
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-creme/60">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitre
          eyebrow="Services"
          titre="Ce que je fais pour toi"
          description="Des sites et applications modernes, rapides et pensés pour tes objectifs — pas juste pour faire joli."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.titre} delay={(i % 2) * 0.08}>
              <article className="experience-card h-full rounded-3xl border border-creme/10 bg-ardoise/60 p-7 sm:p-8">
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-or/15 text-or">
                  <s.icone size={22} />
                </span>
                <h3 className="text-xl font-bold text-creme">{s.titre}</h3>
                <p className="mt-2 text-sm leading-relaxed text-creme/70">{s.description}</p>
                <ul className="mt-5 space-y-2.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-creme/80">
                      <Check size={16} className="mt-0.5 shrink-0 text-or" strokeWidth={3} />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Realisations() {
  return (
    <section id="realisations" className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitre
          eyebrow="Réalisations"
          titre="Mes derniers projets"
          description="Une sélection de projets qui montrent ma façon de travailler : du besoin réel à la solution en ligne."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {REALISATIONS.map((r, i) => (
            <Reveal key={r.titre} delay={(i % 2) * 0.08}>
              <article className="experience-card flex h-full flex-col rounded-3xl border border-creme/10 bg-ardoise/60 p-7 sm:p-8">
                <div className="flex flex-wrap gap-2">
                  {r.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-or/25 bg-or/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-or"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="mt-4 text-xl font-bold leading-snug text-creme">{r.titre}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-creme/70">{r.description}</p>
                <p className="mt-4 flex items-center gap-2 text-xs uppercase tracking-wider text-creme/50">
                  <Briefcase size={13} /> Client : {r.client}
                </p>
                <a
                  href={r.lien}
                  {...(r.externe ? { target: '_blank', rel: 'noreferrer' } : {})}
                  className="lift mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-or"
                >
                  {r.lienLabel} <ArrowUpRight size={16} strokeWidth={2.5} />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BandeauCta({ eyebrow, titre, bouton, href }) {
  return (
    <section className="px-4 sm:px-6">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-or/20 bg-gradient-to-br from-or/15 via-ardoise to-ardoise px-6 py-14 text-center sm:px-12 sm:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-or">{eyebrow}</p>
          <h2 className="mx-auto mt-3 max-w-2xl font-display-italic text-3xl leading-tight text-creme sm:text-5xl">
            {titre}
          </h2>
          <a
            href={href}
            className="magnetic-btn mt-8 inline-flex items-center gap-2 rounded-full bg-or px-7 py-3.5 font-semibold text-charbon"
          >
            {bouton} <ArrowRight size={17} strokeWidth={2.5} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

function Parcours() {
  return (
    <section id="parcours" className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionTitre
          eyebrow="Parcours"
          titre="Mon expérience"
          description="Un parcours construit par la pratique : des projets personnels aux missions pour des institutions."
        />
        <div className="relative space-y-5 before:absolute before:bottom-2 before:left-[7px] before:top-2 before:w-px before:bg-or/25">
          {PARCOURS.map((p, i) => (
            <Reveal key={p.titre} delay={i * 0.05}>
              <article className="experience-card relative ml-8 rounded-3xl border border-creme/10 bg-ardoise/60 p-6 sm:p-7">
                <span
                  aria-hidden
                  className="absolute -left-8 top-7 h-[15px] w-[15px] -translate-x-[0.5px] rounded-full border-2 border-or bg-charbon"
                />
                <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-or">
                  <Clock size={12} /> {p.periode}
                </p>
                <h3 className="mt-2 text-lg font-bold text-creme">{p.titre}</h3>
                <p className="text-sm font-medium text-creme/60">{p.entreprise}</p>
                <p className="mt-2 text-sm leading-relaxed text-creme/70">{p.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Processus() {
  return (
    <section id="processus" className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitre
          eyebrow="Méthode"
          titre="Un processus simple et éprouvé"
          description="Tu sais toujours où en est ton projet. Pas de jargon, pas de surprise."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {PROCESSUS.map((p, i) => (
            <Reveal key={p.etape} delay={i * 0.08}>
              <article className="h-full rounded-3xl border border-creme/10 bg-ardoise/60 p-7 text-center sm:p-8">
                <p className="font-display-italic text-5xl text-or/80">{p.etape}</p>
                <h3 className="mt-3 text-lg font-bold text-creme">{p.titre}</h3>
                <p className="mt-2 text-sm leading-relaxed text-creme/70">{p.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tarifs() {
  return (
    <section id="tarifs" className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionTitre
          eyebrow="Tarifs"
          titre="Des formules claires"
          description="Devis gratuit et détaillé avant chaque projet. Acompte de 50 % pour démarrer, solde à la livraison."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {TARIFS.map((t, i) => (
            <Reveal key={t.nom} delay={i * 0.08}>
              <article
                className={`relative flex h-full flex-col rounded-3xl border p-7 sm:p-8 ${
                  t.vedette
                    ? 'border-or/50 bg-gradient-to-b from-or/15 to-ardoise shadow-[0_24px_64px_-24px_rgba(212,168,67,0.35)]'
                    : 'border-creme/10 bg-ardoise/60'
                }`}
              >
                {t.vedette && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-or px-4 py-1 text-xs font-bold uppercase tracking-wider text-charbon">
                    Le plus demandé
                  </span>
                )}
                <h3 className="text-lg font-bold text-creme">{t.nom}</h3>
                <p className="mt-4">
                  <span className="block text-xs uppercase tracking-wider text-creme/50">{t.base}</span>
                  <span className="font-display-italic text-5xl text-or">{t.prix}</span>{' '}
                  <span className="font-semibold text-creme/70">{t.unite}</span>
                </p>
                <p className="mt-3 text-sm text-creme/70">{t.description}</p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {t.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-creme/80">
                      <Check size={16} className="mt-0.5 shrink-0 text-or" strokeWidth={3} />
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`magnetic-btn mt-7 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold ${
                    t.vedette ? 'bg-or text-charbon' : 'border border-creme/20 text-creme hover:border-or/50 hover:text-or'
                  }`}
                >
                  Demander un devis <ArrowRight size={16} strokeWidth={2.5} />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [ouvert, setOuvert] = useState(0);
  return (
    <section id="faq" className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionTitre eyebrow="FAQ" titre="Questions fréquentes" />
        <div className="space-y-3">
          {FAQ.map((f, i) => {
            const estOuvert = ouvert === i;
            return (
              <Reveal key={f.question} delay={i * 0.04}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-colors ${
                    estOuvert ? 'border-or/40 bg-ardoise' : 'border-creme/10 bg-ardoise/60'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOuvert(estOuvert ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                    aria-expanded={estOuvert}
                  >
                    <span className="font-semibold text-creme">{f.question}</span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-or transition-transform duration-300 ${estOuvert ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {estOuvert && (
                    <p className="px-5 pb-5 text-sm leading-relaxed text-creme/70 sm:px-6">{f.reponse}</p>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Temoignages() {
  return (
    <section id="avis" className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitre
          eyebrow="Avis clients"
          titre="Ils me font confiance"
          description="La satisfaction client est ma meilleure publicité."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {TEMOIGNAGES.map((t, i) => (
            <Reveal key={t.auteur + i} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-3xl border border-creme/10 bg-ardoise/60 p-7 sm:p-8">
                <div aria-hidden className="font-display-italic text-6xl leading-none text-or/40">
                  “
                </div>
                <blockquote className="-mt-4 flex-1 text-sm leading-relaxed text-creme/80 sm:text-base">
                  {t.texte}
                </blockquote>
                <figcaption className="mt-6 border-t border-creme/10 pt-4">
                  <p className="font-semibold text-creme">{t.auteur}</p>
                  <p className="text-sm text-creme/50">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const cartes = [
    {
      icone: Mail,
      label: 'Email',
      valeur: CONTENU.email,
      href: `mailto:${CONTENU.email}`
    },
    {
      icone: MessageCircle,
      label: 'WhatsApp',
      valeur: CONTENU.telephone,
      href: CONTENU.whatsapp
    },
    {
      icone: Phone,
      label: 'Téléphone',
      valeur: CONTENU.telephone,
      href: CONTENU.telephoneLien
    },
    {
      icone: MapPin,
      label: 'Localisation',
      valeur: CONTENU.localisation,
      href: '#contact'
    }
  ];
  return (
    <section id="contact" className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionTitre
          eyebrow="Contact"
          titre="Une idée ? Écris-moi."
          description="Réponse en moins de 24 h. Devis gratuit, sans engagement."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {cartes.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.06}>
              <a
                href={c.href}
                {...(c.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                className="experience-card flex items-center gap-4 rounded-2xl border border-creme/10 bg-ardoise/60 p-5"
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-or/15 text-or">
                  <c.icone size={20} />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-creme/50">{c.label}</span>
                  <span className="block font-semibold text-creme">{c.valeur}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pied() {
  return (
    <footer className="overflow-hidden border-t border-creme/10">
      <div aria-hidden className="whitespace-nowrap py-6">
        <p className="animate-[defile_22s_linear_infinite] font-display-italic text-3xl text-creme/15 sm:text-4xl">
          {Array.from({ length: 6 })
            .map(() => 'Construisons ensemble — ')
            .join('')}
        </p>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 pb-10 sm:flex-row sm:px-6">
        <p className="text-sm text-creme/50">
          © {new Date().getFullYear()} {CONTENU.nomComplet} — {CONTENU.localisation}
        </p>
        <a
          href="#top"
          className="lift inline-flex items-center gap-2 rounded-full border border-creme/15 px-4 py-2 text-sm text-creme/70 hover:border-or/50 hover:text-or"
        >
          Haut de page <ArrowUp size={15} />
        </a>
      </div>
    </footer>
  );
}

export default function App() {
  useEffect(() => {
    document.title = `${CONTENU.nomComplet} — ${CONTENU.titre}`;
  }, []);
  return (
    <div className="min-h-screen bg-charbon text-creme">
      <div aria-hidden className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Realisations />
        <BandeauCta
          eyebrow="Collaboration"
          titre="Prêt à construire ton prochain projet ?"
          bouton="Réserver un appel gratuit"
          href="#contact"
        />
        <Parcours />
        <Processus />
        <Tarifs />
        <Faq />
        <Temoignages />
        <BandeauCta
          eyebrow="Contact"
          titre="Parlons de ton projet dès aujourd’hui."
          bouton="Me contacter"
          href="#contact"
        />
        <Contact />
      </main>
      <Pied />
    </div>
  );
}
