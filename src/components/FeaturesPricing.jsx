import React from "react";

const features = [
  {
    span: 2,
    dark: false,
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    tag: "Security",
    title: "Secure Checkout",
    desc: "Never worry about getting scammed. Every order is protected and your account details are delivered instantly after payment.",
    accent: "#C9A84C",
  },
  {
    span: 1,
    dark: true,
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    tag: "Growth",
    title: "Algorithmic Boosting",
    desc: "Targeted growth using real users to ensure engagement rates stay healthy and authentic.",
    accent: "#69C9D0",
  },
  {
    span: 1,
    dark: false,
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    tag: "Reach",
    title: "Global Network",
    desc: "Shop accounts from over 150 countries instantly.",
    accent: "#C9A84C",
  },
];

const steps = [
  { num: "01", title: "Pick Your Service", desc: "Browse social media accounts by platform and niche, select a follower boost package, or grab a verified number — all in one place." },
  { num: "02", title: "Secure Checkout", desc: "Pay safely through our protected checkout. Every transaction is encrypted and your order is confirmed instantly with no delays." },
  { num: "03", title: "Instant Delivery", desc: "Receive your account login details, follower boost, or verification number immediately after payment. No waiting, no back and forth — just results." },
];

const plans = [
  {
    name: "Starter",
    price: "29",
    desc: "Perfect for testing the waters.",
    features: ["1,000 Real Followers", "500 High-Quality Likes", "10,000 Impressions", "24/7 Support"],
    popular: false,
  },
  {
    name: "Pro",
    price: "79",
    desc: "Our most popular growth engine.",
    features: ["5,000 Real Followers", "2,500 High-Quality Likes", "50,000 Impressions", "Priority Support", "Targeted Audience"],
    popular: true,
  },
  {
    name: "Business",
    price: "199",
    desc: "Scale your brand aggressively.",
    features: ["20,000 Real Followers", "10,000 High-Quality Likes", "200,000 Impressions", "Dedicated Manager", "Custom Demographics"],
    popular: false,
  },
];

