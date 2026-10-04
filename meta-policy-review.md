# 🔎 Meta Ads Policy Review — HAJI MEMON SALMAN TRADER

**Reviewer ki nazar se:** Meta Ads reviewer + Business Manager ki automated checks
**Page:** `index.html` (single file) · **Review date:** 4 October 2026

---

## 📊 Verdict Summary

| Risk | Kitne items | Ad chal sakta hai? |
|---|---|---|
| 🔴 **Blocker** (publish se pehle fix karna zaroori) | 5 | ❌ inke bina reject / broken ad |
| 🟠 **Medium** (reject ho sakta hai, ya performance kharab) | 6 | ⚠️ fix karne se risk kam |
| 🟡 **Low / note** | 5 | ✅ ignore kar sakte hain |
| ✅ **Passed** (Meta jo maangta hai woh maujood hai) | 12 | ✅ |

**Bottom line:** Page ki **structure aur content policy-safe hai** — kahin koi profit/income claim nahi,
koi personal-attribute targeting nahi, koi prohibited category nahi. Lekin **5 blockers** hain jo
*technical* hain (placeholder links, missing identity, popup-only policies) — inhe fix karna zaroori hai
warna ad ya to reject hoga ya chal kar bhi leads nahi aayengi.

---

## 🔴 BLOCKERS — inhe publish se pehle theek karein

### B1. Telegram link abhi placeholder hai → 100% reject
**Evidence:**
```
index.html:367  href="https://t.me/YourChannelUsername"
index.html:488, 575, 633, 686   (chaaron popups ke Join buttons)
index.html:836  JSON-LD "sameAs":["https://t.me/YourChannelUsername"]
```
**Kyun Meta ko farq padta hai:** Ad ka destination kaam nahi karta → "Landing page not functional" /
"Broken link" → instant rejection. Ye sabse common reason hai jis se naye advertisers reject hote hain.
**Fix:** `CONFIG.telegramUrl` mein apna asli public channel link lagayein (jaise `https://t.me/HajiMemonsalmanTrader`).
💡 Tip: **public @username** wala link use karein, private `t.me/+invite` link nahi — reviewer aur user dono trust karte hain.

### B2. Contact email asli hona chahiye
**Evidence:** `contact@hajimemonsalmantrader.com` — 6 jagah (JS + 4 popups + JSON-LD)
**Kyun:** Agar yeh email exist nahi karta to (a) reviewer check karne par bounce hota hai,
(b) business manager "contact information" verification fail, (c) 🔴 asli advert me aap ek aisa
domain claim kar rahe hain jo aapka nahi hai — ye "misrepresentation" ban sakta hai.
**Fix:** Gmail/Outlook ya apna domain — **jo bhi ho, working aur monitored hona chahiye**. Jaldi reply karein.

### B3. Policies sirf popup ke andar hain (koi direct URL nahi)
**Kyun Meta ko farq padta hai:** Meta ke Business Manager/Page settings mein **"Privacy Policy URL"** ka
alag field hota hai, aur reviewer ke paas sirf wohi URL hota hai. Automated landing-page crawler bhi
kabhi kabhi `hidden` content (jo popup mein hai) poori tarah crawl nahi karta.
**Fix (2 minute):**
1. Root ke 4 files bhi upload karein: `privacy-policy.html`, `terms-conditions.html`, `disclaimer.html`, `contact.html`
2. `CONFIG.standalonePages: true` kar dein → har popup ke andar **"Open full page ↗"** link aa jayega
3. Business Manager → Page Settings → **Privacy Policy URL** = `https://aapkadomain.com/privacy-policy.html`
   (aur Ads ka Website field bhi)

### B4. robots.txt + sitemap.xml mein `example.com` hai
**Evidence:** `robots.txt:5`, `sitemap.xml:5,10,15,20,25`
**Kyun:** Sitemap galat domain ka → Google/Meta ko page index nahi hota; ad quality signals kamzor.
**Fix:** Dono files mein `example.com` ki jagah apna real domain daalein (ya agar sirf index.html upload
kar rahe hain to yeh dono files upload hi na karein).

