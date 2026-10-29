// ===================== Ikonkalar (Lucide uslubida) =====================
const I = {
  check: '<path d="M20 6 9 17l-5-5"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  minus: '<path d="M5 12h14"/>',
  arrowR: '<path d="M5 12h14M12 5l7 7-7 7"/>',
  arrowL: '<path d="M19 12H5M12 19l-7-7 7-7"/>',
  alert: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4M12 17h.01"/>',
  crown: '<path d="m2 6 4 11h12l4-11-6 5-4-7-4 7-6-5z"/><path d="M6 21h12"/>',
  briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  phone: '<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  trend: '<path d="m22 7-8.5 8.5-5-5L2 17"/><path d="M16 7h6v6"/>',
  wallet: '<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',
  bulb: '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6M10 22h4"/>',
  copy: '<rect x="8" y="8" width="14" height="14" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
  printer: '<path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>',
  refresh: '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
  bar: '<path d="M3 3v18h18"/><path d="M18 17V9M13 17V5M8 17v-3"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
  grad: '<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
  sparkles: '<path d="M12 3l1.9 5.8L20 10l-6.1 1.2L12 17l-1.9-5.8L4 10l6.1-1.2z"/><path d="M19 17v4M17 19h4"/>',
  bag: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/>',
  food: '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/>',
  wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  health: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/>',
  building: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>',
  layers: '<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 17 10 5 10-5M2 12l10 5 10-5"/>',
  sparkle2: '<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/>',
  package: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12"/>',
  instagram: '<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
  facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  send: '<path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/>',
  music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  youtube: '<path d="M2.5 17a24 24 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24 24 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
  filter: '<path d="M22 3H2l8 9.46V19l4 2v-8.54z"/>',
  calc: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M16 14v4M16 10h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01"/>',
  dollar: '<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
  file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4M10 13H8M16 17H8M16 13h-2"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  enter: '<path d="M9 10l-5 5 5 5"/><path d="M20 4v7a4 4 0 0 1-4 4H4"/>',
};
const icon = (n) =>
  `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${I[n] || ""}</svg>`;
const hydrateIcons = (root = document) =>
  root.querySelectorAll("[data-icon]").forEach((el) => { if (!el.dataset.done) { el.insertAdjacentHTML("afterbegin", icon(el.dataset.icon)); el.dataset.done = 1; } });

// ===================== Ma'lumotlar =====================
const PLATFORMS = {
  instagram: { name: "Instagram",  icon: "instagram", cpl: [0.8, 1.5] },
  facebook:  { name: "Facebook",   icon: "facebook",  cpl: [0.7, 1.3] },
  telegram:  { name: "Telegram",   icon: "send",      cpl: [1.0, 2.0] },
  tiktok:    { name: "TikTok",     icon: "music",     cpl: [0.5, 1.2] },
  google:    { name: "Google Ads", icon: "search",    cpl: [1.5, 3.0] },
  youtube:   { name: "YouTube",    icon: "youtube",   cpl: [1.0, 2.5] },
};

const SECTORS = {
  education:  { name: "Ta'lim / Kurslar",         icon: "grad",     k: 1.0 },
  beauty:     { name: "Go'zallik / Salon",        icon: "sparkle2", k: 1.0 },
  ecommerce:  { name: "Online do'kon / Savdo",    icon: "bag",      k: 1.0 },
  food:       { name: "Restoran / Ovqat",         icon: "food",     k: 0.9 },
  services:   { name: "Xizmat ko'rsatish",        icon: "wrench",   k: 1.1 },
  medical:    { name: "Tibbiyot / Klinika",       icon: "health",   k: 1.4 },
  realestate: { name: "Ko'chmas mulk / Qurilish", icon: "building", k: 2.0 },
  b2b:        { name: "B2B / Ulgurji",            icon: "layers",   k: 1.8 },
  other:      { name: "Boshqa",                   icon: "package",  k: 1.0 },
};

