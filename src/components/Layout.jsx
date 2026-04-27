import React from "react";

const navLinks = ["Buy Account", "Boost", "How it works", "Pricing"];

const testimonials = [
  {
    name: "Jessica Doe",
    handle: "@jessica.sold",
    text: "Sold my Instagram account in 3 days. The escrow service made me feel completely secure throughout.",
    platform: "Instagram",
    color: "#E1306C",
  },
  {
    name: "Mark Smith",
    handle: "@mark.boosts",
    text: "Bought followers for my new brand — engagement increased by 200% in two weeks. Insane ROI.",
    platform: "TikTok",
    color: "#69C9D0",
  },
  {
    name: "Anna Lee",
    handle: "@anna.creates",
    text: "So clean and modern. Offloaded an old TikTok account and got paid in crypto within hours.",
    platform: "YouTube",
    color: "#FF0000",
  },
];

const faqs = [
  { q: "Is it safe to sell my account?", a: "Absolutely. We use bank-grade escrow protection. Your account details are hidden until payment is secured, and funds are held safely until both parties confirm." },
  { q: "How long does boosting take?", a: "Most campaigns activate within 24 hours. To ensure organic growth and comply with platform algorithms, delivery is gradual over 7–14 days." },
  { q: "Can I boost multiple platforms at once?", a: "Yes! We support Instagram, TikTok, YouTube, Twitter, and Facebook. You can manage multiple campaigns from a single dashboard." },
  { q: "What payment methods do you accept?", a: "We accept all major Credit Cards, Apple Pay, Google Pay, PayPal, and major Cryptocurrencies (BTC, ETH, USDC)." },
];

