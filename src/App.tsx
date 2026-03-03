import { useState, useEffect, useRef } from 'react';
import { Moon, Sun, Menu, X, FileText, Play } from 'lucide-react';
import { BarChart } from './components/BarChart';
import { Logo } from './components/Logo';

import { AnimatedSection } from './components/AnimatedSection';
import { HackerNewsIcon, LinkedInIcon, RedditIcon, HuggingFaceIcon } from './components/Icons';
import {
  nodeSpeedData, pythonSpeedData, rustSpeedData,
  nodeLatencyData, pythonLatencyData, rustLatencyData
} from './data/benchmarks';

const socialLinkClass = "flex items-center gap-2 px-3 py-2 rounded-full text-[13px] font-medium text-gray-700 dark:text-gray-300 hover:text-[#FF5100] dark:hover:text-[#FF5100] hover:bg-black/5 dark:hover:bg-white/5 whitespace-nowrap";
const mobileSocialLinkClass = "flex items-center gap-2.5 px-3 py-2.5 rounded-full text-[14px] font-medium text-gray-700 dark:text-gray-300 hover:text-[#FF5100] dark:hover:text-[#FF5100] hover:bg-black/5 dark:hover:bg-white/5";

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#0a0a0a';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#FDFDFD';
    }
  }, [isDark]);

  // Escape-to-close and click-outside for mobile menu
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Skip to content */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#FF5100] focus:text-white focus:rounded-lg focus:text-sm focus:font-medium">Skip to content</a>
      {/* Background Blobs for Glassmorphism Effect */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        {/* Light Mode Blobs */}
        <div className="dark:hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-white blur-[120px] mix-blend-multiply opacity-50" />
          <div className="absolute top-[40%] right-[-10%] w-[40%] h-[40%] rounded-full bg-gray-100 blur-[120px] mix-blend-multiply opacity-50" />
          <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[40%] rounded-full bg-white blur-[120px] mix-blend-multiply opacity-30" />
        </div>

        {/* Dark Mode Blobs */}
        <div className="hidden dark:block">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#FF5100]/15 blur-[120px] mix-blend-screen opacity-100" />
          <div className="absolute top-[40%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#2f6bff]/15 blur-[120px] mix-blend-screen opacity-100" />
          <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[40%] rounded-full bg-[#FF5100]/10 blur-[120px] mix-blend-screen opacity-100" />
        </div>
      </div>

      <div className="relative z-10 py-6 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <header className="flex justify-between items-center mb-12 sm:mb-16 relative z-50">
          <div className="flex items-center">
            <Logo className="h-6 sm:h-8 md:h-10 w-auto text-[#171717] dark:text-white" />
          </div>

          <div className="flex items-center gap-3">
            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-0.5 bg-white dark:bg-[#121212]/60 backdrop-blur-xl border border-gray-200/80 dark:border-white/10 rounded-full px-1 py-1 shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.12)] mr-2" aria-label="Social links">
              <a href="https://arxiv.org" target="_blank" rel="noopener noreferrer" className={socialLinkClass}>
                <FileText size={18} />
                ArXiv
              </a>
              <a href="https://news.ycombinator.com" target="_blank" rel="noopener noreferrer" className={socialLinkClass}>
                <HackerNewsIcon size={18} />
                Hacker News
              </a>
              <a href="https://huggingface.co" target="_blank" rel="noopener noreferrer" className={socialLinkClass}>
                <HuggingFaceIcon size={18} />
                Hugging Face
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={socialLinkClass}>
                <LinkedInIcon size={18} />
                LinkedIn
              </a>
              <a href="https://reddit.com" target="_blank" rel="noopener noreferrer" className={socialLinkClass}>
                <RedditIcon size={18} />
                Reddit
              </a>
            </nav>

            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 sm:p-3 rounded-full bg-white/60 dark:bg-[#121212]/60 backdrop-blur-xl border border-white/40 dark:border-white/10 text-gray-600 dark:text-gray-300 hover:text-[#FF5100] dark:hover:text-[#FF5100] shadow-[0_2px_16px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_16px_rgba(0,0,0,0.12)]"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 sm:p-3 rounded-full bg-white/60 dark:bg-[#121212]/60 backdrop-blur-xl border border-white/40 dark:border-white/10 text-gray-600 dark:text-gray-300 hover:text-[#FF5100] dark:hover:text-[#FF5100] shadow-[0_2px_16px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_16px_rgba(0,0,0,0.12)]"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <nav ref={mobileMenuRef} id="mobile-nav" className="absolute top-full left-0 right-0 mt-2 p-1.5 bg-white/90 dark:bg-[#121212]/90 backdrop-blur-2xl border border-white/40 dark:border-white/10 rounded-2xl shadow-xl flex flex-col gap-0.5 xl:hidden max-h-[calc(100dvh-80px)] overflow-y-auto" aria-label="Mobile navigation">
              <a href="https://arxiv.org" target="_blank" rel="noopener noreferrer" className={mobileSocialLinkClass}>
                <FileText size={20} />
                ArXiv
              </a>
              <a href="https://news.ycombinator.com" target="_blank" rel="noopener noreferrer" className={mobileSocialLinkClass}>
                <HackerNewsIcon size={20} />
                Hacker News
              </a>
              <a href="https://huggingface.co" target="_blank" rel="noopener noreferrer" className={mobileSocialLinkClass}>
                <HuggingFaceIcon size={20} />
                Hugging Face
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={mobileSocialLinkClass}>
                <LinkedInIcon size={20} />
                LinkedIn
              </a>
              <a href="https://reddit.com" target="_blank" rel="noopener noreferrer" className={mobileSocialLinkClass}>
                <RedditIcon size={20} />
                Reddit
              </a>
            </nav>
          )}
        </header>

        <main id="main-content">
          {/* ═══ GROUP 1: Hero + Throughput ═══
               Single parent trigger — everything cascades from the cube animation.
               Cube finishes ~1s. Hero starts at 0.6s (overlapping cube's tail end). */}
          <AnimatedSection className="space-y-10 sm:space-y-12" delay={0}>

            {/* Hero Title — starts early so it's settled by the time cube finishes */}
            <AnimatedSection className="my-12 sm:my-16 flex flex-col items-center text-center" delay={0.6} useParentTrigger={true}>
              <h1 className="text-[clamp(40px,6vw,80px)] font-extrabold leading-[1.02] tracking-[-0.02em] max-w-5xl">
                <span className="block bg-gradient-to-r from-[#FF5100] via-[#ff8800] to-[#FF5100] bg-[length:200%_auto] animate-shimmer bg-clip-text text-transparent drop-shadow-none dark:drop-shadow-[0_0_16px_rgba(255,81,0,0.3)] pb-[0.2em] -mb-[0.2em]">Lower Latency</span>
                <span className="block text-[#171717] dark:text-white">Higher Throughput</span>
              </h1>
            </AnimatedSection>

            {/* Throughput Title — lands as hero text settles */}
            <div className="space-y-6 sm:space-y-8">
              <AnimatedSection className="text-center" delay={0.95} useParentTrigger={true}>
                <h2 className="text-[22px] sm:text-[32px] font-bold text-[#171717] dark:text-white mb-2 tracking-[0.015em]">
                  Throughput Benchmarks
                </h2>
              </AnimatedSection>

              {/* Throughput Cards — domino stagger */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <BarChart title="Node.js - o200k" data={nodeSpeedData} unit="MB/s" delay={1.15} useParentTrigger={true} />
                <BarChart title="Python - o200k" data={pythonSpeedData} unit="MB/s" delay={1.35} useParentTrigger={true} />
                <BarChart title="Rust - o200k" data={rustSpeedData} unit="MB/s" delay={1.55} useParentTrigger={true} />
                <AnimatedSection className="col-span-full mt-1 sm:mt-3 text-center" delay={1.75} useParentTrigger={true}>
                  <p className="text-[12px] sm:text-[13px] text-gray-500 dark:text-gray-400 tracking-[0.015em] opacity-90">
                    Note: Values are o200k-only per runtime; harness details still differ by suite.
                  </p>
                </AnimatedSection>
              </div>
            </div>
          </AnimatedSection>

          {/* ═══ GROUP 2: Latency Benchmarks ═══
               Own scroll trigger — fires when this section enters the viewport */}
          <AnimatedSection className="space-y-6 sm:space-y-8 mt-10 sm:mt-12" delay={0}>
            <AnimatedSection className="text-center" delay={0.1} useParentTrigger={true}>
              <h2 className="text-[22px] sm:text-[32px] font-bold text-[#171717] dark:text-white mb-2 tracking-[0.015em]">
                Latency Benchmarks
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <BarChart title="Node.js - o200k" data={nodeLatencyData} unit="ms" delay={0.3} useParentTrigger={true} />
              <BarChart title="Python - o200k" data={pythonLatencyData} unit="ms" delay={0.5} useParentTrigger={true} />
              <BarChart title="Rust - o200k" data={rustLatencyData} unit="ms" delay={0.7} useParentTrigger={true} />
              <AnimatedSection className="col-span-full mt-1 sm:mt-3 text-center" delay={0.9} useParentTrigger={true}>
                <p className="text-[12px] sm:text-[13px] text-gray-500 dark:text-gray-400 tracking-[0.015em] opacity-90">
                  Note: Values are best (minimum) p99 latency per listed implementation under o200k.
                </p>
              </AnimatedSection>
            </div>
          </AnimatedSection>

          {/* ═══ GROUP 3: Video Section ═══
               Own scroll trigger */}
          <AnimatedSection className="pt-8 sm:pt-10" delay={0.1}>
            <div className="border border-gray-200/80 dark:border-white/10 rounded-[24px] p-5 md:p-6 bg-white dark:bg-[#121212]/60 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
              <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6 lg:gap-8 items-center">
                {/* Video Thumbnail */}
                <a
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full aspect-video rounded-[24px] overflow-hidden shadow-lg group block border border-white/20 dark:border-white/10"
                >
                  <img
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80"
                    alt="Talifun Tokenizer launch walkthrough video thumbnail showing benchmark presentation"
                    loading="lazy"
                    width="1200"
                    height="675"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </a>

                {/* Text Content */}
                <div className="flex flex-col items-start lg:pl-4">
                  <h2 className="text-[32px] sm:text-[40px] font-bold text-[#171717] dark:text-white mb-4 sm:mb-6 leading-[1.1] tracking-[0.015em]">
                    Watch the launch walkthrough
                  </h2>
                  <p className="text-[16px] sm:text-[18px] text-gray-600 dark:text-gray-400 mb-8 leading-relaxed tracking-[0.015em] w-full pr-0 max-w-xl">
                    This overview explains the benchmark framing, methodology guardrails, and how to assess throughput and latency tradeoffs before private technical evaluation.
                  </p>
                  <a
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex justify-between items-center gap-4 px-6 py-4 sm:px-8 sm:py-5 rounded-full bg-[#171717] dark:bg-[#121212]/60 backdrop-blur-xl border border-[#171717] dark:border-white/10 text-[15px] sm:text-[16px] font-medium tracking-[0.015em] text-white hover:text-[#FF5100] dark:hover:text-[#FF5100] hover:bg-black dark:hover:bg-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.15)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.12)] w-full"
                  >
                    Watch the launch video
                    <div className="flex shrink-0 items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#FF5100]/20 text-[#FF5100] group-hover:bg-[#FF5100] group-hover:text-white">
                      <Play size={16} className="fill-current ml-0.5" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </main>
      </div>

      {/* Footer */}
      <footer className="w-full border-t border-gray-200/80 dark:border-white/10 mt-12 sm:mt-16">
        <div className="py-8 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-center items-center gap-3 max-w-[1400px] mx-auto opacity-70">
          <Logo static={true} className="h-5 sm:h-6 w-auto text-[#171717] dark:text-gray-400 grayscale" />
          <div className="h-3.5 w-px bg-gray-400 dark:bg-gray-500 hidden sm:block"></div>
          <span className="text-[12px] sm:text-[14px] text-gray-500 dark:text-gray-400 font-medium whitespace-nowrap">
            © {new Date().getFullYear()}. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
