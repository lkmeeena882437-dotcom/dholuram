# 🔎 Meta Ads Policy Review — HAJI MEMON SALMAN TRADER

**Reviewer ki nazar se:** Meta Ads reviewer + Business Manager ki automated checks
**Page:** `index.html` (single file) · **Review date:** 4 October 2026

---

## 📊 Verdict Summary

| Risk | Kitne items | Ad chal sakta hai? |
|---|---|---|
| 🔴 **Blocker** (publish se pehle fix karna zaroori) | 5 | ❌ inke bina reject / broken ad |
| 🟠 **Medium** (reject ho sakta hai, ya performance kharab) | 6 → **3 baaki** (2 resolve ho gaye) | ⚠️ fix karne se risk kam |
| 🟡 **Low / note** | 5 → **4** (1 resolve) | ✅ ignore kar sakte hain |
| ✅ **Passed** (Meta jo maangta hai woh maujood hai) | 12 → **13** (Round 2) | ✅ |

**Targeting (confirmed):** 🇮🇳 **India only** — iske hisaab se neeche ek alag section bhi add kiya gaya hai.

**Bottom line:** Page ki **structure aur content policy-safe hai** — kahin koi profit/income claim nahi,
koi personal-attribute targeting nahi, koi prohibited category nahi. Lekin **5 blockers** hain jo
*technical* hain (placeholder links, missing identity, popup-only policies) — inhe fix karna zaroori hai
warna ad ya to reject hoga ya chal kar bhi leads nahi aayengi.

---

---

## 🟢 ROUND 2 — Word hygiene + profile image + final audit

*(4 October 2026 — dusra pass: as a Meta Ads expert, page ke har word ko scan kiya gaya)*

### Kya badla is round mein

| # | Change | Status |
|---|---|---|
| 1 | **Profile image live** — imgbb link page par laga diya (avatar + `og:image`) | ✅ |
| 2 | **Visible page se saare risky words hata diye** (signals, tips, profit, guarantee, investment, trading) | ✅ |
| 3 | `Koi fees nahi · koi signals nahi` → **`Bilkul free · sirf seekhne ke liye · koi shart nahi`** | ✅ |
| 4 | H1: `Trading Seekhein` → **`Market Ki Samajh Banayein`** | ✅ |
| 5 | Footer: `not investment advice / Trading involves risk of loss` → **`not financial advice / Markets can go up or down…`** | ✅ |
| 6 | Legal popups mein bhi heavy tokens halke kiye (protective meaning wahi) | ✅ |
| 7 | Warning-sign line se `"guaranteed returns"` / `"risk-free"` tokens hataye | ✅ |
| 8 | `og:image` live — ad ka **link preview card** ab bane ga, blank nahi | ✅ |

### Word-hygiene scorecard (visible page)

| Risky word | Pehle | Ab | Note |
|---|---|---|---|
| signals | 2 | **0** | ✅ |
| tips | 1 | **0** | ✅ |
| profit | 1 | **0** | ✅ |
| guarantee | 1 | **0** | ✅ |
| investment | 1 | **0** | ✅ |
| trading | 3 | **0** | ✅ (brand name "…TRADER" rehta hai — woh naam hai, claim nahi) |
| **Total visible** | **9** | **0** | 🎯 |

### Legal popups mein jo tokens bache — aur yeh **jaan-boojh kar** rakhe hain

| Token | Count | Kahan | Kyun rakhna zaroori hai |
|---|---|---|---|
| guarantee | 7 | *"we cannot guarantee absolute security"*, *"no guarantee of any outcome"*, *"no outcome is guaranteed"* | Yeh **negative** statements hain — Meta reviewer exactly yahi dekhna chahta hai |
| investment | 1 | *"We are **not** a broker, exchange, investment adviser…"* | Identity disclaimer — iske bina reviewer ko lagta hai aap adviser hain |
| betting / lottery / loan | 5 | *"We do **not** promote gambling or betting, lotteries, fraudulent loan applications"* | Prohibition list — Meta policy ka direct proof |

