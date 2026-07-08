# Gossip de Cécile — Hors-série « Les gestes qui avouent »

Landing page de capture e-mail et **fondation du design system** de la marque
*Gossip de Cécile*. HTML5 / CSS3 / JavaScript vanilla, sans framework.
Prête à publier sur GitHub Pages.

---

## Structure

```
/
├── index.html          Page (barre de classification, hero, 4 sections, footer)
├── style.css           Design system complet (tokens + composants + page)
├── script.js           Révélation au scroll + formulaire factice
├── README.md
└── assets/
    ├── images/         (vide — visuels éditoriaux à venir)
    ├── icons/          (vide — pictos à venir)
    ├── fonts/          Anka/Coder self-hosté (woff2) + licence OFL
    └── pdf-cover.webp  Couverture du dossier (placeholder à remplacer)
```

---

## Publier sur GitHub Pages

1. Pousse le contenu du dossier à la racine d'un dépôt.
2. **Settings → Pages → Source : `main` / root**.
3. La page est en ligne sous `https://<user>.github.io/<repo>/`.

Aucune étape de build : ce sont des fichiers statiques.

---

## Formulaire Kit (ConvertKit) — déjà branché

Le formulaire Kit (form `9662304`, uid `808d672698`) est intégré aux **deux
emplacements** `.form-slot` (hero + CTA final). Le moteur `ck.5.js` est chargé
une seule fois avant `</body>` ; l'envoi et la validation sont gérés par Kit.

Habillage : la section **F3** de `style.css` habille l'embed aux couleurs de
la marque (champ transparent, texte clair, bouton rouge `#8D1F1F`) sans
toucher aux attributs `action` / `method` / `name`.

**Changer le texte du bouton ou le placeholder.** Ils sont posés en dur dans
l'embed (« J'ouvre le dossier » / « Recevoir le hors-série » / « ton adresse
e-mail »). Pour un réglage durable — qui survit à un ré-export de l'embed —
modifie-les directement dans l'éditeur de formulaire Kit.

**Remplacer / réexporter l'embed Kit.** Colle le nouveau `<form …>` dans un
`.form-slot`. Le bloc `<style>` scopé `data-uid` n'est présent qu'une fois
(dans le formulaire du hero) : il suffit pour les deux. L'habillage F3
s'applique automatiquement à tout formulaire Kit placé dans un `.form-slot`.

---

## Remplacer la couverture

`assets/pdf-cover.webp` est un **placeholder** généré dans l'identité de la
marque. Remplace-le par la vraie couverture, même nom de fichier, ratio
portrait (~1000 × 1414). Deux occurrences dans `index.html` (hero + CTA) —
rien d'autre à changer.

---

## Polices

| Rôle | Police | Chargement | Usage |
|------|--------|-----------|-------|
| Titres, sous-titres, citations | **Cormorant Garamond** | Google Fonts | display |
| Interface, corps, boutons, formulaires | **Anka/Coder** | self-hosté (`assets/fonts/`, OFL) | `--font-ui` |
| Tampons, numéros, annotations | **Special Elite** | Google Fonts | petits détails uniquement |

> Anka/Coder est une **monospace**. Le token `--font-ui` (dans `:root`) pilote
> tout le texte fonctionnel. Pour confier les longs paragraphes au serif sans
> rien casser, il suffit de pointer `--font-ui` vers `var(--font-display)`.

---

## Design tokens (`:root` dans `style.css`)

Tout se pilote depuis un seul endroit : couleurs, échelle typographique,
espacements, largeurs, rayons, transitions, et tokens de composants
(bouton, champ, carte). Réutilise les composants (`.btn`, `.input`, `.card`,
`.stamp`, `.section`, `.u-container`, `.u-eyebrow`, `.cover`) pour construire
les prochaines pages (vente, merci, attente, blog) sans réécrire de CSS.

Palette : fond `#111111` · texte `#F5F5F5` · secondaire `#B8B8B8` ·
accent `#8D1F1F`.

---

## Licences

- **Anka/Coder** — SIL Open Font License 1.1 (`assets/fonts/OFL.txt`).
- **Cormorant Garamond**, **Special Elite** — OFL / Apache, servies par Google Fonts.
