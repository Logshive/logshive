import React, { useEffect, useRef, useState } from "react";

const platforms = [
  { name: "Instagram", icon: "◈", color: "#E1306C" },
  { name: "TikTok", icon: "◆", color: "#69C9D0" },
  { name: "YouTube", icon: "▶", color: "#FF0000" },
  { name: "X / Twitter", icon: "✕", color: "#ffffff" },
  { name: "Facebook", icon: "⬡", color: "#1877F2" },
  { name: "Twitch", icon: "◉", color: "#9146FF" },
  { name: "Snapchat", icon: "◎", color: "#FFFC00" },
  { name: "LinkedIn", icon: "▣", color: "#0A66C2" },
];

const stats = [
  { value: "$48M+", label: "Total Volume Traded" },
  { value: "124K", label: "Active Creators" },
  { value: "99.8%", label: "Escrow Success Rate" },
  { value: "4.9★", label: "Avg. Seller Rating" },
];

const floatingCards = [
  {
    id: 1,
    type: "sale",
    icon: "◈",
    platform: "Instagram",
    detail: "287K followers · Fashion niche",
    amount: "+$12,400",
    tag: "SOLD",
    tagColor: "#22c55e",
    style: { top: "8%", left: "-5%" },
  },
  {
    id: 2,
    type: "boost",
    icon: "◆",
    platform: "TikTok",
    detail: "Engagement +340% in 48h",
    amount: "⬆ Trending",
    tag: "BOOSTED",
    tagColor: "#69C9D0",
    style: { bottom: "22%", right: "-4%" },
  },
];

function useCountUp(target, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);
  return count;
}

function MarqueeTrack({ reverse = false }) {
  const doubled = [...platforms, ...platforms];
  return (
    <div
      className="flex whitespace-nowrap"
      style={{
        animation: `marquee${reverse ? "Rev" : ""} 28s linear infinite`,
        gap: "0",
      }}
    >
      {doubled.map((p, i) => (
        <span
          key={i}
          className="inline-flex items-center gap-2 px-8 text-sm font-semibold uppercase tracking-[0.15em]"
          style={{ color: p.color, opacity: 0.7, letterSpacing: "0.15em" }}
        >
          <span style={{ fontSize: "10px", opacity: 0.5 }}>◈</span>
          {p.name}
        </span>
      ))}
    </div>
  );
}

function FloatingCard({ card, index }) {
  return (
    <div
      className="absolute z-20 pointer-events-none"
      style={{
        ...card.style,
        animation: `floatCard ${3 + index * 0.7}s ease-in-out infinite alternate`,
      }}
    >
      <div
        style={{
          background: "rgba(15,15,20,0.85)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "16px",
          padding: "14px 18px",
          minWidth: "210px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span style={{ color: platforms.find(p => p.name === card.platform || p.name.includes(card.platform.split(" ")[0]))?.color || "#fff", fontSize: 18 }}>
              {card.icon}
            </span>
            <span style={{ color: "rgba(255,255,255,0.9)", fontSize: 13, fontWeight: 700, fontFamily: "'DM Sans', sans-serif" }}>
              {card.platform}
            </span>
          </div>
          <span
            style={{
              background: card.tagColor + "22",
              color: card.tagColor,
              fontSize: 9,
              fontWeight: 800,
              letterSpacing: "0.12em",
              padding: "2px 8px",
              borderRadius: 99,
              border: `1px solid ${card.tagColor}44`,
            }}
          >
            {card.tag}
          </span>
        </div>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, marginBottom: 6 }}>{card.detail}</p>
        <p style={{ color: card.tagColor, fontSize: 16, fontWeight: 800, fontFamily: "'DM Serif Display', serif" }}>
          {card.amount}
        </p>
      </div>
    </div>
  );
}

