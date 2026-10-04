# HAJI MEMON SALMAN TRADER — Landing Page

Free Telegram education community ke liye ek clean, creamy-white landing page — **Meta Ads ready**.
Sab kuch static HTML/CSS/JS hai: koi build step nahi, koi framework nahi. Bas upload karein aur chal jayega.

---

## 📁 Files

| File | Kaam |
|---|---|
| `index.html` | Main landing page (hero, benefits, roadmap, rules, FAQ, CTA) |
| `privacy-policy.html` | Privacy Policy (Meta approval ke liye must-have) |
| `terms-conditions.html` | Terms & Conditions (18+, no financial advice, no fees) |
| `disclaimer.html` | Disclaimer (risk warning, no affiliation) |
| `contact.html` | Contact + Grievance Officer (Meta ke liye zaroori) |
| `assets/js/config.js` | ⚙️ **Sirf yahi edit karein** |
| `assets/css/styles.css` | Poori design (colors, fonts, layout) |
| `assets/js/main.js` | Animations, cookie consent, pixel tracking |
| `robots.txt`, `sitemap.xml` | SEO |

---

## ⚙️ Setup (2 minute)

1. **Telegram link lagayein** — `assets/js/config.js` kholein aur yeh badlein:

```js
telegramUrl: "https://t.me/AapKaChannelUsername",   // 🔴 zaroori
contactEmail: "aapka-email@gmail.com",               // 🔴 zaroori
```

2. **(Optional) Meta Pixel** — usi file mein:

```js
metaPixelId: "1234567890123456",   // Facebook Events Manager se
gaMeasurementId: "G-XXXXXXXXXX",   // Google Analytics (optional)
```

3. **(Optional) Phone / address** — `supportPhone` aur `businessAddress` bharein,
   warna woh blocks automatically hide rehte hain (khali dikhte nahi).

Bas! Naam, email, Telegram link — sab pages par automatically update ho jate hain.

---

## 🚀 Host kaise karein (free options)

- **Netlify / Vercel / Cloudflare Pages** — poora folder drag-and-drop karein, bas.
- **GitHub Pages** — repo → Settings → Pages → branch select karein.
- **Apna hosting (cPanel)** — sab files `public_html` mein upload karein.

> ⚠️ **Meta Ads ke liye HTTPS zaroori hai.** Netlify/Vercel/Cloudflare par by default HTTPS milta hai.

---

## 🔍 Meta Ads se pehle checklist

- [ ] `config.js` mein asli Telegram link + asli email lagaya
- [ ] Site HTTPS par live hai (URL ad mein daalne se pehle browser mein kholein)
- [ ] Footer ke policy links khul rahe hain (Privacy, Terms, Disclaimer, Contact)
- [ ] Contact page par working email maujood hai
- [ ] Business Manager mein domain verify karein (Meta → Brand Safety → Domains)
- [ ] Events Manager mein Pixel + "Lead" event test karein (Test Events tool)
- [ ] Ad copy mein koi income/profit claim nahi (dekhein `meta-ads-guide.md`)

---

## ✅ Yeh page kyun reject nahi hoga (Meta policies)

| Meta requirement | Is page mein |
|---|---|
| Clear purpose | "Free educational community" — har section mein repeat |
| Real value / quality content | Roadmap, lessons, rules, 10 FAQs |
| Privacy Policy link | Footer + dedicated page |
| Terms & Conditions | Footer + dedicated page |
| Contact information | Contact page + footer email + Grievance Officer |
| Prohibited content na ho | Koi signal/tip selling nahi, koi profit guarantee nahi, no gambling/loan promos |
| Misleading claims na ho | Har jagah "no profit guarantee" likha hai |
| Data transparency | Cookie banner + consent ke baad hi pixel/analytics load |
| Age compliance | 18+ notices (footer + policies) |
| Landing page matches ad | Ad copy ke liye `meta-ads-guide.md` use karein |
| No attributions | "Not affiliated with Meta/Telegram" clearly mentioned |

> **Note:** Meta ki approval final decision Meta ke reviewer ki hoti hai. Yeh page policies ko
> best-practice level par follow karta hai, lekin rejection ki 100% guarantee koi nahi de sakta.

---

## 🎨 Customize

- **Colors** — `assets/css/styles.css` ke top par `:root` variables badal dein
  (`--emerald`, `--gold`, `--violet`, `--cream-100`, etc.)
- **Text/headlines** — `index.html` mein seedha edit karein
- **Fonts** — Already `Outfit` (headings) + `Inter` (body) + `Noto Nastaliq Urdu` (Urdu) use ho rahe hain

---

## 📱 Browser support

Chrome, Safari, Edge, Firefox — desktop aur mobile dono par tested design. Mobile par sticky
"Join Free" button khud activate hota hai.
