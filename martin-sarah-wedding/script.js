/* ============================================================
   MARTIN & SARAH — script.js
   ============================================================

   CONFIGURATION — modifiez uniquement ce bloc pour personnaliser
   le site sans toucher au reste du code.
   ============================================================ */
const CONFIG = {

  /* ── Mariés ──────────────────────────────────────────── */
  noms:     "Martin & Sarah",
  prenom1:  "Martin",
  prenom2:  "Sarah",

  /* ── Date & lieu ─────────────────────────────────────── */
  // Format ISO : YYYY-MM-DDTHH:MM:SS (heure locale)
  dateEvent: "2026-11-21T09:00:00",
  lieu: {
    nom:      "Domaine d'Abobote",
    adresse:  "Abobote, Côte d'Ivoire",
    // URL Google Maps pour le bouton itinéraire
    mapsUrl:  "https://www.google.com/maps/search/?api=1&query=Abobote+Cote+d+Ivoire",
    // Embed URL pour l'iframe (remplacez par votre iframe Google Maps)
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.00!2d-4.0167!3d5.3167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMTknMDAuMCJOIDTCsDAxJzAwLjAiVw!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
  },

  /* ── Programme de la journée ─────────────────────────── */
  programme: [
    { heure: "09h00", emoji: "🌸", titre: "Accueil des invités",    desc: "Retrouvez-nous autour d'un verre de bienvenue dans le parc du domaine." },
    { heure: "10h00", emoji: "💍", titre: "Cérémonie",              desc: "Union de nos deux âmes sous le regard de nos proches." },
    { heure: "12h00", emoji: "📸", titre: "Séance photos",          desc: "Immortalisons ensemble les plus beaux instants de ce jour unique." },
    { heure: "13h30", emoji: "🥂", titre: "Cocktail & repas",       desc: "Un déjeuner festif aux saveurs de la région, servi avec amour." },
    { heure: "17h00", emoji: "🕺", titre: "Soirée & animation",     desc: "Musique, danse et joie — la fête continue jusqu'au bout de la nuit !" },
    { heure: "23h00", emoji: "🙏", titre: "Remerciements",          desc: "Nous clôturons cette belle journée avec toute notre gratitude." },
  ],

  /* ── Notre histoire ──────────────────────────────────── */
  histoire: [
    {
      annee: "2020",
      titre: "La rencontre",
      desc:  "Un regard échangé lors d'une soirée entre amis suffit parfois à tout changer. Ce soir-là, nos vies ont basculé."
    },
    {
      annee: "2022",
      titre: "Premier rendez-vous",
      desc:  "Un café qui s'est prolongé des heures durant, des rires partagés et l'évidence que quelque chose de beau commençait."
    },
    {
      annee: "2024",
      titre: "La demande",
      desc:  "Au coucher du soleil, les genoux tremblants et le cœur plein, Martin a posé la question. Sarah a dit oui."
    },
  ],

  /* ── Galerie : noms des fichiers dans /photos/ ───────── */
  galerie: [
    { src: "photos/galerie-1.jpg", alt: "Martin et Sarah en promenade" },
    { src: "photos/galerie-2.jpg", alt: "Le couple au coucher du soleil" },
    { src: "photos/galerie-3.jpg", alt: "Rires complices" },
    { src: "photos/galerie-4.jpg", alt: "La demande en mariage" },
    { src: "photos/galerie-5.jpg", alt: "Moment de tendresse" },
    { src: "photos/galerie-6.jpg", alt: "Portrait du couple" },
  ],

  /* ── Tenue ───────────────────────────────────────────── */
  tenue: {
    description: "Nous vous invitons à adopter une tenue élégante dans des tons chauds et naturels. Messieurs en costume, dames en robe ou tailleur.",
    note:        "Évitez le blanc et le noir pur — laissez ces teintes aux mariés. 😊",
    couleurs: [
      { hex: "#F5EFE0", nom: "Crème" },
      { hex: "#C17F5A", nom: "Terracotta" },
      { hex: "#3B2314", nom: "Brun profond" },
    ],
  },

  /* ── RSVP ────────────────────────────────────────────── */
  rsvp: {
    texte:    "Votre présence est notre plus beau cadeau. Merci de confirmer votre venue avant la date limite.",
    deadline: "Réponse souhaitée avant le 1er octobre 2026",
    // Remplacez par votre lien Google Form, Typeform, etc.
    lien:     "https://docs.google.com/forms/d/e/VOTRE_ID_ICI/viewform",
  },

  /* ── Pied de page ────────────────────────────────────── */
  footer: {
    remerciement: "Merci de partager ce moment si précieux avec nous. Chacun de vous compte immensément dans nos cœurs.",
    initiales:    "M & S",
    hashtag:      "#MartinEtSarah2026",
  },

  /* ── Message de fête (affiché le jour J) ─────────────── */
  celebrationMsg: "🎉 C'est aujourd'hui ! Vive les mariés ! 🎉",
};