### B5. Business/operator identity missing
**Kyun Meta ko farq padta hai:** Free hote hue bhi ye ek **financial-adjacent** page hai. Meta
transparency expect karta hai — kaun chalata hai yeh? India mein IT Rules 2021 ke tehat grievance officer
ka **naam + contact** publicly hona chahiye. Sirf brand name kaafi nahi.
**Fix:** Contact popup mein add karein: asli naam (ya "Haji Memon Salman" jaisa operator naam) + shehar/state
+ (optional) WhatsApp business number. Ad account mein business name bhi wahi rakhein.

---

## 🟠 MEDIUM — reject ho sakta hai / performance par asar

### M1. "✓" verified badge profile par — misleading signal
**Evidence:** `index.html` — `.verified` badge, `title="Verified community"` (profile photo ke neeche)
**Kyun:** Check-mark badge platform verification (optional official/endorsed account) ka symbol hai.
Meta "Misleading or false content / false endorsement" ke tehat ise flag kar sakta hai.
**Fix (aap chunein):**
- **(A)** Badge hata dein — sabse safe
- **(B)** Badge rakhein lekin matlab badal dein → "Admin" label, green tick ke bajaye
- **(C)** Waisa hi chhod dein — risk kam hai lekin zero nahi

### M2. Financial products & services policy
**Kyun:** Meta ka Financial Services rules + kuch desho (India = SEBI/RBI registration, kai GCC countries =
authorisation) mein financial ads restricted hain. Automated classifier "trading / profit / signals" jaise
words se aapki ad ko **"Financial products"** category mein daal sakta hai.
**Aapki protection (already page par maujood):** free, education-only, no signals, no guarantee, disclaimers.
**Isliye avoid karein (ad copy + creative mein):**
`forex` · `binary` · `crypto` · `signals` · `profit` · `earning` · `investment` · `returns` · `lottery` · `loan`
**Aur ye keywords use karein:** `learn` · `education` · `basics` · `awareness` · `community` · `free`
> 📄 `meta-ads-guide.md` mein 4 ready safe ad angles diye hue hain — wohi use karein.

### M3. Cookie/pixel consent (sirf agar UK/EU/EEA/UAE target kar rahe hain)
**Evidence:** JS — `loadPixel()` page load par chalta hai, pehle pixel bina consent ke load hota hai.
**Kyun:** UK GDPR / PECR ke tehat advertising cookies se pehle consent chahiye. India/Pakistan target kar rahe
hain to risk **kam** hai (lekin UAE/Saudi/EU add karte hi risk badh jayega).
**Fix:** Sirf India/Pakistan target karein (default safe), **ya** btaayein — main ek chhota consent banner
(bas 1 line + Accept/Decline) add kar dun, page design same rahega.

### M4. Landing page "thin content" score
**Kyun:** Single-screen page mein visible text kam hai. Meta ki landing-page-quality guideline "original,
substantial content" maangti hai. Aapke favour mein: **chaar poori policies HTML ke andar maujood hain**
(17+17+11+4 sections) aur page saaf, tez aur mobile-first hai.
**Risk:** Low-medium. Agar campaign "Low landing page quality" dikhaye to ✅ theek hai — content hai hi,
phir bhi chahein to policies ko visible FAQ ki tarah neeche add kiya ja sakta hai (uske liye "no scroll" todna padega).

### M5. og:image set nahi hai
**Evidence:** head mein sirf `og:title` / `og:description` / `twitter:card`
**Kyun:** Link-type ads ka **preview card blank** aata hai → CTR kam. Meta policy issue nahi, performance issue.
**Fix:** Image host karne ke baad head mein commented line kholein:
`<meta property="og:image" content="https://i.ibb.co/xxxx/memon-bhai.jpg" />` (aur `og:url` + `canonical`)