export default function FeaturesPricing({ counts, statsRef }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        .fp-root {
          background: #080A0E;
          font-family: 'DM Sans', sans-serif;
          color: #fff;
        }

        /* ── FEATURES ── */
        .fp-section { padding: clamp(80px, 10vw, 130px) clamp(20px, 4vw, 48px); }
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
        .fp-section-sub {
          font-size: 15px;
          color: rgba(255,255,255,0.4);
          max-width: 440px;
          line-height: 1.7;
        }

        .bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-top: 56px;
        }
        @media (max-width: 768px) {
          .bento-grid { grid-template-columns: 1fr; }
          .bento-span2 { grid-column: span 1 !important; }
        }
        .bento-span2 { grid-column: span 2; }

        .bento-card {
          border-radius: 24px;
          padding: 36px;
          border: 1px solid rgba(255,255,255,0.07);
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, border-color 0.3s ease;
          cursor: default;
        }
        .bento-card:hover { transform: translateY(-4px); }
        .bento-light {
          background: #0F1117;
        }
        .bento-light:hover { border-color: rgba(201,168,76,0.25); }
        .bento-dark {
          background: #0a0c10;
        }
        .bento-dark:hover { border-color: rgba(105,201,208,0.2); }

        .bento-icon {
          width: 44px; height: 44px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.08);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 24px;
          font-size: 18px;
        }
        .bento-tag {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-bottom: 10px;
          opacity: 0.5;
        }
        .bento-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(20px, 2vw, 26px);
          font-weight: 400;
          color: #fff;
          margin-bottom: 12px;
          line-height: 1.2;
        }
        .bento-desc {
          font-size: 14px;
          line-height: 1.75;
          color: rgba(255,255,255,0.4);
          max-width: 380px;
        }

        /* seller toolkit card */
        .toolkit-card {
          grid-column: span 2;
          border-radius: 24px;
          padding: 36px;
          border: 1px solid rgba(201,168,76,0.15);
          background: linear-gradient(135deg, rgba(201,168,76,0.06) 0%, rgba(8,10,14,0) 60%);
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease;
        }
        @media (max-width: 768px) { .toolkit-card { grid-column: span 1; } }
        .toolkit-card:hover { transform: translateY(-4px); }

        .pricing-mini {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 20px 24px;
          text-align: center;
          min-width: 160px;
        }

        /* ── STATS ── */
        .stats-band {
          padding: 48px clamp(20px,4vw,48px);
          border-top: 1px solid rgba(255,255,255,0.06);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          background: #0F1117;
        }
        .stats-grid {
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(4,1fr);
          gap: 0;
        }
        @media(max-width:640px){ .stats-grid{ grid-template-columns: repeat(2,1fr); gap: 24px 0; } }
        .stat-item {
          text-align: center;
          border-right: 1px solid rgba(255,255,255,0.07);
          padding: 0 24px;
        }
        .stat-item:last-child { border-right: none; }
        .stat-val {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(28px,3.5vw,40px);
          color: #E8C96D;
          line-height: 1;
          margin-bottom: 6px;
        }
        .stat-lbl {
          font-size: 11px;
          font-weight: 600;
          color: rgba(255,255,255,0.3);
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        /* ── HOW IT WORKS ── */
        .steps-connector {
          position: absolute;
          top: 38px; left: 15%; width: 70%;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent);
        }
        .step-circle {
          width: 76px; height: 76px;
          border-radius: 50%;
          border: 1px solid rgba(201,168,76,0.2);
          background: #0F1117;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 24px;
          position: relative; z-index: 1;
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .step-circle:hover {
          border-color: rgba(201,168,76,0.5);
          box-shadow: 0 0 30px rgba(201,168,76,0.12);
        }
        .step-num {
          font-family: 'DM Serif Display', serif;
          font-size: 22px;
          color: #C9A84C;
        }
        .step-title {
          font-family: 'DM Serif Display', serif;
          font-size: 20px;
          color: #fff;
          margin-bottom: 10px;
        }
        .step-desc {
          font-size: 14px;
          color: rgba(255,255,255,0.38);
          line-height: 1.75;
          max-width: 240px;
          margin: 0 auto;
        }

        /* ── PRICING ── */
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 16px;
          max-width: 980px;
          margin: 56px auto 0;
          align-items: center;
        }
        @media(max-width:768px){ .pricing-grid{ grid-template-columns: 1fr; } }

        .plan-card {
          border-radius: 24px;
          padding: 36px;
          border: 1px solid rgba(255,255,255,0.07);
          background: #0F1117;
          position: relative;
          transition: transform 0.3s, border-color 0.3s;
        }
        .plan-card:hover { transform: translateY(-4px); }
        .plan-popular {
          border-color: rgba(201,168,76,0.4);
          background: linear-gradient(160deg, rgba(201,168,76,0.07) 0%, #0F1117 50%);
          transform: translateY(-12px);
          box-shadow: 0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,168,76,0.15);
        }
        .plan-popular:hover { transform: translateY(-16px); }
        .popular-badge {
          position: absolute;
          top: -13px; left: 50%; transform: translateX(-50%);
          background: linear-gradient(135deg, #C9A84C, #8B6914);
          color: #0a0800;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 4px 16px;
          border-radius: 100px;
          white-space: nowrap;
        }
        .plan-name {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          margin-bottom: 6px;
        }
        .plan-desc {
          font-size: 13px;
          color: rgba(255,255,255,0.3);
          margin-bottom: 28px;
          min-height: 36px;
        }
        .plan-price {
          font-family: 'DM Serif Display', serif;
          font-size: 48px;
          color: #fff;
          line-height: 1;
          margin-bottom: 4px;
        }
        .plan-price span { font-size: 20px; color: rgba(255,255,255,0.3); vertical-align: top; margin-top: 8px; display: inline-block; }
        .plan-period { font-size: 12px; color: rgba(255,255,255,0.25); margin-bottom: 28px; }
        .plan-divider { height: 1px; background: rgba(255,255,255,0.06); margin-bottom: 24px; }
        .plan-feature {
          display: flex; align-items: center; gap: 10px;
          font-size: 13px;
          color: rgba(255,255,255,0.55);
          margin-bottom: 12px;
        }
        .plan-feature-dot {
          width: 16px; height: 16px; border-radius: 50%; flex-shrink: 0;
          border: 1px solid rgba(201,168,76,0.3);
          display: flex; align-items: center; justify-content: center;
          font-size: 8px;
          color: #C9A84C;
        }
        .plan-btn-primary {
          width: 100%;
          padding: 13px;
          border-radius: 100px;
          background: linear-gradient(135deg, #C9A84C, #8B6914);
          color: #0a0800;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.04em;
          border: none;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(201,168,76,0.3);
          transition: all 0.25s;
          margin-top: 28px;
          font-family: 'DM Sans', sans-serif;
        }
        .plan-btn-primary:hover { box-shadow: 0 12px 32px rgba(201,168,76,0.45); transform: translateY(-1px); }
        .plan-btn-secondary {
          width: 100%;
          padding: 13px;
          border-radius: 100px;
          background: transparent;
          color: rgba(255,255,255,0.6);
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 0.04em;
          border: 1px solid rgba(255,255,255,0.1);
          cursor: pointer;
          transition: all 0.25s;
          margin-top: 28px;
          font-family: 'DM Sans', sans-serif;
        }
        .plan-btn-secondary:hover { border-color: rgba(201,168,76,0.3); color: #E8C96D; }
      `}</style>

      <div className="fp-root">
        {/* ── FEATURES BENTO ─────────────────── */}
        <section id="sell" className="fp-section" style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto" }}>
            <p className="fp-label">Platform Capabilities</p>
            <h2 className="fp-section-title">Everything you need for<br /><em style={{ fontStyle: "italic", color: "#C9A84C" }}>every social move</em></h2>
            <p className="fp-section-sub" style={{ margin: "0 auto" }}>
              Everything you need to buy accounts, boost followers, and get verified numbers — all in one place.
            </p>
          </div>

          <div className="bento-grid">
            {/* Card 1 — wide */}
            <div className="bento-card bento-light bento-span2">
              <div style={{ position: "absolute", top: -60, right: -60, width: 240, height: 240, borderRadius: "50%", background: "rgba(201,168,76,0.06)", filter: "blur(60px)", pointerEvents: "none" }} />
              <div className="bento-icon" style={{ background: "rgba(201,168,76,0.08)", color: "#C9A84C" }}>
                {features[0].icon}
              </div>
              <p className="bento-tag" style={{ color: "#C9A84C" }}>{features[0].tag}</p>
              <h3 className="bento-title">{features[0].title}</h3>
              <p className="bento-desc">{features[0].desc}</p>
            </div>

            {/* Card 2 — narrow dark */}
            <div className="bento-card bento-dark">
              <div style={{ position: "absolute", top: -40, right: -40, width: 180, height: 180, borderRadius: "50%", background: "rgba(105,201,208,0.07)", filter: "blur(50px)", pointerEvents: "none" }} />
              <div className="bento-icon" style={{ background: "rgba(105,201,208,0.08)", color: "#69C9D0" }}>
                {features[1].icon}
              </div>
              <p className="bento-tag" style={{ color: "#69C9D0" }}>{features[1].tag}</p>
              <h3 className="bento-title">{features[1].title}</h3>
              <p className="bento-desc">{features[1].desc}</p>
            </div>

            {/* Card 3 — narrow */}
            <div className="bento-card bento-light">
              <div className="bento-icon" style={{ background: "rgba(201,168,76,0.08)", color: "#C9A84C" }}>
                {features[2].icon}
              </div>
              <p className="bento-tag" style={{ color: "#C9A84C" }}>{features[2].tag}</p>
              <h3 className="bento-title">{features[2].title}</h3>
              <p className="bento-desc">{features[2].desc}</p>
            </div>

            {/* Seller Toolkit — wide */}
            <div className="toolkit-card">
              <div style={{ position: "absolute", top: -60, right: -60, width: 300, height: 300, borderRadius: "50%", background: "rgba(201,168,76,0.05)", filter: "blur(80px)", pointerEvents: "none" }} />
              <div style={{ display: "flex", flexWrap: "wrap", gap: 36, alignItems: "center", position: "relative", zIndex: 1 }}>
                <div style={{ flex: 1, minWidth: 220 }}>
                  <p className="bento-tag" style={{ color: "#C9A84C" }}>Sellers Toolkit</p>
                  <h3 className="bento-title">Get a Number</h3>
                  <p className="bento-desc">
                     Need a number for verification? Get real phone numbers instantly for any platform — fast, private, and hassle-free.
                  </p>
                </div>
                <div className="pricing-mini">
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,0.25)", marginBottom: 8, letterSpacing: "0.1em", textTransform: "uppercase" }}>Estimated Value</div>
                  <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 38, color: "#E8C96D", lineHeight: 1, marginBottom: 12 }}>$1,250</div>
                  <div style={{ height: 3, background: "rgba(255,255,255,0.07)", borderRadius: 99, marginBottom: 8 }}>
                    <div style={{ height: "100%", width: "75%", background: "linear-gradient(to right, #C9A84C, #E8C96D)", borderRadius: 99 }} />
                  </div>
                  <div style={{ fontSize: 11, color: "#22c55e", fontWeight: 600 }}>↑ +15% Demand</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS ─────────────────────────── */}
        <div ref={statsRef} className="stats-band">
          <div className="stats-grid">
            {[
              { label: "Active Users", value: counts.customers, suffix: "+" },
              { label: "Accounts Sold", value: counts.accounts, suffix: "+" },
              { label: "Satisfaction Rate", value: counts.satisfaction, suffix: "%" },
              { label: "Uptime", value: "99.9", suffix: "%" },
            ].map((s, i) => (
              <div className="stat-item" key={i}>
                <div className="stat-val">{s.value}{s.suffix}</div>
                <div className="stat-lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── HOW IT WORKS ──────────────────── */}
        <section id="how" className="fp-section" style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 480, margin: "0 auto" }}>
            <p className="fp-label">Process</p>
            <h2 className="fp-section-title">How it works</h2>
            <p className="fp-section-sub" style={{ margin: "0 auto" }}>A seamless experience designed to protect you at every step.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, marginTop: 64, position: "relative", textAlign: "center" }}>
            <div className="steps-connector" />
            {steps.map((s, i) => (
              <div key={i}>
                <div className="step-circle">
                  <span className="step-num">{s.num}</span>
                </div>
                <h3 className="step-title">{s.title}</h3>
                <p className="step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── PRICING ───────────────────────── */}
        {/* <section id="pricing" className="fp-section" style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 480, margin: "0 auto" }}>
            <p className="fp-label">Boost Packages</p>
            <h2 className="fp-section-title">Accelerate<br /><em style={{ fontStyle: "italic", color: "#C9A84C" }}>your growth</em></h2>
            <p className="fp-section-sub" style={{ margin: "0 auto" }}>No bots, just real audience expansion. Cancel anytime.</p>
          </div>

          <div className="pricing-grid">
            {plans.map((plan, i) => (
              <div key={i} className={`plan-card ${plan.popular ? "plan-popular" : ""}`}>
                {plan.popular && <div className="popular-badge">Most Popular</div>}
                <p className="plan-name">{plan.name}</p>
                <p className="plan-desc">{plan.desc}</p>
                <div className="plan-price"><span>$</span>{plan.price}</div>
                <p className="plan-period">per campaign</p>
                <div className="plan-divider" />
                {plan.features.map((f, j) => (
                  <div className="plan-feature" key={j}>
                    <div className="plan-feature-dot">✓</div>
                    {f}
                  </div>
                ))}
                {plan.popular
                  ? <button className="plan-btn-primary">Get Started →</button>
                  : <button className="plan-btn-secondary">Get Started</button>
                }
              </div>
            ))}
          </div>
        </section> */}
      </div>
    </>
  );
}