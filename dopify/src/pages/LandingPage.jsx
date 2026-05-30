import { useNavigate } from 'react-router-dom';
import { layouts, buttons, landing } from '../styles/classNames';

/**
 * Landing Page
 * Uses React Router (useNavigate) for navigation
 */
export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <main className={layouts.mainContainer}>
      {/* Hero Section */}
      <section className="relative px-6 md:px-8 max-w-7xl mx-auto pt-20 pb-24 text-center overflow-visible">
        <div className="max-w-4xl mx-auto space-y-12 relative z-10">
          {/* Logo */}
          <h1 className="text-[80px] md:text-[80px] font-black text-[#F22B6D] tracking-tighter text-hero-shadow">
            Dopify
          </h1>

          {/* Main Tagline */}
          <div className="space-y-6">
            <h2 className="text-[48px] md:text-[52px] font-extrabold text-[#1C1B1B] leading-tight">
              <span className="tagline-accent">Turn every task into a dopamine hit.</span>
            </h2>

            {/* Subtext */}
            <p className="text-[20px] md:text-[20px] font-medium text-[#5B3F44] max-w-2xl mx-auto leading-relaxed">
              Dopify helps you set tasks, attach rewards, and actually earn them when you complete your goals. No guilt, no procrastination, just rewards you unlock by doing
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="pt-8 flex justify-center items-center gap-4 flex-wrap">
            <button
              onClick={() => navigate('/create')}
              className={buttons.ctaGlow}
            >
              Start Now
            </button>
            <button
              className={buttons.ctaBorder}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-6 md:px-8 max-w-7xl mx-auto py-24 relative pt-20 pb-24">
        <div className="text-center mb-24 space-y-4">
          <span className="inline-block bg-[#F6DCE3] text-[#F22B6D] px-6 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em]">
            The Process
          </span>
          <h3 className="text-[36px] md:text-[40px] font-extrabold text-[#1C1B1B]">
            How It Works
          </h3>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Card 1: Set a task */}
          <div className={landing.cardContainer} style={{animation: 'fadeInUp 0.8s ease-out 0.1s forwards'}}>
            <div className="w-20 h-20 bg-[#FFD9DE]/50 rounded-3xl flex items-center justify-center mb-10">
              <svg
                className="w-10 h-10 text-[#F22B6D]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </div>
            <h4 className="text-[24px] md:text-[24px] font-extrabold text-[#1C1B1B] mb-6">
              Set a task
            </h4>
            <p className="text-[16px] leading-relaxed text-[#5B3F44]">
              Define your goals with precision. Whether it's deep focus sessions or daily errands, every intention builds your personal momentum.
            </p>
          </div>

          {/* Card 2: Set a deadline */}
          <div className={`${landing.cardContainer} md:mt-12`} style={{animation: 'fadeInUp 0.8s ease-out 0.2s forwards'}}>
            <div className="w-20 h-20 bg-[#FFD9DD]/50 rounded-3xl flex items-center justify-center mb-10">
              <svg
                className="w-10 h-10 text-[#9C3F53]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4 className="text-[24px] md:text-[24px] font-extrabold text-[#1C1B1B] mb-6">
              Set a deadline
            </h4>
            <p className="text-[16px] leading-relaxed text-[#5B3F44]">
              Commit to a timeframe that suits your pace. Our intelligent nudges ensure you stay on track without the pressure.
            </p>
          </div>

          {/* Card 3: Set a reward */}
          <div className={landing.cardContainer} style={{animation: 'fadeInUp 0.8s ease-out 0.3s forwards'}}>
            <div className="w-20 h-20 bg-[#F6DCE3]/50 rounded-3xl flex items-center justify-center mb-10">
              <svg
                className="w-10 h-10 text-[#6A575D]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4 className="text-[24px] md:text-[24px] font-extrabold text-[#1C1B1B] mb-6">
              Set a reward
            </h4>
            <p className="text-[16px] leading-relaxed text-[#5B3F44]">
              Select a celebration that fuels your joy. Treat yourself to coffee, a mindful walk, or any reward that acknowledges your win.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-6 md:px-8 max-w-7xl mx-auto py-24">
        <div className="rounded-[48px] p-16 md:p-24 text-center relative overflow-hidden text-white bg-[#F22B6D] shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-10">
            <h3 className="text-[44px] md:text-[44px] font-black tracking-tight leading-tight">
              Ready to transform your productivity?
            </h3>
            <p className="text-[20px] md:text-[22px] opacity-90 leading-relaxed font-medium">
              Join 20,000+ high-achievers who have turned their tedious to-do lists into a series of curated celebrations.
            </p>
            <div className="pt-4">
              <button
                onClick={() => navigate('/create')}
                className="bg-white text-[#F22B6D] font-bold text-lg uppercase tracking-widest px-16 py-6 rounded-full shadow-2xl hover:scale-105 hover:bg-[#FFF7FB] active:scale-95 transition-all duration-200"
              >
                Start Your First Task
              </button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .premium-shadow {
          box-shadow: 0 10px 40px -12px rgba(184, 0, 76, 0.1), 
                      0 4px 12px -4px rgba(184, 0, 76, 0.05);
        }
        .card-border {
          border: 1px solid rgba(184, 0, 76, 0.08);
        }
        .diffusion-glow-hover:hover {
          box-shadow: 0 25px 60px -15px rgba(184, 0, 76, 0.15);
          transform: translateY(-8px);
          border-color: rgba(184, 0, 76, 0.2);
        }
        .cta-glow {
          box-shadow: 0 8px 25px -5px rgba(242, 43, 109, 0.5);
        }
        .cta-glow:hover {
          box-shadow: 0 12px 35px -5px rgba(242, 43, 109, 0.6);
        }
        .text-hero-shadow {
          text-shadow: 0 4px 8px rgba(184, 0, 76, 0.1);
        }
        .tagline-accent {
          position: relative;
          display: inline-block;
        }
        .tagline-accent::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, transparent, #b8004c, transparent);
          border-radius: 99px;
          opacity: 0.4;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