export default function Layout({ children, openFaq, toggleFaq }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        :root {
          --gold: #C9A84C;
          --gold-light: #E8C96D;
          --bg: #080A0E;
          --surface: #0F1117;
          --border: rgba(255,255,255,0.07);
        }

        *, *::before, *::after { box-sizing: border-box; }

        .layout-root {
          background: var(--bg);
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          min-height: 100vh;
        }

        /* ── NAV ── */
        .nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 50;
          background: rgba(8,10,14,0.8);
          backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 18px clamp(20px,4vw,48px);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          cursor: pointer;
        }
        .logo-icon {
          width: 34px; height: 34px;
          border-radius: 10px;
          background: linear-gradient(135deg, #C9A84C, #8B6914);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 16px rgba(201,168,76,0.3);
        }
        .logo-text {
          font-family: 'DM Serif Display', serif;
          font-size: 22px;
          color: #fff;
          letter-spacing: -0.01em;
        }
        .nav-links {
          display: flex;
          gap: 36px;
          list-style: none;
          padding: 0; margin: 0;
        }
        @media(max-width:768px){ .nav-links { display: none; } }
        .nav-link {
          font-size: 13px;
          font-weight: 500;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: color 0.2s;
        }
        .nav-link:hover { color: var(--gold-light); }
        .nav-actions { display: flex; align-items: center; gap: 14px; }
        .nav-login {
          font-size: 13px;
          font-weight: 500;
          color: rgba(255,255,255,0.45);
          background: none;
          border: none;
          cursor: pointer;
          transition: color 0.2s;
          font-family: 'DM Sans', sans-serif;
        }
        .nav-login:hover { color: #fff; }
        .nav-cta {
          background: linear-gradient(135deg, #C9A84C, #8B6914);
          color: #0a0800;
          border: none;
          padding: 10px 22px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          letter-spacing: 0.03em;
          box-shadow: 0 4px 16px rgba(201,168,76,0.25);
          transition: all 0.25s;
        }
        .nav-cta:hover { box-shadow: 0 8px 24px rgba(201,168,76,0.4); transform: translateY(-1px); }

        /* ── TESTIMONIALS ── */
        .testimonials-section {
          padding: clamp(80px,10vw,130px) clamp(20px,4vw,48px);
          background: #080A0E;
          position: relative;
          overflow: hidden;
        }
        .testimonials-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent);
        }
        .t-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 16px;
          margin-top: 56px;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }
        @media(max-width:768px){ .t-grid{ grid-template-columns: 1fr; } }
        .t-card {
          background: #0F1117;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 24px;
          padding: 36px;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s, border-color 0.3s;
        }
        .t-card:hover { transform: translateY(-4px); border-color: rgba(201,168,76,0.15); }
        .t-quote {
          font-family: 'DM Serif Display', serif;
          font-size: 60px;
          color: rgba(201,168,76,0.15);
          line-height: 0.8;
          margin-bottom: 20px;
          font-style: italic;
        }
        .t-stars { display: flex; gap: 4px; margin-bottom: 18px; }
        .t-star { color: var(--gold); font-size: 13px; }
        .t-text {
          font-size: 14px;
          line-height: 1.8;
          color: rgba(255,255,255,0.55);
          margin-bottom: 28px;
        }
        .t-avatar-row { display: flex; align-items: center; gap: 12px; }
        .t-avatar {
          width: 44px; height: 44px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-weight: 700; font-size: 16px; color: #fff;
          flex-shrink: 0;
        }
        .t-name { font-size: 14px; font-weight: 600; color: #fff; margin-bottom: 2px; }
        .t-handle { font-size: 12px; color: rgba(255,255,255,0.3); }
        .t-platform-tag {
          position: absolute;
          top: 20px; right: 20px;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 100px;
          border: 1px solid;
          opacity: 0.6;
        }

        /* ── FAQ ── */
        .faq-section {
          padding: clamp(80px,10vw,130px) clamp(20px,4vw,48px);
          background: var(--surface);
          position: relative;
        }
        .faq-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent);
        }
        .faq-inner { max-width: 680px; margin: 0 auto; }
        .faq-item {
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 10px;
          transition: border-color 0.25s;
        }
        .faq-item:hover { border-color: rgba(201,168,76,0.2); }
        .faq-btn {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 22px 28px;
          background: #0F1117;
          border: none;
          cursor: pointer;
          text-align: left;
          font-family: 'DM Sans', sans-serif;
          transition: background 0.2s;
        }
        .faq-btn:hover { background: rgba(201,168,76,0.04); }
        .faq-q { font-size: 15px; font-weight: 600; color: #fff; }
        .faq-icon {
          width: 32px; height: 32px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.4);
          flex-shrink: 0;
          transition: all 0.3s;
        }
        .faq-icon-open {
          border-color: rgba(201,168,76,0.4);
          color: var(--gold);
          background: rgba(201,168,76,0.08);
          transform: rotate(180deg);
        }
        .faq-body {
          overflow: hidden;
          transition: max-height 0.4s ease;
          background: rgba(201,168,76,0.02);
        }
        .faq-a {
          padding: 0 28px 22px;
          font-size: 14px;
          line-height: 1.8;
          color: rgba(255,255,255,0.4);
        }

        /* ── CTA BANNER ── */
        .cta-section {
          padding: clamp(60px,8vw,100px) clamp(20px,4vw,48px);
          background: #080A0E;
        }
        .cta-inner {
          max-width: 980px;
          margin: 0 auto;
          background: #0F1117;
          border: 1px solid rgba(201,168,76,0.15);
          border-radius: 32px;
          padding: clamp(48px, 7vw, 88px);
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .cta-glow1 {
          position: absolute;
          top: -80px; right: -80px;
          width: 320px; height: 320px;
          border-radius: 50%;
          background: rgba(201,168,76,0.08);
          filter: blur(80px);
          pointer-events: none;
        }
        .cta-glow2 {
          position: absolute;
          bottom: -60px; left: -60px;
          width: 260px; height: 260px;
          border-radius: 50%;
          background: rgba(105,201,208,0.05);
          filter: blur(70px);
          pointer-events: none;
        }
        .cta-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(32px, 4.5vw, 58px);
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #fff;
          margin-bottom: 18px;
          position: relative; z-index: 1;
        }
        .cta-sub {
          font-size: 16px;
          color: rgba(255,255,255,0.4);
          max-width: 480px;
          margin: 0 auto 36px;
          line-height: 1.75;
          position: relative; z-index: 1;
        }
        .cta-btn {
          background: linear-gradient(135deg, #C9A84C, #8B6914);
          color: #0a0800;
          border: none;
          padding: 16px 40px;
          border-radius: 100px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          letter-spacing: 0.04em;
          box-shadow: 0 10px 36px rgba(201,168,76,0.35);
          transition: all 0.25s;
          position: relative; z-index: 1;
        }
        .cta-btn:hover { box-shadow: 0 16px 48px rgba(201,168,76,0.5); transform: translateY(-2px); }

        /* ── FOOTER ── */
        .footer {
          background: #080A0E;
          border-top: 1px solid rgba(255,255,255,0.06);
          padding: 72px clamp(20px,4vw,48px) 32px;
        }
        .footer-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 2fr;
          gap: 48px;
          padding-bottom: 56px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        @media(max-width:768px){ .footer-grid{ grid-template-columns: 1fr 1fr; gap: 36px; } }
        @media(max-width:480px){ .footer-grid{ grid-template-columns: 1fr; } }
        .footer-brand-desc {
          font-size: 14px;
          color: rgba(255,255,255,0.3);
          line-height: 1.75;
          margin: 16px 0 24px;
          max-width: 260px;
        }
        .footer-socials { display: flex; gap: 8px; }
        .footer-social {
          width: 36px; height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          background: none;
          color: rgba(255,255,255,0.35);
          display: flex; align-items: center; justify-content: center;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
        }
        .footer-social:hover { border-color: var(--gold); color: var(--gold); }
        .footer-col-title {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
          margin-bottom: 20px;
        }
        .footer-link {
          display: block;
          font-size: 14px;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          margin-bottom: 12px;
          transition: color 0.2s;
        }
        .footer-link:hover { color: var(--gold-light); }
        .footer-input-row {
          display: flex;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 12px;
          overflow: hidden;
          margin-top: 14px;
        }
        .footer-input {
          flex: 1;
          background: none;
          border: none;
          padding: 12px 16px;
          font-size: 13px;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          outline: none;
        }
        .footer-input::placeholder { color: rgba(255,255,255,0.2); }
        .footer-sub-btn {
          background: linear-gradient(135deg, #C9A84C, #8B6914);
          color: #0a0800;
          border: none;
          padding: 10px 18px;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          transition: opacity 0.2s;
          white-space: nowrap;
          letter-spacing: 0.03em;
        }
        .footer-sub-btn:hover { opacity: 0.85; }
        .footer-bottom {
          max-width: 1200px;
          margin: 0 auto;
          padding-top: 28px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }
        .footer-copy { font-size: 12px; color: rgba(255,255,255,0.2); }
        .footer-legal { display: flex; gap: 24px; }
        .footer-legal a { font-size: 12px; color: rgba(255,255,255,0.2); text-decoration: none; transition: color 0.2s; }
        .footer-legal a:hover { color: rgba(255,255,255,0.5); }

        /* fp-label reused */
        .fp-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          margin-bottom: 14px;
        }
        .fp-section-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 400;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #fff;
          margin-bottom: 14px;
        }
      `}</style>

      <div className="layout-root">
        {/* ── NAVBAR ─────────────────────────────── */}
        <nav className="nav">
          <div className="nav-inner">
            <div className="logo">
              <div className="logo-icon">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#0a0800" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="logo-text">Logshive</span>
            </div>

            <ul className="nav-links">
              {navLinks.map((item) => (
                <li key={item}>
                  <a href={`#${item.split(" ")[0].toLowerCase()}`} className="nav-link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <div className="nav-actions">
              <button 
                className="nav-login"
                onClick={() => window.location.href = 'https://user.logshive.com/auth'}
              >
                Log in
              </button>
              <button 
                className="nav-cta"
                onClick={() => window.location.href = 'https://user.logshive.com/auth'}
              >
                Get Started
              </button>
            </div>
          </div>
        </nav>

        {/* ── CHILDREN (Hero + Features) ─────────── */}
        {children}

        {/* ── TESTIMONIALS ───────────────────────── */}
        <section className="testimonials-section">
          <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
            <p className="fp-label">Social Proof</p>
            <h2 className="fp-section-title">Loved by creators<br /><em style={{ fontStyle: "italic", color: "#C9A84C" }}>worldwide</em></h2>
          </div>

          <div className="t-grid">
            {testimonials.map((t, i) => (
              <div className="t-card" key={i}>
                <div className="t-platform-tag" style={{ color: t.color, borderColor: t.color + "44" }}>
                  {t.platform}
                </div>
                <div className="t-quote">"</div>
                <div className="t-stars">
                  {[...Array(5)].map((_, j) => <span className="t-star" key={j}>★</span>)}
                </div>
                <p className="t-text">{t.text}</p>
                <div className="t-avatar-row">
                  <div className="t-avatar" style={{ background: t.color + "22", border: `1px solid ${t.color}44`, color: t.color }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="t-name">{t.name}</div>
                    <div className="t-handle">{t.handle}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ────────────────────────────────── */}
        <section className="faq-section">
          <div className="faq-inner">
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <p className="fp-label">FAQ</p>
              <h2 className="fp-section-title">Frequently asked<br /><em style={{ fontStyle: "italic", color: "#C9A84C" }}>questions</em></h2>
            </div>
            {faqs.map((faq, i) => (
              <div className="faq-item" key={i}>
                <button className="faq-btn" onClick={() => toggleFaq(i)}>
                  <span className="faq-q">{faq.q}</span>
                  <div className={`faq-icon ${openFaq === i ? "faq-icon-open" : ""}`}>
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div className="faq-body" style={{ maxHeight: openFaq === i ? 200 : 0 }}>
                  <p className="faq-a">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA BANNER ─────────────────────────── */}
        <section className="cta-section">
          <div className="cta-inner">
            <div className="cta-glow1" />
            <div className="cta-glow2" />
            <h2 className="cta-title">Ready to command<br />your audience?</h2>
            <p className="cta-sub">
              Join thousands of creators who have successfully monetized or scaled their social assets on our secure platform.
            </p>
            <button className="cta-btn">Create Your Free Account →</button>
          </div>
        </section>

        {/* ── FOOTER ─────────────────────────────── */}
        <footer className="footer">
          <div className="footer-grid">
            <div>
              <div className="logo" style={{ marginBottom: 0 }}>
                <div className="logo-icon">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#0a0800" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="logo-text">Logshive</span>
              </div>
              <p className="footer-brand-desc">
                The leading marketplace for creators to safely trade accounts and grow their digital influence.
              </p>
              <div className="footer-socials">
                {[["X", "#"], ["IG", "#"], ["LI", "#"]].map(([label, href]) => (
                  <a key={label} href={href} className="footer-social">{label}</a>
                ))}
              </div>
            </div>

            <div>
              <p className="footer-col-title">Platform</p>
              {["Sell Account", "Buy Account", "Boosting Packages", "Pricing"].map(l => (
                <a key={l} href="#" className="footer-link">{l}</a>
              ))}
            </div>

            <div>
              <p className="footer-col-title">Company</p>
              {["About Us", "Careers", "Blog", "Contact"].map(l => (
                <a key={l} href="#" className="footer-link">{l}</a>
              ))}
            </div>

            <div>
              <p className="footer-col-title">Newsletter</p>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", lineHeight: 1.7, marginBottom: 4 }}>
                Get the latest growth tactics delivered to your inbox.
              </p>
              <div className="footer-input-row">
                <input type="email" placeholder="Your email address" className="footer-input" />
                <button className="footer-sub-btn">Subscribe</button>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span className="footer-copy">© 2026 Logshive. All rights reserved.</span>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}