const QUESTIONS = [
  {
    id: "owner", icon: "crown", short: "Biznes egasi", group: 0, title: "Siz biznes egasimisiz?",
    options: [
      { v: "yes", t: "Ha, biznes egasiman", d: "Qarorlarni o'zim qabul qilaman", i: "crown" },
      { v: "manager", t: "Yo'q, menejer / marketologman", d: "Biznes egasi nomidan ishlayman", i: "briefcase" },
    ],
  },
  {
    id: "crm", icon: "database", short: "CRM tizimi", group: 0, title: "Sizda CRM tizimi mavjudmi?",
    hint: "AmoCRM, Bitrix24 yoki boshqa mijozlar bazasini boshqarish tizimi",
    options: [
      { v: "yes", t: "Ha, bor", d: "Barcha lidlar CRM'da yuritiladi", i: "check", tone: "ok" },
      { v: "no", t: "Yo'q", d: "Mijozlar Excel, daftar yoki Telegramda", i: "x", tone: "bad" },
    ],
  },
  {
    id: "sales", icon: "users", short: "Sotuv bo'limi", group: 0, title: "Alohida sotuv bo'limi (menejerlar) bormi?",
    options: [
      { v: "yes", t: "Ha, bor", d: "Lidlar bilan alohida jamoa ishlaydi", i: "users", tone: "ok" },
      { v: "no", t: "Yo'q, o'zim sotaman", d: "Barcha sotuvlarni o'zim qilaman", i: "user", tone: "bad" },
    ],
  },
  {
    id: "social", icon: "phone", short: "Ijtimoiy tarmoq", group: 0, title: "Ijtimoiy tarmoqlaringiz holati qanday? (Upakovka)",
    hint: "Profil dizayni, kontent, highlights, bio va mijozlar fikrlari",
    options: [
      { v: "good", t: "Ha, zo'r holatda", d: "Professional dizayn, kontent va otzivlar", i: "check", tone: "ok" },
      { v: "mid", t: "O'rtacha", d: "Bor, lekin tizimli emas", i: "minus", tone: "mid" },
      { v: "bad", t: "Yo'q, yomon holatda", d: "Deyarli bo'sh yoki eskirgan", i: "x", tone: "bad" },
    ],
  },
  {
    id: "sector", icon: "building", short: "Soha", group: 1, title: "Biznesingiz qaysi sohada?",
    note: "Tushunarli. Endi moliyaviy maqsadlarni ko'rib chiqamiz.",
    grid: true,
    options: Object.entries(SECTORS).map(([v, s]) => ({ v, t: s.name, i: s.icon })),
  },
  {
    id: "platform", icon: "target", short: "Reklama platformasi", group: 1, title: "Asosiy reklama platformangiz qaysi?",
    grid: true,
    options: Object.entries(PLATFORMS).map(([v, p]) => ({ v, t: p.name, d: `$${p.cpl[0]} – $${p.cpl[1]} / lid`, i: p.icon })),
  },
  {
    id: "revenue", icon: "dollar", short: "Oylik daromad", group: 1, title: "Oylik daromad maqsadingiz qancha?", hint: "Dollarda kiriting, masalan: 10 000",
    input: { prefix: "$", min: 100, max: 10000000, placeholder: "10000", chips: [5000, 10000, 20000, 50000] },
  },
  {
    id: "check", icon: "calc", short: "O'rtacha chek", group: 1, title: "O'rtacha chek qancha?", hint: "Bitta mijoz o'rtacha qancha to'laydi ($)",
    input: { prefix: "$", min: 1, max: 1000000, placeholder: "60", chips: [20, 60, 150, 500] },
  },
  {
    id: "conversion", icon: "trend", short: "Sotuv konversiyasi", group: 1, title: "Sotuv konversiyasi necha foiz?", hint: "100 ta liddan nechtasi xarid qiladi (%)",
    input: { suffix: "%", min: 1, max: 100, placeholder: "30", chips: [5, 10, 20, 30] },
  },
];
const GROUPS = ["Biznes holati", "Moliyaviy maqsadlar"];

// ===================== State & helpers =====================
const answers = {};
let step = 0;
let view = "start"; // start | quiz | result

const $ = (id) => document.getElementById(id);
const fmt = (n) => "$" + Math.round(n).toLocaleString("en-US");
const num = (n) => Math.round(n).toLocaleString("en-US");

function answerLabel(q) {
  const v = answers[q.id];
  if (v === undefined) return "";
  if (q.options) return q.options.find((o) => o.v === v)?.t || "";
  return (q.input.prefix || "") + Number(v).toLocaleString("en-US") + (q.input.suffix || "");
}

function setView(v) {
  view = v;
  ["start", "quiz", "result"].forEach((id) => $(id).classList.toggle("hidden", id !== v));
  const el = $(v); el.classList.remove("view"); void el.offsetWidth; el.classList.add("view");
  renderChrome();
}

