# Portfolio — Romiche GUIAGAIN DJOUGUELA

Portfolio de développeur fullstack basé à Douala (Cameroun) : services, réalisations, méthode de travail, tarifs, FAQ et contact.

**Site en ligne :** https://portfolio-romiche.vercel.app

## Ce que présente le site

- **Services** : sites vitrines, applications web et SaaS, refonte de sites, déploiement et suivi
- **Réalisations** : CamerImmo (SaaS de gestion locative), site de l'Institut des Beaux-Arts de Nkongsamba, ERP de gestion des PME, site e-commerce
- **Parcours** et **méthode** de travail en 3 étapes
- **Tarifs** clairs en FCFA, FAQ et contact direct (e-mail, WhatsApp)

## Technologies

- [React 19](https://react.dev/) pour l'interface
- [Vite](https://vitejs.dev/) pour le développement et la compilation
- [Tailwind CSS](https://tailwindcss.com/) et PostCSS pour le style
- [GSAP](https://gsap.com/) pour les animations au défilement
- [Lucide](https://lucide.dev/) pour les icônes
- Déploiement sur [Vercel](https://vercel.com/)

## Lancer le projet en local

Prérequis : [Node.js](https://nodejs.org/) (version LTS) installé.

```bash
git clone https://github.com/Micheroguia/portfolio-romiche.git
cd portfolio-romiche
npm install
npm run dev
```

Le site est alors disponible sur l'adresse affichée dans le terminal (en général `http://localhost:5173`).

Pour générer la version de production et la tester :

```bash
npm run build
npm run preview
```

## Structure du projet

```
portfolio-romiche/
├── public/            # Fichiers servis tels quels (CV, image de partage, robots.txt, sitemap.xml)
├── src/
│   ├── App.jsx        # Page et sections du site
│   ├── main.jsx       # Point d'entrée React
│   └── index.css      # Styles globaux (Tailwind)
├── index.html         # Page d'entrée (balises SEO et de partage)
├── tailwind.config.js # Configuration de Tailwind CSS
├── postcss.config.js  # Configuration de PostCSS
└── vite.config.js     # Configuration de Vite
```

## Contact

- E-mail : guiagainromiche8@gmail.com
- WhatsApp : +237 692 393 690
- GitHub : [@Micheroguia](https://github.com/Micheroguia)
