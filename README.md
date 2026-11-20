# DevScope v2

DevScope est une application web destinée aux recruteurs. Elle permet de rechercher des développeurs sur GitHub, de consulter leurs profils et dépôts publics, puis de gérer une shortlist de candidats.

Cette version 2 améliore le suivi des candidats, facilite l'exploration des dépôts et ajoute un système de cache pour limiter les requêtes répétées.

## Fonctionnalités

### Recherche et profils GitHub
- Rechercher un développeur à partir de son nom d'utilisateur GitHub.
- Consulter les informations publiques du profil : avatar, localisation, dépôts, abonnés et abonnements.
- Afficher les dépôts publics avec leur langage principal et leur nombre d'étoiles.
- Rechercher un dépôt par son nom.
- Filtrer les dépôts par langage.
- Combiner la recherche et le filtre pour trouver rapidement un dépôt.

### Gestion de la shortlist
- Ajouter un développeur à la shortlist.
- Consulter les candidats enregistrés.
- Modifier les informations d'un candidat.
- Supprimer un candidat après confirmation.
- Gérer le statut du candidat et sa note sur 5.
- Rechercher et filtrer les candidats selon leur statut.

### Cache et performances
- Enregistrer les données de la shortlist dans `localStorage`.
- Lire les données depuis le cache lorsqu'elles sont encore valides.
- Éviter des appels API inutiles et accélérer l'affichage des données déjà consultées.

> Le cache implémenté dans cette version utilise une durée de validité de **5 minutes**.

## Technologies utilisées

- **HTML5** — structure des pages.
- **Tailwind CSS** — mise en forme de l'interface.
- **JavaScript ES6+** — logique applicative et manipulation du DOM.
- **JavaScript ES Modules** — organisation du code en modules.
- **GitHub REST API** — récupération des profils et dépôts publics.
- **MockAPI** — stockage et gestion des candidats de la shortlist.
- **localStorage** — mise en cache des données côté navigateur.
- **Fetch API / async-await** — communication avec les API.

## Structure du projet

```text
DevScope/
├── assets/
│   └── Image/
├── css/
│   └── style.css
├── src/
│   ├── api.js
│   ├── cash.js
│   ├── profile.js
│   ├── profileHtml.js
│   ├── search.js
│   ├── shortlist.js
│   ├── shortlistHtml.js
│   └── utlis.js
├── index.html
├── profile.html
├── shortlist.html
├── package.json
└── README.md
```

## Installation et lancement

### Prérequis
- Git
- Node.js et npm
- Visual Studio Code avec l'extension Live Server (ou un autre serveur local)

### Étapes

1. Cloner le dépôt :

   ```bash
   git clone https://github.com/aymanechoukri/DevScope.git
   ```

2. Accéder au dossier :

   ```bash
   cd DevScope
   ```

3. Installer les dépendances :

   ```bash
   npm install
   ```

4. Ouvrir `index.html` avec **Live Server**.

> Les modules JavaScript nécessitent un serveur local. N'ouvrez pas directement les pages avec l'URL `file://`.

## Utilisation

1. Depuis la page **Search**, saisir un nom d'utilisateur GitHub.
2. Consulter son profil et parcourir ses dépôts.
3. Utiliser la recherche et le filtre par langage pour retrouver un dépôt.
4. Ajouter le développeur à la shortlist.
5. Depuis la page **Shortlist**, consulter, modifier ou supprimer les candidats.

## API et configuration

- GitHub Users API : `https://api.github.com/users`
- MockAPI : endpoint des candidats configuré dans `src/api.js`.

Aucun token GitHub privé ne doit être ajouté au code source ni envoyé sur GitHub.

## Auteur

**Aymane Chokri**

- GitHub : [@aymanechoukri](https://github.com/aymanechoukri)
- Dépôt : [DevScope](https://github.com/aymanechoukri/DevScope/tree/v2)

---

Projet réalisé dans le cadre d'un brief de développement front-end, avec pour objectif d'améliorer la recherche de développeurs GitHub et le suivi des candidats.