// ===================== Sidebar / Topbar =====================
function renderChrome() {
  // Stepper
  let html = "";
  GROUPS.forEach((g, gi) => {
    html += `<div><div class="s-group-title">${g}</div>`;
    QUESTIONS.forEach((q, i) => {
      if (q.group !== gi) return;
      const done = answers[q.id] !== undefined && !(view === "quiz" && i === step);
      const active = view === "quiz" && i === step;
      const cls = active ? "active" : done ? "done" : "";
      html += `<button class="s-item ${cls}" data-step="${i}">
        <span class="s-dot">${done ? icon("check") : i + 1}</span>
        <span class="s-text"><div class="s-label">${q.short}</div>${done ? `<div class="s-val">${answerLabel(q)}</div>` : ""}</span>
      </button>`;
    });
    html += `</div>`;
  });
  const resActive = view === "result";
  html += `<div><div class="s-group-title">Natija</div>
    <button class="s-item ${resActive ? "active" : ""}"><span class="s-dot">${icon("file")}</span>
    <span class="s-text"><div class="s-label">Audit hisoboti</div></span></button></div>`;
  $("stepper").innerHTML = html;
  $("stepper").querySelectorAll(".s-item.done").forEach((b) =>
    (b.onclick = () => { step = +b.dataset.step; setView("quiz"); renderQuestion(); }));

  // Topbar
  const answered = QUESTIONS.filter((q) => answers[q.id] !== undefined).length;
  if (view === "start") {
    $("crumbs").innerHTML = `<b>Bosh sahifa</b>`;
    $("topRight").innerHTML = `<span class="pill">${icon("clock")} ~2 daqiqa</span>`;
    $("progressBar").style.width = "0%";
  } else if (view === "quiz") {
    $("crumbs").innerHTML = `Audit <span class="sep">/</span> ${GROUPS[QUESTIONS[step].group]} <span class="sep">/</span> <b>${QUESTIONS[step].short}</b>`;
    $("topRight").innerHTML = `<span class="pill">${icon("check")} ${answered} / ${QUESTIONS.length} javob</span>`;
    $("progressBar").style.width = `${(step / QUESTIONS.length) * 100}%`;
  } else {
    $("crumbs").innerHTML = `Audit <span class="sep">/</span> <b>Hisobot</b>`;
    $("topRight").innerHTML = `<span class="pill success">${icon("check")} Hisobot tayyor</span>`;
    $("progressBar").style.width = "100%";
  }
}

// ===================== Quiz =====================
$("startBtn").onclick = () => { step = 0; setView("quiz"); renderQuestion(); };
$("backBtn").onclick = () => {
  if (step === 0) return setView("start");
  step--; renderQuestion(); renderChrome();
};
$("nextBtn").onclick = () => submitInput();

function renderQuestion() {
  const q = QUESTIONS[step];
  const quiz = $("quiz");
  quiz.classList.remove("view"); void quiz.offsetWidth; quiz.classList.add("view");

  $("qIconBadge").innerHTML = icon(q.icon);
  $("qNum").textContent = `Savol ${step + 1} / ${QUESTIONS.length}`;
  $("qGroup").textContent = GROUPS[q.group];
  $("questionTitle").textContent = q.title;
  $("questionHint").textContent = q.hint || "";
  $("questionHint").classList.toggle("hidden", !q.hint);
  $("sectionNote").innerHTML = q.note ? `${icon("info")} ${q.note}` : "";
  $("sectionNote").classList.toggle("hidden", !q.note);

  const area = $("answerArea");
  if (q.options) {
    $("nextBtn").classList.add("hidden");
    $("kbdHint").innerHTML = `<span class="kbd">1</span>–<span class="kbd">${q.options.length}</span> tugmalari bilan tanlang`;
    area.innerHTML = `<div class="options ${q.grid ? "grid2" : ""}">${q.options.map((o, i) => `
      <button class="option ${answers[q.id] === o.v ? "selected" : ""}" data-v="${o.v}">
        <span class="o-ic ${o.tone || ""}">${icon(o.i)}</span>
        <span class="o-body"><div class="o-title">${o.t}</div>${o.d ? `<div class="o-desc">${o.d}</div>` : ""}</span>
        <span class="kbd">${i + 1}</span>
      </button>`).join("")}</div>`;
    area.querySelectorAll(".option").forEach((b) => (b.onclick = () => choose(b.dataset.v)));
  } else {
    const i = q.input;
    const last = step === QUESTIONS.length - 1;
    $("nextBtn").classList.remove("hidden");
    $("nextBtn").innerHTML = last ? `Hisobotni ko'rish ${icon("arrowR")}` : `Davom etish ${icon("arrowR")}`;
    $("kbdHint").innerHTML = `<span class="kbd">Enter</span> — davom etish`;
    area.innerHTML = `
      <div class="field">
        <div class="input-wrap" id="inputWrap">
          ${i.prefix ? `<span class="affix pre">${i.prefix}</span>` : ""}
          <input type="number" id="numInput" inputmode="decimal" placeholder="${i.placeholder}" value="${answers[q.id] ?? ""}" />
          ${i.suffix ? `<span class="affix suf">${i.suffix}</span>` : ""}
        </div>
        <div class="chips">${i.chips.map((c) => `<button class="chip" data-v="${c}">${i.prefix || ""}${c.toLocaleString("en-US")}${i.suffix || ""}</button>`).join("")}</div>
        <div class="error" id="err"></div>
        <div id="live"></div>
      </div>`;
    const inp = $("numInput");
    inp.focus();
    inp.addEventListener("keydown", (e) => { if (e.key === "Enter") submitInput(); });
    inp.addEventListener("input", () => { $("inputWrap").classList.remove("err"); $("err").textContent = ""; updateLive(); });
    area.querySelectorAll(".chip").forEach((c) => (c.onclick = () => { inp.value = c.dataset.v; updateLive(); inp.focus(); }));
    updateLive();
  }
}