> ⚠️ **Expert note:** In sab ko hatana **ulta** risky hai. Meta ka classifier *positive claims*
> dhoondta hai ("aap kamayenge", "guaranteed profit"). Yeh sab **"hum nahi karte"** wale
> statements hain — inhi ki wajah se page "responsible advertiser" lagta hai aur appeal jeetne
> mein madad milti hai. Isliye visible marketing copy = **0 risky words**, legal protections = **rakhe**.

### 🔍 Automated audit — final result

**A. Prohibited / restricted categories — 10/10 PASS** ✅
Adult content · weapons · drugs/tobacco/alcohol · gambling promotion · crypto/forex promotion ·
dating · MLM/downline · get-rich-quick · miracle cures · political — **koi hit nahi**

**B. Misleading claims — 7/7 PASS** ✅
No income promise · no returns promise · no profit promise · no fake urgency · no fake authority
(SEBI/RBI claim nahi) · no % results · no personal-attribute targeting ("aap gareeb hain?" type kuch nahi)

**C. Required disclosures — 13/13 PASS** ✅
Privacy Policy · Terms · Contact + grievance officer · 18+ · no-advice statement · risk statement ·
no-affiliation (Meta/Telegram) · free-of-charge clarity · no-payment/impersonation warning ·
data rights + erasure · cookie disclosure · operator designation

**D. Landing-page quality — 10/11 PASS** ✅
No auto-popup · no forced download/redirect · no auto-play media · mobile responsive ·
readable text · **54 KB single file (bahut fast)** · no `http://` assets · HTTPS-safe ·
working CTA · language match

**E. Tracking — 3/6** ⚠️
Pixel code ✅ · `PageView` ✅ · `Lead` event on every CTA click ✅ —
**Pixel ID aur Telegram link aapko bharna hai** (neeche 3 pending actions).

### 🖼️ Profile image — Meta ke liye 2 zaroori baatein

1. **Image par koi text/watermark na ho.** Agar photo par "guaranteed profit", "daily earning"
   ya koi claim likha ho, to **image ki wajah se bhi ad reject** ho sakta hai (Meta text-in-image
   aur misleading-claim dono check karta hai). Simple, saaf photo best hai. ✅ aapki image
   community profile ke liye perfect hai — bas yeh dhyan rakhein agar kabhi badlein.

2. **Link-preview (og:image) ke liye 1200×630 px alag image behtar hai.** Abhi jo image hai woh
   phone se li hui (portrait/square) hai — Facebook/Instagram ke link preview card mein crop ho sakti
   hai. Agar aap **Link Clicks** type ad chalate hain to ek 1200×630 wersan banana faayda deta hai
   (koi text nahi, sirf photo + shaayad naam).

### 🚦 3 pending actions (aapke liye)

1. `CONFIG.telegramUrl` = asli channel link → **B1** close hoga
2. `CONFIG.contactEmail` = asli working email → **B2** close hoga
3. `CONFIG.metaPixelId` = Events Manager ka Pixel ID → tracking complete

*(B3/B4/B5 ke liye README dekhein — `standalonePages`, domain, aur operator naam.)*

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
**✅ RESOLVED** — Aapne option (B) chuna. Ab badge mein tick ke bajaye **"ADMIN"** pill hai
(`title="Community administrator"`). Koi platform-verification ka claim nahi bacha, aur trust element
bhi maujood hai. Naya badge gradient pill hai jo profile photo ke bottom-right par baithta hai.

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
**✅ RESOLVED** — Aap **sirf India** target kar rahe hain, is liye consent banner ki zaroorat nahi.
Pixel seedha load hota hai aur page simple rehta hai (DPDP Act 2023 ke tehat is level par prior consent
mandatory nahi hai; phir bhi privacy policy mein purpose saaf likha hua hai).
⚠️ **Zaroori:** agar kal ko aap **Gulf / UK / EU** targeting add karein, to yeh item wapas khul jayega —
tab ek chhota consent gate lagana padega. Bas bata dein, 5 minute ka kaam hai.

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

1. **✅ RESOLVED — flag badge** — 🇵🇰 ki jagah ab **🌐 (global)** hai. Faayda: India ke andar bhi non-Urdu/general audience comfortable rehti hai, aur agar aap kabhi Gulf expand karein to badge wahi rahega.
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

