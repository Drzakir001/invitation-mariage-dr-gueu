# 💍 Martin & Sarah — Guide du site de mariage

## Structure du projet

```
martin-sarah-wedding/
├── index.html      ← Structure de la page (HTML)
├── style.css       ← Toutes les couleurs, polices et animations
├── script.js       ← Logique + CONFIG (vos textes & données)
└── photos/
    ├── couple.jpg      ← Photo principale (héro, plein écran)
    ├── galerie-1.jpg
    ├── galerie-2.jpg
    ├── galerie-3.jpg
    ├── galerie-4.jpg
    ├── galerie-5.jpg
    └── galerie-6.jpg
```

---

## ✏️ Comment modifier les textes

**Ouvrez `script.js`** dans n'importe quel éditeur de texte (Bloc-notes, Notepad++, VS Code…).  
Cherchez le bloc **`const CONFIG = {`** tout en haut — c'est le seul endroit à modifier.

| Ce que vous voulez changer | Clé à modifier |
|---|---|
| Prénoms | `prenom1`, `prenom2` |
| Date et heure | `dateEvent` (format : `"2026-11-21T09:00:00"`) |
| Nom & adresse du lieu | `lieu.nom`, `lieu.adresse` |
| Lien Google Maps | `lieu.mapsUrl` et `lieu.mapEmbed` |
| Programme de la journée | Tableau `programme` |
| Notre histoire | Tableau `histoire` |
| Dress code | `tenue.description`, `tenue.note`, `tenue.couleurs` |
| Lien RSVP | `rsvp.lien` |
| Date limite RSVP | `rsvp.deadline` |
| Hashtag | `footer.hashtag` |

> [!TIP]
> Pour obtenir votre **iframe Google Maps** : allez sur Google Maps → cherchez votre adresse → cliquez ⚙️ Partager → Intégrer une carte → copiez le lien `src="..."` de l'iframe.

---

## 🖼️ Comment remplacer les photos

1. Préparez vos photos — recommandations :
   - **`couple.jpg`** : photo portrait (3:4 ou 4:5), ≥ 800×1000 px
   - **`galerie-1.jpg` à `galerie-6.jpg`** : n'importe quel format, ≥ 600 px de large
2. **Compressez-les** gratuitement sur [squoosh.app](https://squoosh.app) — visez < 300 Ko par image
3. **Renommez-les** exactement comme indiqué ci-dessus
4. **Remplacez** les fichiers dans le dossier `photos/`

> [!IMPORTANT]
> Le site utilise `loading="lazy"` pour toutes les photos sauf `couple.jpg` — elles se chargent uniquement quand l'utilisateur les approche.

---

## 🌐 Mise en ligne avec GitHub + Vercel (étape par étape)

### ÉTAPE 1 — Créer un compte GitHub

1. Allez sur **[github.com](https://github.com)**
2. Cliquez **Sign up** (S'inscrire)
3. Entrez votre email, choisissez un mot de passe, et un nom d'utilisateur (ex: `martin-sarah`)
4. Vérifiez votre email et connectez-vous

---

### ÉTAPE 2 — Créer un dépôt (projet) GitHub

1. Une fois connecté, cliquez le **+** en haut à droite → **New repository**
2. Nommez-le : `mariage` (ou `martin-sarah-wedding`)
3. Laissez-le **Public**
4. Ne cochez rien d'autre → cliquez **Create repository**

---

### ÉTAPE 3 — Envoyer vos fichiers sur GitHub

**Option A — Sans rien installer (recommandé pour débutants) :**

1. Sur la page de votre dépôt, cliquez **uploading an existing file**
2. Faites glisser-déposer **tous vos fichiers** (`index.html`, `style.css`, `script.js`) ET le **dossier `photos`** entier
3. En bas, cliquez **Commit changes** (Enregistrer)

**Option B — Avec GitHub Desktop (plus pratique pour la suite) :**

1. Téléchargez [GitHub Desktop](https://desktop.github.com/)
2. Connectez-vous avec votre compte GitHub
3. Cliquez **File → Add local repository** → choisissez le dossier `martin-sarah-wedding`
4. Cliquez **Publish repository** → **Publish**

---

### ÉTAPE 4 — Créer un compte Vercel

1. Allez sur **[vercel.com](https://vercel.com)**
2. Cliquez **Sign Up** → choisissez **Continue with GitHub**
3. Autorisez Vercel à accéder à votre GitHub
4. Vous êtes connecté !

---

### ÉTAPE 5 — Déployer votre site

1. Sur le tableau de bord Vercel, cliquez **Add New… → Project**
2. Dans la liste de vos dépôts GitHub, cliquez **Import** à côté de `mariage`
3. Ne changez rien aux paramètres — cliquez **Deploy**
4. ⏳ Attendez 30 à 60 secondes…
5. 🎉 **Votre site est en ligne !** Vercel vous donne une URL du type :  
   `https://mariage-xxxxxx.vercel.app`

> [!TIP]
> Vous pouvez avoir un **domaine personnalisé** (ex: `martin-et-sarah.fr`) : dans Vercel → votre projet → **Settings → Domains** → ajoutez votre domaine.

---

### ÉTAPE 6 — Partager le lien à vos invités

Copiez l'URL Vercel et envoyez-la sur WhatsApp, par SMS ou par email.  
Quand le lien est partagé sur WhatsApp, il affichera automatiquement :
- Le titre du mariage
- La description
- La photo du couple (aperçu Open Graph)

---

## 🔄 Comment mettre à jour le site (après le premier déploiement)

**Modification de textes :**
1. Éditez `script.js` sur votre ordinateur
2. Ouvrez **GitHub Desktop** → les changements apparaissent automatiquement
3. Écrivez un court message (ex: "Mise à jour du lien RSVP") → cliquez **Commit to main**
4. Cliquez **Push origin**
5. Vercel redéploie automatiquement en < 1 minute ✅

**Remplacement de photos :**
1. Remplacez les fichiers dans `photos/`
2. Même procédure GitHub Desktop → Commit → Push
3. Vercel met à jour le site automatiquement ✅

> [!NOTE]
> Vercel surveille votre dépôt GitHub en permanence. Chaque fois que vous envoyez un changement (`Push`), le site se redéploie tout seul — aucune action supplémentaire n'est nécessaire.

---

## 📱 Compatibilité vérifiée

| Navigateur / Appareil | Statut |
|---|---|
| Safari iOS (iPhone) | ✅ 100dvh, safe-area |
| Chrome Android | ✅ |
| Chrome Desktop | ✅ |
| Firefox | ✅ |
| Samsung Internet | ✅ |

---

## ♿ Accessibilité & Performance

- Toutes les animations sont **désactivées** si l'appareil demande moins de mouvement (`prefers-reduced-motion`)
- Contenu entièrement visible même sans JavaScript
- Contraste texte ≥ 4.5:1 sur toutes les sections
- Images avec attributs `alt` descriptifs
- Navigation au clavier fonctionnelle (tab, entrée, échap)
- Balises ARIA sur l'enveloppe d'ouverture, le compte à rebours, et le menu

---

*Créé avec amour pour Martin & Sarah — 21 Novembre 2026* 💍