function updateLive() {
  const q = QUESTIONS[step];
  const v = parseFloat($("numInput")?.value);
  let txt = "";
  if (q.id === "check" && v > 0 && answers.revenue) {
    txt = `Kerakli mijozlar soni: <b>${num(Math.ceil(answers.revenue / v))} ta</b>`;
  } else if (q.id === "conversion" && v > 0 && v <= 100 && answers.revenue && answers.check) {
    const clients = Math.ceil(answers.revenue / answers.check);
    txt = `Kerakli lidlar soni: <b>${num(Math.ceil(clients / (v / 100)))} ta</b> (${num(clients)} mijoz uchun)`;
  }
  $("live").innerHTML = txt ? `<div class="live">${icon("calc")}<span>${txt}</span></div>` : "";
}

function choose(v) {
  const q = QUESTIONS[step];
  answers[q.id] = v;
  $("answerArea").querySelectorAll(".option").forEach((b) => b.classList.toggle("selected", b.dataset.v === v));
  setTimeout(next, 200);
}

function submitInput() {
  const q = QUESTIONS[step];
  const v = parseFloat($("numInput").value);
  if (isNaN(v) || v < q.input.min || v > q.input.max) {
    $("inputWrap").classList.add("err");
    $("err").textContent = `Iltimos, ${q.input.min.toLocaleString("en-US")} dan ${q.input.max.toLocaleString("en-US")} gacha son kiriting.`;
    return;
  }
  answers[q.id] = v;
  next();
}

function next() {
  const firstMissing = QUESTIONS.findIndex((q) => answers[q.id] === undefined);
  if (step < QUESTIONS.length - 1) { step++; renderQuestion(); renderChrome(); }
  else if (firstMissing === -1) showResult();
  else { step = firstMissing; renderQuestion(); renderChrome(); }
}

document.addEventListener("keydown", (e) => {
  if (view !== "quiz") return;
  const q = QUESTIONS[step];
  if (!q.options || e.ctrlKey || e.metaKey || e.altKey) return;
  const n = parseInt(e.key, 10);
  if (n >= 1 && n <= q.options.length) choose(q.options[n - 1].v);
  if (e.key === "Backspace" || e.key === "ArrowLeft") $("backBtn").click();
});