### M6. Meta Pixel set nahi hai
**Evidence:** `CONFIG.metaPixelId: ""`
**Kyun:** `Lead` event fire nahi hoga → Meta optimize nahi kar payega, aur Events Manager "no events" dikhayega
(jo reviewer/integration check mein bura lagta hai).
**Fix:** Events Manager se Pixel ID le kar lagayein, phir **Test Events** mein `Lead` verify karein.

---

## 🟡 LOW / notes

1. **🇵🇰 flag badge** — language batata hai lekin ek region ko highlight karta hai; general audience (Gulf, non-Pakistani) ko thoda exclude feel hota hai. Chahein to 🌐 ya 🗣️ kar dein.
2. **"18+" pill** — good practice hai. Bas ad set mein **minimum age 18** set karein (Advantage+ audience mein bhi).
3. **Roman Urdu copy** — Pakistan/India audience ke liye CTR acha karta hai; Meta language targeting ke saath match rakhein warna delivery slow lagegi.
4. **Popup-automation** — page par **koi auto-popup nahi** hai (yeh acha hai). Meta auto-interstitials ko "bad landing page experience" maanta hai. Isko aise hi rakhein — popup sirf click par khule.
5. **JSON-LD** — `Organization` + made-up email; real data aane par update kar dein (B2 ke saath hi fix ho jayega).

---

## ✅ PASSED — yeh sab Meta ke hisaab se theek hai

| # | Check | Evidence |
|---|---|---|
| 1 | Koi profit/income guarantee nahi | Page par sirf *negative* context mein: "No profit guarantee", "no income promises" |
| 2 | No unrealistic outcomes | Koi "double your money", "lakhpati", "daily earning" nahi |
| 3 | No personal-attribute targeting | Copy kisi ki financial/religious status assume nahi karti |
| 4 | Free status honest & clear | "100% Free", "Koi fees nahi", "no hidden charges" |
| 5 | No prohibited category | Koi crypto/forex/betting/casino/loan app promotion nahi |
| 6 | "No payments" safety warning | Popups + Terms mein do baar — impersonation warning bhi |
| 7 | Not-affiliated notice | Footer + Disclaimer + Terms: "Not affiliated with Meta or Telegram" |
| 8 | Age compliance | 18+ top bar, footer, policies — sab jagah |
| 9 | Privacy Policy maujood | 17 sections (data, cookies, Meta lead data, rights, children, ICO) |
| 10 | Terms & Conditions maujood | 17 clauses (no advice, free, liability, governing law) |
| 11 | Contact + grievance maujood | Email, designation, 48-hour acknowledgement |
| 12 | Technically clean landing page | No auto-play, no auto-download, no forced redirect, HTTPS-ready, 1 file, mobile-first |

**Ad copy ke liye bhi check kiya:** `meta-ads-guide.md` ke 4 angles mein koi banned phrase nahi hai
(no "guaranteed", no "sure shot", no "earn daily"). Unhe as-is use kar sakte hain.

---

## 🚦 Publish karne se pehle — 5 step

1. `CONFIG.telegramUrl` = **asli channel link** (B1)
2. `CONFIG.contactEmail` = **asli, working email** (B2)
3. 4 policy files upload + `CONFIG.standalonePages: true` + Business Manager mein Privacy Policy URL (B3)
4. Contact popup mein **asli naam + shehar** (B5)
5. `CONFIG.metaPixelId` + Events Manager mein `Lead` event test (M6)

Afreen 🔥 — in 5 steps ke baad ad **smoothly chalne chahiye**. Uske baad: domain verify, `og:image`,
aur `meta-ads-guide.md` ki ad copy.

---

## ⚠️ Honest disclaimer

Meta ki final approval **reviewer ke faisle** par depend karti hai. Yeh review best-practice aur
published Meta Advertising Standards ke hisaab se hai — **100% approval guarantee koi nahi de sakta**,
aur kuch categories (financial services) mein country-wise extra authorisation lag sakti hai.
Agar ad reject ho jaye: **Appeal** karein aur likhein —
> "This is a free educational community page. We do not sell any financial product or service, do not
> provide investment advice or signals, and make no income claims. Content is educational only, 18+."
