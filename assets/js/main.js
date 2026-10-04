/* =========================================================
   HAJI MEMON SALMAN TRADER — site behaviour
   (config.js ke baad load hota hai)
   ========================================================= */
(function () {
  "use strict";

  var CFG = Object.assign(
    {
      channelName: "HAJI MEMON SALMAN TRADER",
      telegramUrl: "https://t.me/YourChannelUsername",
      contactEmail: "contact@hajimemonsalmantrader.com",
      supportPhone: "",
      businessAddress: "",
      metaPixelId: "",
      gaMeasurementId: "",
      policyUpdated: ""
    },
    window.HMST_CONFIG || {}
  );

  var PLACEHOLDER = /YourChannelUsername/i;

  /* ---------- 1. Config values inject karein ---------- */
  function applyConfig() {
    // text
    document.querySelectorAll('[data-config="channelName"]').forEach(function (el) {
      el.textContent = CFG.channelName;
    });
    document.querySelectorAll('[data-config="contactEmail"]').forEach(function (el) {
      el.textContent = CFG.contactEmail;
    });
    document.querySelectorAll('[data-config="policyUpdated"]').forEach(function (el) {
      el.textContent = CFG.policyUpdated;
    });

    // hrefs
    document.querySelectorAll('[data-config-href="telegramUrl"]').forEach(function (el) {
      el.setAttribute("href", CFG.telegramUrl);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener nofollow");
    });
    document.querySelectorAll('[data-config-href="mailtoUrl"]').forEach(function (el) {
      el.setAttribute("href", "mailto:" + CFG.contactEmail);
    });

    // optional blocks: phone / address / whatsapp
    document.querySelectorAll('[data-optional="supportPhone"]').forEach(function (el) {
      if (CFG.supportPhone) {
        el.querySelector("[data-config]").textContent = CFG.supportPhone;
        var link = el.querySelector("[data-config-href]");
        if (link) link.setAttribute("href", "tel:" + CFG.supportPhone.replace(/[^+\d]/g, ""));
        el.hidden = false;
      } else {
        el.hidden = true;
      }
    });
    document.querySelectorAll('[data-optional="businessAddress"]').forEach(function (el) {
      if (CFG.businessAddress) {
        el.querySelector("[data-config]").textContent = CFG.businessAddress;
        el.hidden = false;
      } else {
        el.hidden = true;
      }
    });

    // footer year
    var y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();

    if (PLACEHOLDER.test(CFG.telegramUrl)) {
      console.warn(
        "%c[Setup needed]%c assets/js/config.js mein apna Telegram link lagayein (telegramUrl).",
        "background:#E5484D;color:#fff;padding:2px 6px;border-radius:4px",
        "color:#12211B"
      );
    }
  }

  /* ---------- 2. Analytics: consent ke baad hi load ---------- */
  var consent = null;
  try { consent = localStorage.getItem("hmst_consent"); } catch (e) {}

  function loadMetaPixel() {
    if (!CFG.metaPixelId || window.fbq) return;
    /* eslint-disable */
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
      if (!f._fbq) f._fbq = n;
      n.push = n; n.loaded = !0; n.version = "2.0"; n.queue = [];
      t = b.createElement(e); t.async = !0; t.src = v;
      s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    window.fbq("init", CFG.metaPixelId);
    window.fbq("track", "PageView");
  }

  function loadGA() {
    if (!CFG.gaMeasurementId || window.__gaLoaded) return;
    window.__gaLoaded = true;
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + CFG.gaMeasurementId;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", CFG.gaMeasurementId, { anonymize_ip: true });
  }

  function loadTrackers() { loadMetaPixel(); loadGA(); }

  function setupConsent() {
    var bar = document.getElementById("cookieBar");
    if (!bar) { if (consent === "granted") loadTrackers(); return; }

    if (!consent) bar.hidden = false;
    if (consent === "granted") loadTrackers();

    var accept = document.getElementById("cookieAccept");
    var decline = document.getElementById("cookieDecline");
    if (accept) accept.addEventListener("click", function () {
      try { localStorage.setItem("hmst_consent", "granted"); } catch (e) {}
      bar.hidden = true; loadTrackers();
    });
    if (decline) decline.addEventListener("click", function () {
      try { localStorage.setItem("hmst_consent", "denied"); } catch (e) {}
      bar.hidden = true;
    });
  }

  /* ---------- 3. Telegram CTA click = "Lead" event ---------- */
  function setupLeadTracking() {
    document.addEventListener("click", function (ev) {
      var link = ev.target.closest ? ev.target.closest('[data-config-href="telegramUrl"]') : null;
      if (!link) return;
      if (typeof window.fbq === "function") window.fbq("track", "Lead", { content_name: "Telegram Join" });
      if (typeof window.gtag === "function") window.gtag("event", "telegram_click", { event_category: "lead" });
    });
  }

  /* ---------- 4. Scroll reveal ---------- */
  function setupReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    items.forEach(function (el, i) {
      el.style.transitionDelay = Math.min(i % 6, 5) * 60 + "ms";
      io.observe(el);
    });
  }

  /* ---------- 5. Sticky CTA + header state ---------- */
  function setupScrollUI() {
    var sticky = document.getElementById("stickyCta");
    var header = document.getElementById("siteHeader");
    var lastY = window.scrollY;
    function onScroll() {
      var y = window.scrollY;
      if (header) header.classList.toggle("scrolled", y > 12);
      if (sticky) {
        var show = y > 520;
        sticky.classList.toggle("show", show);
        sticky.setAttribute("aria-hidden", show ? "false" : "true");
      }
      lastY = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- 6. FAQ: ek waqt mein ek hi khula ---------- */
  function setupFaq() {
    var all = document.querySelectorAll("details.faq");
    all.forEach(function (d) {
      d.addEventListener("toggle", function () {
        if (!d.open) return;
        all.forEach(function (o) { if (o !== d) o.open = false; });
      });
    });
  }

  /* ---------- 7. Smooth anchor scroll (header offset) ---------- */
  function setupAnchors() {
    document.addEventListener("click", function (ev) {
      var a = ev.target.closest ? ev.target.closest('a[href^="#"]') : null;
      if (!a) return;
      var id = a.getAttribute("href");
      if (!id || id === "#") return;
      var t = document.querySelector(id);
      if (!t) return;
      ev.preventDefault();
      var top = t.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top: top, behavior: "smooth" });
      history.replaceState(null, "", id);
    });
  }

  /* ---------- init ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    applyConfig();
    setupConsent();
    setupLeadTracking();
    setupReveal();
    setupScrollUI();
    setupFaq();
    setupAnchors();
  });
})();