// ===================== Hisob-kitob =====================
function calculate(a) {
  const clients = Math.ceil(a.revenue / a.check);
  const leads = Math.ceil(clients / (a.conversion / 100));

  const platform = PLATFORMS[a.platform];
  const sector = SECTORS[a.sector];
  const cplMin = platform.cpl[0] * sector.k;
  const cplMax = platform.cpl[1] * sector.k;

  const penalties = [];
  if (a.crm === "no") penalties.push({ p: 20, t: "CRM yo'qligi sababli yo'qotishlar" });
  if (a.sales === "no") penalties.push({ p: 20, t: "Sotuvchilar yo'qligi sababli past konversiya" });
  if (a.social === "mid") penalties.push({ p: 10, t: "Ijtimoiy tarmoq upakovkasi o'rtacha — ishonch past" });
  if (a.social === "bad") penalties.push({ p: 25, t: "Ijtimoiy tarmoq upakovkasi yomon — lidlar qimmatlashadi" });
  const penaltyPct = penalties.reduce((s, x) => s + x.p, 0);
  const mult = 1 + penaltyPct / 100;

  const baseMin = leads * cplMin, baseOpt = leads * cplMax;
  const minBudget = baseMin * mult, optBudget = baseOpt * mult;

  // Tizim sog'ligi balli (0–100)
  let score = 0;
  if (a.crm === "yes") score += 30;
  if (a.sales === "yes") score += 30;
  score += a.social === "good" ? 25 : a.social === "mid" ? 12 : 0;
  score += a.conversion >= 10 ? 15 : a.conversion >= 5 ? 8 : 0;
  const risk = score >= 75 ? { t: "Past", c: "ok", color: "#16a34a" }
             : score >= 45 ? { t: "O'rta", c: "mid", color: "#d97706" }
             : { t: "Yuqori", c: "bad", color: "#dc2626" };

  const recs = [];
  if (a.crm === "no") recs.push({ t: "CRM tizimi (AmoCRM/Bitrix24) o'rnating", d: "Lidlar yo'qolmaydi, har bir murojaat nazoratda bo'ladi — byudjetni ~20% tejaydi.", p: "bad", pt: "Yuqori" });
  if (a.sales === "no") recs.push({ t: "Alohida sotuv menejeri yollang", d: "Lidlar \"kuyib ketmasligi\" uchun ularga 5 daqiqa ichida javob berilishi kerak.", p: "bad", pt: "Yuqori" });
  if (a.social === "bad") recs.push({ t: "Reklamadan oldin upakovkani tartibga keltiring", d: "Bio, highlights, otzivlar va sifatli kontent — lid narxini sezilarli arzonlashtiradi.", p: "bad", pt: "Yuqori" });
  if (a.social === "mid") recs.push({ t: "Ijtimoiy tarmoq upakovkasini kuchaytiring", d: "Kontent rejasi va otzivlar bilan ishonchni oshiring — lid narxi ~10% arzonlashadi.", p: "mid", pt: "O'rta" });
  if (a.conversion < 10) recs.push({ t: "Sotuv konversiyasini oshiring", d: "Sotuv skriptlari, e'tirozlar bilan ishlash va follow-up tizimini joriy qiling.", p: "mid", pt: "O'rta" });
  if (a.owner === "manager") recs.push({ t: "Hisobotni biznes egasi bilan muhokama qiling", d: "Byudjet va tizimli o'zgarishlarni rahbariyat bilan tasdiqlating.", p: "neutral", pt: "Tashkiliy" });
  recs.push({ t: "Reklamani kichik test byudjeti bilan boshlang", d: `Dastlab ${fmt(Math.max(50, minBudget * 0.15))} atrofida test qilib, real CPL ni aniqlang va keyin masshtablang.`, p: "ok", pt: "Boshlash" });
  if (!penalties.length) recs.push({ t: "Byudjetni bosqichma-bosqich oshiring", d: "Tizimingiz tayyor — samarali kampaniyalarni haftalik 20–30% ga masshtablang.", p: "ok", pt: "O'sish" });

  return { clients, leads, platform, sector, cplMin, cplMax, penalties, penaltyPct, mult, baseMin, baseOpt, minBudget, optBudget, score, risk, recs };
}

// ===================== Natija =====================
function badge(tone, text) {
  const ic = { ok: "check", mid: "minus", bad: "x" }[tone];
  return `<span class="badge ${tone}">${ic ? icon(ic) : ""}${text}</span>`;
}

function gauge(score, color) {
  const len = Math.PI * 80;
  return `<svg class="gauge" viewBox="0 0 200 110">
    <path d="M20 100 A80 80 0 0 1 180 100" fill="none" stroke="hsl(240 4.8% 90%)" stroke-width="12" stroke-linecap="round"/>
    <path id="gArc" d="M20 100 A80 80 0 0 1 180 100" fill="none" stroke="${color}" stroke-width="12" stroke-linecap="round"
      stroke-dasharray="0 ${len}" style="transition: stroke-dasharray 1s cubic-bezier(.4,0,.2,1)" data-len="${len}" data-score="${score}"/>
  </svg>`;
}