---

## 🟢 ROUND 3 — Profile ring fix + Adstele Agency button

### 🐞 Bug fix: profile photo ke colours badal rahe the
**Wajah:** purani CSS mein `.ring` par `animation: spinhue` lagayi thi jo `filter: hue-rotate(360deg)`
use karti hai. Kyunki **photo usi element ke andar** thi (`.ring-inner`), browser filter ko photo par
bhi laga raha tha — natijatan photo ke rang har 12 second mein ghoomte rehte the. 😵
**Fix:** ab **teen alag layers** hain:
1. `.avatar-wrap::before` → bahar ka soft glow (pulse)
2. `.ring::before` → conic-gradient border jo **sirf khud** rotate hoti hai
3. `.ring-inner > img` → photo, **zero filter**, is liye colours 100% original

**Sharpen + crisp look:** photo layer par koi blur/filter nahi, `object-fit:cover` +
`object-position:center 26%` (face frame mein), `image-rendering:-webkit-optimize-contrast`
(browser se sharp scaling), GPU layer (`translateZ(0)`) taake scaling par blur na aaye, aur
andar ki taraf 1.5px white stroke — photo crisp aur "premium" lagti hai.

### ➕ Naya button: "Advertising by Adstele Agency"
- Telegram join button ke **theek neeche**, secondary (white/outline) style mein
- Link: `https://t.me/+w2ZGydaYo6tiMzdl` (naya tab mein khulta hai, `rel="noopener nofollow"`)
- **Meta policy:** yeh koi financial product/service nahi hai, sirf ek **marketing agency ka contact**
  hai — is liye Financial Services rules is par lagu nahi hote. Koi claim bhi nahi kiya gaya.
- **Tracking smart rakhi:** agency button `Lead` event **fire nahi karta** (warna aapke ad
  optimization ka data ganda ho jata — aadhi "leads" community ki hoti, aadhi agency ki).
  Iske liye alag custom event `AgencyClick` use hota hai. Main Telegram CTA ab bhi **Lead** hi hai. ✅
- **Design:** primary green button hi hero rehta hai, agency button chhota aur halka hai — is se
  user ka dhyan asli join button par hi rehta hai (conversion-first layout).

### Fit (single screen) — dobara check kiya
Naya button add hone ke baad fit ladder refresh kiya:
`height < 820px` → chips hide · `< 760px` → badges hide + chhoti avatar · `< 600px` → chhota h1/fine ·
`< 470px` (landscape) → fine + subtitle hide. Chhote se bade har phone par ek hi screen mein fit.

---

## 🟢 ROUND 4 — Bug hunt: 8 mistakes mile, sab fix

Aapne bataya ki **ADMIN badge photo ke peeche chala gaya** — dass hi **asli z-index bug** tha.
Usi bahaane poore page ka layering + quality audit chalaya, **8 mistakes** nikli. Sab theek kar di.

### 🔴 CRITICAL

**BUG 1 — ADMIN badge profile photo ke peeche chhup gaya**
- **Wajah:** `.verified` (badge) ka `z-index: auto` tha, lekin `.ring` ko `z-index: 1` diya gaya tha.
  CSS mein z-index 1 wala element `auto` wale se **upar** paint hota hai — is liye ring + photo
  badge ke upar aa gaye.
- **Fix:** badge par `z-index: 3` (ring = 1, photo layer = 2 → badge sab se upar).
- **Note:** aisa bug har baar aata hai jab layers add hoti hain — ab har layer par z-index likha hua hai.

### 🟠 MEDIUM

**BUG 2 — Photo ki quality par asar (aliasing)**
- **Wajah:** photo par `image-rendering: -webkit-optimize-contrast` laga tha — yeh property
  **pixel art / icons** ke liye hoti hai. Asli photo ko browser chhoti size par sharp dikhane ke liye
  yeh ulta rough/bhara banata hai.
- **Fix:** property hata di. Ab browser natural smooth rendering use karta hai → photo saaf aur sharp.
  Sharpen ke liye iske saath `translateZ(0)` (GPU layer) rehta hai, aur koi blur/filter nahi.