/* ============================================================
   UTILITAIRES
   ============================================================ */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ============================================================
   INJECTION DU CONTENU depuis CONFIG
   ============================================================ */
function injectContent() {

  /* ── Lieu ─── */
  $("#lieuName").textContent   = CONFIG.lieu.nom;
  $("#lieuAddress").textContent = CONFIG.lieu.adresse;
  const dirBtn = $("#lieuDirections");
  dirBtn.href = CONFIG.lieu.mapsUrl;
  dirBtn.textContent = "Ouvrir l'itinéraire";
  const mapIframe = $("#mapIframe");
  if (mapIframe) mapIframe.src = CONFIG.lieu.mapEmbed;

  /* ── Tenue ─── */
  $("#tenueDescription").textContent = CONFIG.tenue.description;
  $("#tenueNote").textContent         = CONFIG.tenue.note;
  const swatchContainer = $("#colorSwatches");
  CONFIG.tenue.couleurs.forEach(c => {
    const div = document.createElement("div");
    div.className = "swatch";
    div.setAttribute("role", "listitem");
    div.innerHTML = `
      <div class="swatch-circle" style="background:${c.hex};" aria-label="${c.nom}"></div>
      <span class="swatch-label">${c.nom}</span>`;
    swatchContainer.appendChild(div);
  });

  /* ── RSVP ─── */
  $("#rsvpText").textContent     = CONFIG.rsvp.texte;
  $("#rsvpDeadline").textContent = CONFIG.rsvp.deadline;
  const rsvpBtn = $("#rsvpBtn");
  rsvpBtn.href = CONFIG.rsvp.lien;
  rsvpBtn.textContent = "Confirmer ma présence";

  /* ── Footer ─── */
  $("#footerThanks").textContent    = CONFIG.footer.remerciement;
  $("#footerInitials").textContent  = CONFIG.footer.initiales;
  $("#footerHashtag").textContent   = CONFIG.footer.hashtag;

  /* ── Programme ─── */
  const progList = $("#programmeList");
  CONFIG.programme.forEach((item, i) => {
    const li = document.createElement("li");
    li.className = "programme-item reveal-block";
    li.style.transitionDelay = `${i * 0.1}s`;
    li.innerHTML = `
      <div class="programme-time-cell">
        <p class="programme-time cinzel-text">${item.heure}</p>
        <div class="programme-icon" aria-hidden="true">${item.emoji}</div>
      </div>
      <div class="programme-info">
        <p class="programme-event-title bodoni-text">${item.titre}</p>
        <p class="programme-event-desc jost-text">${item.desc}</p>
      </div>`;
    progList.appendChild(li);
  });

  /* ── Timeline ─── */
  const timelineEl = $("#timeline");
  CONFIG.histoire.forEach((item, i) => {
    const div = document.createElement("div");
    div.className = "timeline-item reveal-block";
    div.style.transitionDelay = `${i * 0.15}s`;
    div.innerHTML = `
      <div class="timeline-item-dot" aria-hidden="true"></div>
      <div class="timeline-content">
        <p class="timeline-year cinzel-text">${item.annee}</p>
        <p class="timeline-event-title bodoni-text">${item.titre}</p>
        <p class="timeline-event-desc jost-text">${item.desc}</p>
      </div>`;
    timelineEl.appendChild(div);
  });

  /* ── Galerie ─── */
  const grid = $("#galleryGrid");
  CONFIG.galerie.forEach((photo, i) => {
    const div = document.createElement("div");
    div.className = "gallery-item reveal-block";
    div.style.transitionDelay = `${i * 0.1}s`;
    const img = document.createElement("img");
    img.src     = photo.src;
    img.alt     = photo.alt;
    img.loading = "lazy";
    img.decoding = "async";
    div.appendChild(img);
    grid.appendChild(div);
  });
}

/* ============================================================
   COMPTE À REBOURS
   ============================================================ */
function initCountdown() {
  const target   = new Date(CONFIG.dateEvent).getTime();
  const daysEl   = $("#cd-days");
  const hoursEl  = $("#cd-hours");
  const minsEl   = $("#cd-minutes");
  const secsEl   = $("#cd-seconds");
  const cdWrap   = $("#countdown");
  const celebEl  = $("#celebration-msg");

  function pad(n) { return String(n).padStart(2, "0"); }

  function tick() {
    const now  = Date.now();
    const diff = target - now;
    if (diff <= 0) {
      cdWrap.classList.add("hidden");
      celebEl.textContent = CONFIG.celebrationMsg;
      celebEl.classList.remove("hidden");
      return;
    }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000)  / 60000);
    const s = Math.floor((diff % 60000)    / 1000);
    daysEl.textContent  = pad(d);
    hoursEl.textContent = pad(h);
    minsEl.textContent  = pad(m);
    secsEl.textContent  = pad(s);
  }
  tick();
  setInterval(tick, 1000);
}