function showResult() {
  const a = answers;
  const r = calculate(a);
  setView("result");

  const socialTone = { good: "ok", mid: "mid", bad: "bad" }[a.social];
  const socialText = { good: "Zo'r holatda", mid: "O'rtacha", bad: "Yomon holatda" }[a.social];
  const cplText = `$${+r.cplMin.toFixed(2)} – $${+r.cplMax.toFixed(2)}`;
  const today = new Date().toLocaleDateString("uz-UZ", { day: "2-digit", month: "2-digit", year: "numeric" });
  const convW = Math.max(8, a.conversion);
  const basePct = (r.baseOpt / r.optBudget) * 100;

  $("result").innerHTML = `
    <div class="r-header">
      <div>
        <span class="eyebrow">${icon("file")} Marketing & Budjet Auditi</span>
        <h1>Audit hisoboti</h1>
        <div class="r-meta">
          <span class="pill">${icon(r.sector.icon)} ${r.sector.name}</span>
          <span class="pill">${icon(r.platform.icon)} ${r.platform.name}</span>
          <span class="pill">${icon("calendar")} ${today}</span>
        </div>
      </div>
      <div class="r-actions">
        <button class="btn btn-outline" id="restartBtn">${icon("refresh")} Qaytadan</button>
        <button class="btn btn-outline" id="printBtn">${icon("printer")} PDF</button>
        <button class="btn btn-primary" id="copyBtn">${icon("copy")} Nusxalash</button>
      </div>
    </div>

    <div class="kpis">
      <div class="kpi"><div class="kpi-top"><span class="kpi-label">Kerakli mijozlar</span><span class="kpi-ic" data-icon="users"></span></div>
        <div class="kpi-val" data-count="${r.clients}">0</div><div class="kpi-sub">${fmt(a.revenue)} / ${fmt(a.check)} chek</div></div>
      <div class="kpi"><div class="kpi-top"><span class="kpi-label">Kerakli lidlar</span><span class="kpi-ic" data-icon="target"></span></div>
        <div class="kpi-val" data-count="${r.leads}">0</div><div class="kpi-sub">${a.conversion}% konversiya bilan</div></div>
      <div class="kpi"><div class="kpi-top"><span class="kpi-label">Minimal byudjet</span><span class="kpi-ic amber" data-icon="wallet"></span></div>
        <div class="kpi-val" data-count="${r.minBudget}" data-money="1">$0</div><div class="kpi-sub">oyiga, jarima bilan</div></div>
      <div class="kpi"><div class="kpi-top"><span class="kpi-label">Optimal byudjet</span><span class="kpi-ic green" data-icon="trend"></span></div>
        <div class="kpi-val" data-count="${r.optBudget}" data-money="1">$0</div><div class="kpi-sub">oyiga, tavsiya etiladi</div></div>
    </div>

    <div class="r-grid">
      <div class="panel span-7">
        <div class="panel-head"><h3>${icon("health")} Biznes holati</h3></div>
        <div class="panel-body status-list">
          <div class="status-row"><span class="st-ic" data-icon="database"></span>
            <div class="st-body"><div class="st-name">CRM tizimi</div><div class="st-desc">Lidlarni hisobga olish va nazorat</div></div>
            ${badge(a.crm === "yes" ? "ok" : "bad", a.crm === "yes" ? "Bor" : "Yo'q")}</div>
          <div class="status-row"><span class="st-ic" data-icon="users"></span>
            <div class="st-body"><div class="st-name">Sotuv bo'limi</div><div class="st-desc">Lidlar bilan ishlovchi menejerlar</div></div>
            ${badge(a.sales === "yes" ? "ok" : "bad", a.sales === "yes" ? "Bor" : "Yo'q, o'zim sotaman")}</div>
          <div class="status-row"><span class="st-ic" data-icon="phone"></span>
            <div class="st-body"><div class="st-name">Ijtimoiy tarmoq</div><div class="st-desc">Upakovka va kontent sifati</div></div>
            ${badge(socialTone, socialText)}</div>
          <div class="status-row"><span class="st-ic" data-icon="${a.owner === "yes" ? "crown" : "briefcase"}"></span>
            <div class="st-body"><div class="st-name">Respondent</div><div class="st-desc">Audit to'ldiruvchi</div></div>
            <span class="badge neutral">${a.owner === "yes" ? "Biznes egasi" : "Menejer / Marketolog"}</span></div>
        </div>
      </div>

      <div class="panel span-5">
        <div class="panel-head"><h3>${icon("shield")} Xavf darajasi</h3>${badge(r.risk.c, r.risk.t)}</div>
        <div class="panel-body gauge-wrap">
          ${gauge(r.score, r.risk.color)}
          <div class="gauge-score">${r.score}<small>/100</small></div>
          <div class="gauge-label">Tizim sog'ligi balli</div>
          <div class="gauge-legend">
            <span><i style="background:#dc2626"></i>0–44 Yuqori</span>
            <span><i style="background:#d97706"></i>45–74 O'rta</span>
            <span><i style="background:#16a34a"></i>75+ Past</span>
          </div>
        </div>
      </div>

      <div class="panel span-6">
        <div class="panel-head"><h3>${icon("filter")} Funnel hisob-kitobi</h3></div>
        <div class="panel-body">
          <div class="funnel">
            <div class="f-row"><span class="f-name">Lidlar</span><div class="f-track"><div class="f-bar" data-w="100" style="background:hsl(240 5.9% 10%)">100%</div></div><span class="f-val">${num(r.leads)}</span></div>
            <div class="f-row"><span class="f-name">Mijozlar</span><div class="f-track"><div class="f-bar" data-w="${convW}" style="background:hsl(240 3.8% 46.1%)">${a.conversion}%</div></div><span class="f-val">${num(r.clients)}</span></div>
            <div class="f-row"><span class="f-name">Daromad</span><div class="f-track"><div class="f-bar" data-w="${convW}" style="background:hsl(142.1 76.2% 36.3%)"></div></div><span class="f-val">${fmt(a.revenue)}</span></div>
          </div>
          <div class="formula">${icon("calc")} ${fmt(a.revenue)} ÷ ${fmt(a.check)} ÷ ${a.conversion}% = ${num(r.leads)} lid</div>
        </div>
      </div>

      <div class="panel span-6">
        <div class="panel-head"><h3>${icon("wallet")} Reklama byudjeti</h3></div>
        <div class="panel-body">
          <div class="kv">
            <div class="kv-row"><span>Platforma</span><b>${icon(r.platform.icon)} ${r.platform.name}</b></div>
            <div class="kv-row"><span>Lid narxi (benchmark)</span><b>${cplText}</b></div>
            <div class="kv-row"><span>Bazaviy byudjet</span><b>${fmt(r.baseMin)} – ${fmt(r.baseOpt)}</b></div>
            ${r.penaltyPct ? `<div class="kv-row"><span>Samaradorlik jarimasi</span><b class="neg">+${r.penaltyPct}%</b></div>` : ""}
          </div>
          <div class="budget-cards">
            <div class="b-card"><div class="b-label">Minimal</div><div class="b-val">${fmt(r.minBudget)}</div><div class="b-sub">oyiga</div></div>
            <div class="b-card opt"><div class="b-label">Optimal <span class="badge ok">Tavsiya</span></div><div class="b-val">${fmt(r.optBudget)}</div><div class="b-sub">oyiga</div></div>
          </div>
          ${r.penaltyPct ? `<div class="stack">
            <div class="stack-bar"><div class="base" style="width:${basePct}%"></div><div class="pen" style="width:${100 - basePct}%"></div></div>
            <div class="stack-legend"><span><i style="background:hsl(240 5.9% 10%)"></i>Bazaviy: ${fmt(r.baseOpt)}</span><span><i style="background:hsl(0 84.2% 60.2%)"></i>Yo'qotish: ${fmt(r.optBudget - r.baseOpt)}</span></div>
          </div>` : ""}
        </div>
      </div>

      <div class="span-12">
        ${r.penalties.length ? `
        <div class="alert danger">
          <span class="alert-ic" data-icon="alert"></span>
          <div style="flex:1">
            <h4>Muhim ogohlantirishlar — samaradorlik jarimasi</h4>
            <ul>${r.penalties.map((p) => `<li>${icon("x")} ${p.t}<b>+${p.p}%</b></li>`).join("")}</ul>
            <p>Sizda tizim bo'lmagani uchun real byudjet <b>${r.penaltyPct}%</b> ga qimmatroq tushishi mumkin — bu oyiga taxminan <b>${fmt(r.optBudget - r.baseOpt)}</b> ortiqcha xarajat.</p>
          </div>
        </div>` : `
        <div class="alert success">
          <span class="alert-ic" data-icon="check"></span>
          <div><h4>Samaradorlik jarimasi yo'q</h4>
          <p>Sizda CRM, sotuv bo'limi va kuchli upakovka mavjud — reklama byudjeti maksimal samarali ishlaydi.</p></div>
        </div>`}
      </div>

      <div class="panel span-12">
        <div class="panel-head"><h3>${icon("bulb")} Tavsiyalar</h3><span class="pill">${r.recs.length} ta qadam</span></div>
        <div class="panel-body recs">
          ${r.recs.map((x, i) => `
            <div class="rec"><span class="rec-n">${i + 1}</span>
              <div class="rec-body"><div class="rec-title">${x.t}</div><div class="rec-desc">${x.d}</div></div>
              <span class="badge ${x.p}">${x.pt}</span></div>`).join("")}
        </div>
      </div>
    </div>`;

  hydrateIcons($("result"));
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Animatsiyalar
  requestAnimationFrame(() => {
    const arc = $("gArc");
    arc.setAttribute("stroke-dasharray", `${(arc.dataset.len * arc.dataset.score) / 100} ${arc.dataset.len}`);
    document.querySelectorAll(".f-bar").forEach((b) => (b.style.width = b.dataset.w + "%"));
  });
  document.querySelectorAll("[data-count]").forEach((el) => countUp(el, +el.dataset.count, !!el.dataset.money));

  $("restartBtn").onclick = restart;
  $("printBtn").onclick = () => window.print();
  $("copyBtn").onclick = () => copyReport(a, r, cplText);
}

