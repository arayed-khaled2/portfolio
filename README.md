# Portfolio – Khaled Arayed

Mon portfolio personnel développé dans le cadre du projet B-POR-200 à EPITECH Paris.

**Site en ligne** : https://arayed-khaled2.github.io/portfolio/

## Stack technique

- React + Vite
- Styles inline, plus un petit CSS global (`src/index.css`) pour les polices, le focus et les hovers
- react-markdown, react-helmet-async, react-router-dom

## Lancer en local

```bash
npm install
npm run dev
```

## Déployer

```bash
npm run deploy
```

## Contenu

- **Accueil** : candidature de stage (4 à 6 mois, dès avril 2027), photo et téléchargement du CV
- **Stage** : audit de sécurité chez Waialys (contexte, méthode, livrable)
- **Projets** : du plus récent au plus ancien, groupés par année (2e année, 1re année), avec liens GitHub. Pour ajouter un projet, il suffit d'éditer `src/data/projects.js` (champs `year` et `period`)
- **Outils** : compétences par domaine (sécurité offensive, supervision, langages, systèmes, web et données)
- **Parcours** : formation à Epitech et expériences professionnelles
- **Contact** : email, GitHub, LinkedIn, CV et formulaire envoyé via Formspree