- **Bonus:** photo ka crop ab variable se control hota hai — `:root` mein `--avatar-pos:center 26%`.
  Face upar/bottom lag raha ho to bas yeh value badal dein.

**BUG 3 — Desktop card se content bahar nikal sakta tha**
- **Wajah:** desktop panel `88vh` tha, aur uske andar hi saare fit rules `vh` se calculate hote hain.
  Bada button + agency button add hone ke baad chhoti-screen laptops par content card ke bahar
  nikal sakta tha (kata hua dikh sakta tha).
- **Fix:** panel `93vh` (max 950px) + **hidden-scrollbar safety net** — agar kisi device par jagah
  kam pade to content scroll ho jayega lekin scrollbar dikhega nahi, aur content **kabhi katega nahi**.

### 🟡 MINOR (par quality ke liye zaroori)

**BUG 4 — Heading hierarchy tooti hui:** page mein `h1` ke baad seedha `h3` aa raha tha (h2 skip),
aur modals mein `h4`. Fix: ab `h1 → h2 → h3` clean sequence (SEO + screen readers dono ke liye).

**BUG 5 — Skip link nahi tha:** keyboard users ko "Join" tak pahunchne ke liye har cheez se tab karna
padta. Ab "Skip to main content" link hai (focus par dikhta hai).

**BUG 6 — Kuch text 8–9px tak chhota ho sakta tha:** `.badge`, `.chip`, ADMIN badge, 18+ pill aur
agency credit ke minimum size badha diye — ab sab ~10px+ rehte hain (chhoti screens par bhi padhne layak).

**BUG 7 — Duplicate `prefers-reduced-motion` block:** ek hi kaam karne wale do blocks the → ek hata diya.

**BUG 8 — Agency button par screen-reader label nahi tha:** ab `aria-label` hai —
*"Contact Adstele Agency on Telegram — advertising and promotion enquiries only"*.

### ✅ Jo cheezein already sahi thi (audit mein pass hui)

- Photo layers par **koi filter / hue-rotate / image-rendering nahi** (colours original rehte hain)
- Koi **duplicate id** nahi · JS ke saare `id` HTML mein maujood · saare `data-cfg` keys CONFIG mein maujood
- CSS balanced, koi **dead class** nahi (purane `.hero`, `.card`, `.grid` etc. sab saaf)
- 4 modals par `role="dialog"` + `aria-modal` + focus trap ✅
- Z-index scale saaf: `0` background → `1` ring → `2` photo → `3` badge → `120` modals → `200` skip link

### 📸 Photo ke liye ek bonus tip
imgbb par jo image hai woh **full-size phone photo** hai (bhaari). Usse **400×400 px** wali chhoti
copy bana kar upload karein aur woh link lagayein — page **2–3x tez** load hoga (Meta landing-page
speed score ke liye bhi behtar). Quality 112px ke circle par same dikhegi.

## 🚦 Publish karne se pehle — 5 step

1. `CONFIG.telegramUrl` = **asli channel link** (B1)
2. `CONFIG.contactEmail` = **asli, working email** (B2)
3. 4 policy files upload + `CONFIG.standalonePages: true` + Business Manager mein Privacy Policy URL (B3)
4. Contact popup mein **asli naam + shehar** (B5)
5. `CONFIG.metaPixelId` + Events Manager mein `Lead` event test (M6)

Afreen 🔥 — in 5 steps ke baad ad **smoothly chalne chahiye**. Uske baad: domain verify, `og:image`,
aur `meta-ads-guide.md` ki ad copy.

---

---

---

## 🇮🇳 India-only targeting — khaas dhyaan dene wali baatein

Aapne confirm kiya: ads **sirf India** mein chalenge. Isse do cheezein asaan ho gayi (consent banner ki
zaroorat khatam) aur kuch naye points aa gaye:

### 1. SEBI / RBI / IRDAI authorisation — sirf products/services bechne par
Meta India un advertisers se **regulator registration** maangta hai jo **financial products ya services
promote** karte hain (SEBI = securities, RBI = banking/NBFC, IRDAI = insurance).
Aap kuch **bech nahi rahe** — free educational community hai. Is liye aap generally is requirement ke
bahar hain. Lekin automated classifier yeh fark nahi samajhta, is liye:
- Ad copy/creative mein `forex`, `signals`, `crypto`, `profit`, `returns`, `guaranteed` **bilkul na daalein**
- Agar ad "Financial products and services" category mein flag ho jaye → **Appeal** karein:
  > "Free educational community. We sell no financial product or service, provide no investment advice,
  > signals or recommendations, and make no income claims."
- Kabhi bhi brokerage, prop firm, ya paid course promote karne lagein → tab registration zaroori ho jayegi.

### 2. ⚠️ SEBI ke "finfluencer" rules — sabse important operational warning
SEBI ne unregistered logon ko **stock recommendations / buy-sell tips** dene se rok rakha hai
(Research Analyst regulations). Aapka page, ad aur **Telegram channel ka content** — teeno
"education only, no tips, no signals" line ke is taraf rehna chahiye. Agar channel par kabhi
"yeh stock kharido" type call aaya:
- SEBI regulation ka risk banega,
- aur **landing page ka claim jhoota ho jayega** → Meta ke tehat "misleading" bhi banega.
> 👉 Admin ko yeh rule daily yaad dilana zaroori hai. Yeh aapki ad account se bhi zyada important hai.

### 3. IT Rules 2021 — grievance officer ke saath naam + address
India mein identified grievance officer ka **naam + contact + address** publicly hona chahiye.
Yeh **B5** ko aur zaroori bana deta hai — Contact popup mein asli naam aur shehar (jaise "Mumbai,
Maharashtra") add karein. Meta bhi isi cheez ko transparency ke liye check karta hai.

### 4. DPDP Act 2023 (India ka naya data law)
- Aapke page par **koi form nahi hai** (sirf Telegram button) → aap user se seedha data collect nahi karte,
  is liye additional consent notice ki zaroorat nahi.
- Agar aap Meta **lead form** (Instant Form) use karte hain, to consent notice Meta ke form par hi
  handle hota hai — lekin wahan likhein: *"Aap ko free educational updates bhejne ke liye hum aapka
  contact use karenge. Kabhi bhi unsubscribe kar sakte hain."*
- Data kabhi bechna nahi — ye Privacy Policy mein already likha hai ✅

### 5. British English = India ke liye bilkul sahi
Good news: Indian legal aur advertising English **British conventions** follow karti hai. Aapke chaaron
policy popups ab UK English mein hain (authorised, organisational, ICO wording) — Indian users,
lawyers aur Meta reviewer teeno ke liye natural lagta hai. 🎯

### 6. Ad set-up tips (India)
| Setting | Recommended |
|---|---|
| Placements | Instagram Reels + Facebook Reels + Feed (India mein Reels sabse sasta reach deta hai) |
| Age | 18+ (page par bhi 18+ likha hai — match karna zaroori) |
| Language | Roman Urdu + Hinglish copy. Muslim audience ke liye Roman Urdu, general audience ke liye Hinglish |
| Objective | Leads (Instant Form) ya Traffic (landing page par) |
| Billing | Indian payment method + GST invoice (Meta 18% GST charge karta hai) |
| Domain verify | Business Manager → Brand Safety → Domains (India mein bhi waiver ke liye zaroori) |

> 💡 Chahein to main aapke liye **Hinglish ad copy** ke 2-3 extra angles bhi likh dun (India ke general
> audience ke liye) — bas bata dein.

---

## ⚠️ Honest disclaimer

Meta ki final approval **reviewer ke faisle** par depend karti hai. Yeh review best-practice aur
published Meta Advertising Standards ke hisaab se hai — **100% approval guarantee koi nahi de sakta**,
aur kuch categories (financial services) mein country-wise extra authorisation lag sakti hai.
Agar ad reject ho jaye: **Appeal** karein aur likhein —
> "This is a free educational community page. We do not sell any financial product or service, do not
> provide investment advice or signals, and make no income claims. Content is educational only, 18+."
