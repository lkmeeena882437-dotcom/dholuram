# HAJI MEMON SALMAN TRADER — Landing Page (single file)

Telegram channel ke liye ek **single-screen, mobile-first, Meta-Ads-ready** landing page.
Sab kuch (HTML + CSS + JS + legal policies) **ek hi file** `index.html` mein hai — bas woh
file upload karein aur chal jayega. Koi build step nahi, koi framework nahi.

---

## ⚡ Setup — sirf 4 cheezein (2 minute)

`index.html` kholein → neeche `<script>` ke andar `CONFIG` block mein yeh badlein:

```js
var CONFIG = {
  channelName:     "HAJI MEMON SALMAN TRADER",

  telegramUrl:     "https://t.me/AapKaChannelUsername",   // 🔴 1) apna channel link
  contactEmail:    "aapka-email@gmail.com",               // 🔴 2) apna email

  profileImageUrl: "",                                    // 🖼️ 3) profile image link
  metaPixelId:     "",                                    // 📊 4) Meta Pixel ID (optional)
  updated:         "4 October 2026",
  standalonePages: false                                  // 🔗 6) niche neeche dekhein
};
```

> 📋 **Publish karne se pehle `meta-policy-review.md` zaroor parhein** — us review mein 5 blockers
> aur unke exact fixes diye hue hain (yeh Meta reviewer ki nazar se kiya gaya full audit hai).

### 3) Profile image kaise lagayein
- ImgBB / GitHub raw / koi bhi **direct image link** (`.jpg`, `.png`, `.webp`) yahan paste karein:
  ```js
  profileImageUrl: "https://i.ibb.co/abc123/memon-bhai.jpg"
  ```
- Naam, email, Telegram link **aur** profile photo — sab automatically page par lag jate hain.
- Link khali ya galat ho to **HM monogram** (gradient circle) dikhta hai — page kabhi toota hua nahi lagega.
- 🟢 **Best size: 400×400 px, square, 200 KB se kam** — mobile par sabse tez load hota hai.

### 4) Meta Pixel (optional, ads ke liye recommended)
```js
metaPixelId: "1234567890123456"
```
- Page par "Join Free" button dabane par **`Lead` event** automatically fire hota hai —
  isi par Meta campaign optimize karein.
- Test: Events Manager → **Test Events** → page kholkar button dabayein.

---

## 📄 Legal pages = popup buttons

Index page ke footer mein 4 buttons hain jo **popup (modal) mein** poori policy kholte hain:

| Button | Andar kya hai |
|---|---|
| **Privacy Policy** | 17 sections — data collection, cookies, Meta lead data, aapke rights, children's privacy, grievance officer |
| **Terms & Conditions** | 17 sections — 18+, *no financial advice*, free community, "koi paisa na maangein", liability |
| **Disclaimer** | Risk warning, no profit guarantee, **"Meta/Telegram se affiliated nahi"**, religious note |
| **Contact & Grievance** | Support, privacy requests, fraud reporting, grievance officer |

Popup **keyboard (Esc), backdrop click, aur ✕ button** — teeno se band hota hai.
Keyboard focus bhi popup ke andar hi rehta hai (accessibility). Sab policies **offline** hain —
koi external page nahi khulta, sab kuch ek hi page par milta hai.

📝 **Saari legal text ab British English (UK) mein hai** — "authorised", "organised", "recognise",
"I or her personal data", "one month" response time, UK GDPR terminology (data controller, ICO).
Yeh Meta reviewer ke liye zyada professional aur trustworthy lagta hai.

### `standalonePages` kya hai?
Agar aap `privacy-policy.html` / `terms-conditions.html` / `disclaimer.html` / `contact.html` bhi
upload kar rahe hain, to `standalonePages: true` kar dein — har popup ke footer mein
**"Open full page ↗"** link aa jayega. Meta Business Manager mein "Privacy Policy URL" ke liye
yehi standalone URL chahiye hota hai (popup ka URL share nahi kiya ja sakta).

### Standalone policy pages (optional)
Root mein `privacy-policy.html`, `terms-conditions.html`, `disclaimer.html`, `contact.html` bhi hain —
same content, direct URL ke liye (agar kabhi Meta review ya kisi ad platform ko alag link chahiye ho).
`assets/` folder sirf inhi 4 pages ki styling ke liye hai. **`index.html` inse independent hai.**

---

## 📱 "No scrolling / single screen" kaise kaam karta hai

- Layout `100dvh` flex column hai: **top bar → center stage → footer**, teeno ek screen mein fit.
- Font sizes `clamp()` + `vh` units par hain, isliye chhoti aur badi screen par apne aap adjust hote hain.
- Extra fit rules:
  - height < 700px → chips hide
  - height < 580px → badges hide
  - height < 470px (landscape phone) → subtitle/fine print hide
- Desktop par card ek **rounded glass panel** ban jata hai (mobile par full-screen).
- Agar kisi bahut chhoti screen par thoda scroll aa bhi jaye, to page **gracefully** scroll karta hai —
  content kabhi cut ya overlap nahi hota.

---

## ✅ Meta Ads checklist

- [ ] `telegramUrl` + `contactEmail` lagaye
- [ ] Profile image link lagaya (400×400)
- [ ] Site **HTTPS** par live hai
- [ ] Footer ke 4 popup buttons kholke check kiye — sab chal rahe hain
- [ ] Business Manager mein **domain verify** kiya
- [ ] Pixel + `Lead` event test kiya
- [ ] `og:image` lagaya (head mein commented line hai) — link ad ka preview card ke liye
- [ ] Ad copy `meta-ads-guide.md` se li (koi income/profit claim nahi)

### Yeh page kyun policy-safe hai
| Meta requirement | Is page mein |
|---|---|
| Clear purpose | "Free educational community" — har jagah |
| Value / real content | Learning roadmap, benefits, 4 full policies |
| Privacy Policy | Popup + standalone page |
| Terms & Conditions | Popup + standalone page |
| Contact info | Popup (email + grievance officer) |
| No prohibited content | No signals, no tips, no profit claims, no gambling/loan promos |
| No misleading claims | "No profit guarantee" clearly likha hai |
| Age compliance | "18+" top bar, footer aur saari policies mein |
| Attribution | "Not affiliated with Meta or Telegram" footer + policies mein |
| Landing page = ad | Ad copy guide included |

> Meta ki final approval reviewer ke haath mein hai — yeh page best practice follow karta hai,
> lekin rejection ki 100% guarantee koi nahi de sakta.

---

## 🎨 Customize

- **Colors** — `index.html` ke `<style>` mein sabse upar `:root` variables
  (`--em`, `--gold`, `--violet`, `--teal`, `--cream`)
- **Naam / hero text** — seedha HTML mein edit karein (ya `CONFIG.channelName`)
- **Fonts** — Outfit (headings) + Inter (body), Google Fonts se
- **Hosting** — Netlify / Vercel / Cloudflare Pages par file drag-and-drop, ya cPanel mein `public_html`

---

## 📁 Files

```
index.html              ← 🔴 SIRF YEH FILE CHAHIYE (complete landing page + policies)
meta-ads-guide.md       ← ad copy angles + kya nahi likhna + campaign setup
meta-policy-review.md   ← 🔎 Meta reviewer ki nazar se full audit (5 blockers + fixes)
README.md               ← yeh file

privacy-policy.html     ┐
terms-conditions.html   │ optional: same policies as standalone URLs
disclaimer.html         │
contact.html            ┘
assets/                 ← sirf in 4 standalone pages ki styling
robots.txt, sitemap.xml ← SEO
```
