import React, { useEffect, useState, useRef } from "react";
import HeroMarquee from "./components/HeroMarquee";
import FeaturesPricing from "./components/FeaturesPricing";
import Layout from "./components/Layout";

function App() {
  const [openFaq, setOpenFaq] = useState(null);
  const [counts, setCounts] = useState({ accounts: 0, customers: 0, satisfaction: 0 });
  const statsRef = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ duration: 800, once: true, offset: 100 });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated.current) {
            animated.current = true;
            animateCount("accounts", 15420, 2000);
            animateCount("customers", 8720, 2000);
            animateCount("satisfaction", 99, 2000);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const animateCount = (key, target, duration) => {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCounts((prev) => ({ ...prev, [key]: target }));
        clearInterval(timer);
      } else {
        setCounts((prev) => ({ ...prev, [key]: Math.floor(start) }));
      }
    }, 16);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="font-sans antialiased text-gray-900 bg-[#FAFAFA] overflow-x-hidden selection:bg-amber-500 selection:text-white">
      <Layout openFaq={openFaq} toggleFaq={toggleFaq}>
        <HeroMarquee />
        <FeaturesPricing counts={counts} statsRef={statsRef} />
      </Layout>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 25s linear infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-5%); }
          50% { transform: translateY(5%); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default App;