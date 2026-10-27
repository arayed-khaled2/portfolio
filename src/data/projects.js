// Projects are listed from most recent to oldest.
// `year` is the group heading: projects sharing the same `year` are shown together,
// and groups appear in the order of their first project in this list.
// `github` is optional: set it to null to hide the "Code sur GitHub" link.
export const projects = [
  {
    id: 'codename',
    year: '2e année · 2026–2027',
    period: 'Oct. 2026',
    title: 'Codename, sécurité des LLM',
    description:
      "Durcissement d'un agent Ollama (granite3.1-moe:3b) qui garde un secret derrière un mot de passe, puis conception de 5 prompts d'extraction issus de familles de prompt injection différentes. L'agent a résisté à 3 attaques sur 5.",
    tech: ['Ollama', 'granite3.1-moe:3b', 'LLM', 'Prompt injection'],
    github: null,
  },
  {
    id: 'exegol',
    year: '2e année · 2026–2027',
    period: '2026',
    title: 'Exegol, challenges Boot2Root',
    description:
      "5 challenges de type CTF Boot2Root résolus et documentés : méthodologie, outils, commandes. Démarche présentée lors d'une soutenance orale. Les write-ups ne sont pas publiés, conformément à la règle du projet.",
    tech: ['Exegol', 'CTF', 'Boot2Root', 'Pentest'],
    github: null,
  },
  {
    id: 'sentinel-x',
    year: '2e année · 2026–2027',
    period: '2026 · en cours · équipe de 3',
    title: 'Sentinel X, supervision de sécurité',
    description: "Projet d'équipe autour d'un SIEM Wazuh, avec Prometheus et Grafana, sous Docker.",
    tech: ['Wazuh', 'Prometheus', 'Grafana', 'Docker'],
    github: null,
  },
  {
    id: 'the-k',
    year: '2e année · 2026–2027',
    period: '2026 · en cours · binôme',
    title: 'The K, RPG 2D',
    description:
      'Jeu de rôle 2D au tour par tour en Java avec JavaFX. IA des ennemis et système de combat. Conception UML, tests et Javadoc.',
    tech: ['Java', 'JavaFX', 'POO', 'UML'],
    github: null,
  },
  {
    id: 'hack-and-juice',
    year: '1re année · 2025–2026',
    period: '2025–2026',
    title: 'Hack & Juice, pentest OWASP',
    description:
      'Exploitation de 10+ vulnérabilités web sur OWASP Juice Shop, en environnement contrôlé : injection SQL, XSS, Broken Authentication et Broken Access Control. Documentation technique de chaque challenge : méthodologie, outils (Burp Suite, DevTools), niveau de criticité et recommandations de remédiation.',
    tech: ['Burp Suite', 'OWASP', 'SQL Injection', 'XSS', 'DevTools', 'Cybersécurité'],
    github: 'https://github.com/arayed-khaled2/hack-and-juice',
  },
  {
    id: 'job-aggregator',
    year: '1re année · 2025–2026',
    period: '2025–2026 · équipe de 4',
    title: 'Job Aggregator',
    description:
      "Plateforme fullstack qui centralise des offres d'emploi issues de plusieurs sources. API REST sécurisée : authentification JWT, rôles admin et user, protection contre l'injection SQL et le brute force. Pipeline CI/CD avec GitHub Actions, conteneurisation Docker Compose et intégration d'une vraie API externe (WeLoveDevs). Fonctionnalité d'IA intégrée et tableau de bord analytique.",
    tech: ['React', 'Node.js', 'Docker', 'JWT', 'GitHub Actions', 'PostgreSQL', 'WeLoveDevs API'],
    github: 'https://github.com/arayed-khaled2/job-aggregator',
  },
  {
    id: 'tardis',
    year: '1re année · 2025–2026',
    period: '2025–2026',
    title: 'TARDIS, analyse des retards SNCF',
    description:
      "Analyse exploratoire complète des données SNCF avec Python et Pandas. Feature engineering et entraînement d'un modèle de machine learning (régression). Tableau de bord Streamlit interactif pour visualiser les tendances de retard et faire de la prédiction en temps réel.",
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit', 'Machine Learning', 'Analyse de données'],
    github: 'https://github.com/arayed-khaled2/tardis-sncf-analysis',
  },
  {
    id: 'e-todo',
    year: '1re année · 2025–2026',
    period: '2025–2026 · équipe de 4',
    title: 'E-TODO, gestionnaire de tâches',
    description:
      'Application fullstack de gestion de tâches. API REST complète (12 routes CRUD sécurisées), authentification JWT, hachage des mots de passe avec bcrypt et architecture MVC. Déploiement en une seule commande avec Docker Compose.',
    tech: ['Node.js', 'Express', 'JWT', 'bcrypt', 'Docker', 'MVC', 'REST API'],
    github: 'https://github.com/arayed-khaled2/e-todo-app',
  },
  {
    id: 'eliza',
    year: '1re année · 2025–2026',
    period: '2025–2026',
    title: 'ELIZA, chatbot IA',
    description:
      "Chatbot conçu pour répondre à un vrai besoin métier, déployé sur une plateforme de messagerie. Landing page de présentation avec analyse du ROI et KPIs. Réflexion éthique sur l'impact de l'IA intégrée au projet.",
    tech: ['Python', 'IA', 'NLP', 'Landing Page', 'HTML/CSS'],
    github: 'https://github.com/arayed-khaled2/eliza-chatbot',
  },
  {
    id: 'nextbuy',
    year: '1re année · 2025–2026',
    period: '2025–2026',
    title: 'NextBuy, analyse de données',
    description:
      "Analyse exploratoire de millions de commandes d'une épicerie en ligne avec Python et Jupyter. Identification des comportements d'achat, segmentation client et construction de modèles prédictifs. Visualisations avancées avec Matplotlib et Seaborn.",
    tech: ['Python', 'Jupyter', 'Pandas', 'Matplotlib', 'Seaborn', 'Machine Learning'],
    github: 'https://github.com/arayed-khaled2/nextbuy-data-analysis',
  },
  {
    id: 'cupidly',
    year: '1re année · 2025–2026',
    period: '2025–2026 · équipe de 4',
    title: 'Cupidly, application de rencontre',
    description:
      "Application de rencontre hybride, inspirée de Twitter et des applis de rencontre. Le contenu et l'expression personnelle sont au cœur de l'expérience : chacun publie ses idées, opinions et centres d'intérêt dans un fil. Les échanges naissent des idées, avant toute logique de matching.",
    tech: ['React Native', 'Node.js', 'UX Design', 'Figma'],
    github: 'https://github.com/arayed-khaled2/cupidly-dating-app',
  },
]

export default projects