/* ============================================================
   WORD-BY-WORD REVEAL
   ============================================================ */
function wrapWords() {
  if (prefersReducedMotion) return;
  $$(".word-reveal").forEach(el => {
    const words = el.textContent.trim().split(/\s+/);
    el.innerHTML = words.map((w, i) =>
      `<span class="word" style="transition-delay:${i * 0.08}s">${w}</span>`
    ).join(" ");
  });
}

/* ============================================================
   INTERSECTION OBSERVER — fade-in
   ============================================================ */
function initReveal() {
  if (prefersReducedMotion) {
    $$(".reveal-block").forEach(el => el.classList.add("is-visible"));
    $$(".word-reveal").forEach(el => el.classList.add("is-visible"));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  $$(".reveal-block, .word-reveal").forEach(el => obs.observe(el));
}

/* ============================================================
   TIMELINE LINE — scroll driven
   ============================================================ */
function initTimelineLine() {
  if (prefersReducedMotion) return;
  const fill      = $("#timelineFill");
  const timeline  = $("#timeline");
  if (!fill || !timeline) return;

  function updateLine() {
    const rect   = timeline.getBoundingClientRect();
    const winH   = window.innerHeight;
    const start  = rect.top;
    const end    = rect.bottom;
    const visible = Math.min(winH, end) - Math.max(0, start);
    const total   = rect.height;
    const pct     = Math.max(0, Math.min(1, (winH - start) / (winH + total)));
    fill.style.height = (pct * 100) + "%";
  }
  window.addEventListener("scroll", updateLine, { passive: true });
  updateLine();
}

/* ============================================================
   GALERIE — parallaxe légère
   ============================================================ */
function initParallax() {
  if (prefersReducedMotion) return;
  const items = $$(".gallery-item img");
  if (!items.length) return;

  function onScroll() {
    items.forEach(img => {
      const rect  = img.closest(".gallery-item").getBoundingClientRect();
      const winH  = window.innerHeight;
      if (rect.bottom < 0 || rect.top > winH) return;
      const pct   = (winH / 2 - (rect.top + rect.height / 2)) / winH;
      const shift = pct * 25;
      img.style.transform = `scale(1.1) translateY(${shift}px)`;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ============================================================
   NAVIGATION
   ============================================================ */
function initNav() {
  const nav    = $("#nav");
  const toggle = $("#navToggle");
  const menu   = $("#navMenu");

  /* Scrolled state */
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 60);
  }, { passive: true });

  /* Hamburger */
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });

  /* Close on link click */
  $$("a", menu).forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  /* Close on outside click */
  document.addEventListener("click", e => {
    if (!nav.contains(e.target)) {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

/* ============================================================
   ANIMATION D'OUVERTURE — ENVELOPPE
   ============================================================ */
function initEnvelope() {
  const btn        = $("#openBtn");
  const flapTop    = $("#envFlapTop");
  const waxSeal    = $("#waxSeal");
  const envCard    = $("#envCard");
  const screen     = $("#envelope-screen");
  const mainSite   = $("#main-site");

  if (!btn) return;

  btn.addEventListener("click", () => {
    btn.disabled = true;

    if (prefersReducedMotion) {
      // Skip animation, go straight to site
      revealSite(screen, mainSite);
      return;
    }

    // 1. Crack seal
    waxSeal.classList.add("cracked");

    // 2. Open flap after 300ms
    setTimeout(() => {
      flapTop.classList.add("opened");
    }, 300);

    // 3. Card rises after 900ms
    setTimeout(() => {
      envCard.setAttribute("aria-hidden", "false");
      envCard.classList.add("rising");
    }, 900);

    // 4. Reveal site after 2200ms
    setTimeout(() => {
      revealSite(screen, mainSite);
    }, 2200);
  });
}

function revealSite(screen, mainSite) {
  screen.classList.add("fade-out");
  mainSite.setAttribute("aria-hidden", "false");
  mainSite.style.visibility = "visible";
  setTimeout(() => {
    screen.style.display = "none";
    document.body.style.overflow = "";
    // Focus first heading for accessibility
    const h1 = $("h1", mainSite);
    if (h1) h1.focus();
  }, 850);
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  // Lock scroll during envelope
  document.body.style.overflow = "hidden";
  mainSite.style.visibility = "hidden";

  injectContent();
  wrapWords();
  initEnvelope();
  initCountdown();
  initReveal();
  initTimelineLine();
  initParallax();
  initNav();
});

// Shortcut ref for mainSite needed early
const mainSite = document.getElementById("main-site");