function countUp(el, target, money) {
  const t0 = performance.now(), dur = 900;
  const tick = (t) => {
    const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3);
    el.textContent = money ? fmt(target * e) : num(target * e);
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function copyReport(a, r, cplText) {
  const socialFull = { good: "✅ Ha, zo'r holatda", mid: "⚠️ O'rtacha", bad: "❌ Yo'q, yomon holatda" }[a.social];
  const riskEmoji = { ok: "🟢", mid: "🟡", bad: "🔴" }[r.risk.c];
  const lines = [
    "📊 MARKETING & BUDJET AUDITI", "",
    "🏥 Biznes holati:",
    `• 📂 CRM: ${a.crm === "yes" ? "✅ Bor" : "❌ Yo'q"}`,
    `• 👥 Sotuv bo'limi: ${a.sales === "yes" ? "✅ Bor" : "❌ Yo'q, o'zim sotaman"}`,
    `• 📱 Ijtimoiy tarmoq: ${socialFull}`,
    `• ⚠️ Xavf darajasi: ${riskEmoji} ${r.risk.t}`, "",
    "🎯 Moliyaviy maqsad:",
    `• Oylik daromad: ${fmt(a.revenue)}`,
    `• O'rtacha chek: ${fmt(a.check)}`,
    `• Kerakli mijozlar soni: ${num(r.clients)} ta`, "",
    "📈 Funnel hisob-kitobi:",
    `• Sotuv konversiyasi: ${a.conversion}%`,
    `• Kerakli lidlar: ${num(r.leads)} ta`,
    `• Formula: $${a.revenue} / $${a.check} / ${a.conversion}%`, "",
    "💰 Reklama byudjeti:",
    `• Platforma: ${r.platform.name}`,
    `• Lid narxi: ${cplText} (Benchmark)`,
    `• Minimal byudjet: ${fmt(r.minBudget)}`,
    `• Optimal byudjet: ${fmt(r.optBudget)}`,
  ];
  if (r.penalties.length) {
    lines.push("", "⚠️ Muhim ogohlantirishlar (Samaradorlik jarimasi):");
    r.penalties.forEach((p) => lines.push(`❌ ${p.t} (+${p.p}%)`));
    lines.push("", `Sizda tizim bo'lmagani uchun real byudjet ${r.penaltyPct}% ga qimmatroq tushishi mumkin.`);
  }
  lines.push("", "✅ Tavsiyalar:");
  r.recs.forEach((x, i) => lines.push(`${i + 1}. ${x.t}. ${x.d}`));

  navigator.clipboard.writeText(lines.join("\n")).then(() => toast("Hisobot nusxalandi"), () => toast("Nusxalab bo'lmadi"));
}

function toast(msg) {
  const t = $("toast");
  t.innerHTML = `${icon("check")} ${msg}`;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2000);
}

function restart() {
  Object.keys(answers).forEach((k) => delete answers[k]);
  step = 0;
  setView("start");
}

// ===================== Init =====================
hydrateIcons();
renderChrome();