export default function HeroMarquee() {
  const heroRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const totalVolume = useCountUp(visible ? 48 : 0, 2000);
  const creators = useCountUp(visible ? 124 : 0, 2200);

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

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body, .hero-root {
          background: var(--bg);
          color: #fff;
          font-family: 'DM Sans', sans-serif;
        }

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marqueeRev {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }

        @keyframes floatCard {
          from { transform: translateY(0px) rotate(-1deg); }
          to { transform: translateY(-14px) rotate(1deg); }
        }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes glowPulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.08); }
        }

        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pingDot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(2.2); opacity: 0; }
        }

        .hero-badge {
          animation: fadeSlideUp 0.6s ease both;
          animation-delay: 0.1s;
        }
        .hero-h1 {
          animation: fadeSlideUp 0.7s ease both;
          animation-delay: 0.25s;
        }
        .hero-sub {
          animation: fadeSlideUp 0.7s ease both;
          animation-delay: 0.4s;
        }
        .hero-cta {
          animation: fadeSlideUp 0.7s ease both;
          animation-delay: 0.55s;
        }
        .hero-stats {
          animation: fadeSlideUp 0.7s ease both;
          animation-delay: 0.7s;
        }
        .hero-visual {
          animation: fadeSlideUp 0.9s ease both;
          animation-delay: 0.85s;
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--gold), #B8860B);
          color: #0a0800;
          border: none;
          padding: 14px 34px;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 700;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          letter-spacing: 0.04em;
          box-shadow: 0 8px 32px rgba(201,168,76,0.35), 0 2px 0 rgba(255,255,255,0.15) inset;
          transition: all 0.25s ease;
          position: relative;
          overflow: hidden;
        }
        .btn-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.15), transparent);
          border-radius: 100px;
          pointer-events: none;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 40px rgba(201,168,76,0.5);
        }

        .btn-secondary {
          background: transparent;
          color: rgba(255,255,255,0.85);
          border: 1px solid rgba(255,255,255,0.15);
          padding: 14px 34px;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 600;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          letter-spacing: 0.04em;
          backdrop-filter: blur(10px);
          transition: all 0.25s ease;
        }
        .btn-secondary:hover {
          border-color: var(--gold);
          color: var(--gold-light);
          transform: translateY(-2px);
          background: rgba(201,168,76,0.06);
        }

        .stat-card {
          border-right: 1px solid rgba(255,255,255,0.07);
          padding: 0 28px;
          text-align: center;
        }
        .stat-card:last-child { border-right: none; }

        .visual-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          animation: glowPulse 5s ease-in-out infinite;
          pointer-events: none;
        }

        .marquee-wrapper {
          overflow: hidden;
          position: relative;
        }
        .marquee-wrapper::before,
        .marquee-wrapper::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          width: 120px;
          z-index: 2;
          pointer-events: none;
        }
        .marquee-wrapper::before {
          left: 0;
          background: linear-gradient(to right, var(--bg), transparent);
        }
        .marquee-wrapper::after {
          right: 0;
          background: linear-gradient(to left, var(--bg), transparent);
        }

        .ring-decoration {
          animation: rotateSlow 30s linear infinite;
        }

        .live-dot {
          display: inline-block;
          width: 7px; height: 7px;
          background: #22c55e;
          border-radius: 50%;
          animation: pingDot 1.8s ease-in-out infinite;
        }

        .dashboard-img {
          width: 100%;
          height: 380px;
          object-fit: cover;
          border-radius: 20px;
          display: block;
          filter: brightness(0.7) saturate(0.6);
        }

        .img-overlay-gradient {
          position: absolute;
          inset: 0;
          border-radius: 20px;
          background: linear-gradient(
            to bottom,
            transparent 40%,
            rgba(8,10,14,0.85) 100%
          );
          pointer-events: none;
        }

        .ticker-divider {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 18px;
        }
        .ticker-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent);
        }
      `}</style>

      <div className="hero-root">
        {/* ── HERO ─────────────────────────────────────── */}
        <section
          ref={heroRef}
          style={{
            position: "relative",
            paddingTop: "clamp(80px, 12vw, 160px)",
            paddingBottom: "clamp(60px, 8vw, 100px)",
            overflow: "hidden",
          }}
        >
          {/* Background ambiance */}
          <div className="visual-glow" style={{ width: 700, height: 700, background: "rgba(201,168,76,0.07)", top: "-200px", left: "50%", transform: "translateX(-50%)" }} />
          <div className="visual-glow" style={{ width: 400, height: 400, background: "rgba(105,201,208,0.05)", bottom: "0", right: "5%", animationDelay: "2s" }} />

          {/* Geometric ring */}
          <div
            className="ring-decoration"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 900,
              height: 900,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.025)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) rotate(45deg)",
              width: 650,
              height: 650,
              borderRadius: "50%",
              border: "1px solid rgba(201,168,76,0.06)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              padding: "0 clamp(20px, 4vw, 48px)",
              position: "relative",
              zIndex: 10,
              textAlign: "center",
            }}
          >
            {/* Badge */}
<div className="hero-badge" style={{
  display: "inline-flex",
  alignItems: "center",
  gap: 10,
  padding: "8px 8px 8px 6px",
  borderRadius: 100,
  background: "linear-gradient(135deg, rgba(201,168,76,0.12), rgba(201,168,76,0.04))",
  boxShadow: "0 0 0 1px rgba(0,0,0,0.3), inset 0 1px 0 rgba(201,168,76,0.1), 0 8px 32px rgba(201,168,76,0.08)",
  backdropFilter: "blur(12px)",
  marginBottom: 36,
  cursor: "default",
}}>
  {/* Left pill — rank chip */}
  <div style={{
    background: "linear-gradient(135deg, #C9A84C, #8B6914)",
    borderRadius: 100,
    padding: "4px 12px",
    display: "flex",
    alignItems: "center",
    gap: 6,
    boxShadow: "0 2px 8px rgba(201,168,76,0.4), inset 0 1px 0 rgba(255,255,255,0.2)",
  }}>
    <span style={{ fontSize: 11, fontWeight: 800, color: "#0a0800", letterSpacing: "0.06em" }}>
      #1
    </span>
  </div>

  {/* Label */}
  <span style={{
    fontSize: 12,
    fontWeight: 600,
    color: "rgba(255,255,255,0.65)",
    letterSpacing: "0.06em",
    paddingRight: 6,
  }}>
    Marketplace for Creators
  </span>

  {/* Live indicator */}
  <div style={{
    display: "flex",
    alignItems: "center",
    gap: 5,
    background: "rgba(34,197,94,0.1)",
    border: "1px solid rgba(34,197,94,0.2)",
    borderRadius: 100,
    padding: "3px 9px 3px 7px",
  }}>
    <span className="live-dot" />
    <span style={{ fontSize: 10, fontWeight: 700, color: "rgba(34,197,94,0.9)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
      Live
    </span>
  </div>
</div>

            {/* Headline */}
            <h1
              className="hero-h1"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(44px, 7vw, 96px)",
                fontWeight: 400,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                marginBottom: 28,
                maxWidth: 900,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Buy Social Media Accounts.{" "}
              <em style={{ fontStyle: "italic", color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.25)" }}>
                Scale
              </em>{" "}
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 50%, #8B6914 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Your Influence.
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="hero-sub"
              style={{
                fontSize: "clamp(15px, 1.8vw, 18px)",
                color: "rgba(255,255,255,0.45)",
                maxWidth: 560,
                margin: "0 auto 40px",
                lineHeight: 1.75,
                fontWeight: 400,
              }}
            >
              The AI-powered marketplace for buying, selling & growing social media assets — with secure escrow, smart analytics, and verified sellers.
            </p>

            {/* CTAs */}
            <div className="hero-cta" style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
              <button 
                className="btn-primary"
                onClick={() => window.location.href = 'https://user.logshive.com/auth'}
              >
                Start Selling →
              </button>
              <button 
                className="btn-secondary"
                onClick={() => window.location.href = 'https://user.logshive.com/auth'}
              >
                Explore Boosting
              </button>
            </div>

            {/* Stats row */}
            <div
              className="hero-stats"
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                marginTop: 56,
                padding: "28px 0",
                borderTop: "1px solid rgba(255,255,255,0.06)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {stats.map((s, i) => (
                <div className="stat-card" key={i}>
                  <div
                    style={{
                      fontFamily: "'DM Serif Display', serif",
                      fontSize: "clamp(24px, 3.5vw, 36px)",
                      color: "var(--gold-light)",
                      marginBottom: 4,
                    }}
                  >
                    {s.value}
                  </div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Visual / Dashboard */}
            <div
              className="hero-visual"
              style={{
                position: "relative",
                maxWidth: 860,
                margin: "60px auto 0",
              }}
            >
              {floatingCards.map((card, i) => (
                <FloatingCard key={card.id} card={card} index={i} />
              ))}

              <div
                style={{
                  position: "relative",
                  borderRadius: 20,
                  border: "1px solid rgba(255,255,255,0.07)",
                  overflow: "hidden",
                  boxShadow: "0 40px 120px rgba(0,0,0,0.7), 0 0 0 1px rgba(201,168,76,0.08)",
                }}
              >
                <img
                  className="dashboard-img"
                  src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=2000&auto=format&fit=crop"
                  alt="Social media marketing icons"
                />
                <div className="img-overlay-gradient" />

                {/* Bottom overlay label */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 24,
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    background: "rgba(8,10,14,0.8)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 100,
                    padding: "10px 22px",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span className="live-dot" />
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>
                    Live marketplace · 2,847 listings active now
                  </span>
                </div>

                {/* Gold corner accent */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 1,
                    background: "linear-gradient(to right, transparent, rgba(201,168,76,0.4), transparent)",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── MARQUEE TICKER ───────────────────────────── */}
        <section
          style={{
            padding: "32px 0",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
            background: "linear-gradient(to bottom, rgba(201,168,76,0.02), transparent)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              padding: "0 48px",
              textAlign: "center",
              marginBottom: 20,
            }}
          >
            <div className="ticker-divider">
              <div className="ticker-line" />
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.2)",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}
              >
                Trusted across 10,000+ creators · All major platforms
              </span>
              <div className="ticker-line" />
            </div>
          </div>

          {/* Row 1 → */}
          <div className="marquee-wrapper" style={{ marginBottom: 10 }}>
            <MarqueeTrack reverse={false} />
          </div>

          {/* Row 2 ← */}
          <div className="marquee-wrapper">
            <MarqueeTrack reverse={true} />
          </div>
        </section>
      </div>
    </>
  );
}