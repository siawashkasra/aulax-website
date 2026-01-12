"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./FeatureHeroTabs.module.css";

const DURATION_MS = 3500;

const tabs = [
  {
    id: "smart",
    label: "Smart Shopping",
    pill: "Why Aulax?",
    headline: "Shop Smarter, Faster",
    subhead: "Check stock before you go and order ahead so your items are ready when you arrive. No more wasted trips.",
    ctaText: "Explore Feature",
    bg: "radial-gradient(900px circle at 50% 10%, rgba(53,208,127,0.16), transparent 60%), linear-gradient(180deg, #0b1220 0%, #05070c 100%)",
    cardTitle: "Real-time",
    cardDesc: "INVENTORY CHECK",
    icons: ["check", "pin", "bolt"]
  },
  {
    id: "offers",
    label: "Personal Offers",
    pill: "Why Aulax?",
    headline: "Get Recommendations",
    subhead: "Discover personalized offers and recommendations based on your shopping preferences and local market availability.",
    ctaText: "Discover Offers",
    bg: "radial-gradient(900px circle at 50% 10%, rgba(53,208,127,0.2), transparent 60%), linear-gradient(180deg, #0a1520 0%, #04080c 100%)",
    cardTitle: "Personalized",
    cardDesc: "SMART OFFERS",
    icons: ["star", "tag", "gift"]
  },
  {
    id: "gems",
    label: "Local Gems",
    pill: "Why Aulax?",
    headline: "Discover Local Gems",
    subhead: "Explore hidden treasures and unique finds from local businesses in your community.",
    ctaText: "Explore Local",
    bg: "radial-gradient(900px circle at 50% 10%, rgba(53,208,127,0.18), transparent 60%), linear-gradient(180deg, #0c1420 0%, #050a0c 100%)",
    cardTitle: "Discover",
    cardDesc: "LOCAL BUSINESSES",
    icons: ["map", "heart", "sparkle"]
  },
  {
    id: "rewards",
    label: "Earn Rewards",
    pill: "Why Aulax?",
    headline: "Earn Rewards as You Shop",
    subhead: "Get rewarded for supporting local businesses. Earn points, unlock exclusive benefits, and enjoy savings.",
    ctaText: "Start Earning",
    bg: "radial-gradient(900px circle at 50% 10%, rgba(53,208,127,0.19), transparent 60%), linear-gradient(180deg, #0d1520 0%, #060a0c 100%)",
    cardTitle: "Loyalty",
    cardDesc: "REWARDS PROGRAM",
    icons: ["coin", "trophy", "discount"]
  },
  {
    id: "eco",
    label: "Eco Friendly",
    pill: "Why Aulax?",
    headline: "Shop Sustainably",
    subhead: "Make eco-friendly choices with digital receipts and sustainability tracking.",
    ctaText: "Learn More",
    bg: "radial-gradient(900px circle at 50% 10%, rgba(53,208,127,0.17), transparent 60%), linear-gradient(180deg, #0b1520 0%, #05090c 100%)",
    cardTitle: "Sustainable",
    cardDesc: "ECO IMPACT",
    icons: ["leaf", "recycle", "earth"]
  }
];

const iconMap = {
  check: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#35d07f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  pin: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 10L10 17.5M10 2.5V10M10 10L3.333 10M10 10L16.667 10" stroke="#35d07f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  bolt: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M11.667 2.5L5 12.5H10L8.333 17.5L15 7.5H10L11.667 2.5Z" stroke="#35d07f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  star: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2.5L12.5 7.5L18 8.5L14 12.5L15 18L10 15L5 18L6 12.5L2 8.5L7.5 7.5L10 2.5Z" stroke="#35d07f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  tag: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3.333 7.5L10 14.167L16.667 7.5M10 2.5V14.167" stroke="#35d07f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  gift: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 10V17.5M10 10L6.667 6.667M10 10L13.333 6.667M6.667 6.667H3.333L2.5 10H6.667M13.333 6.667H16.667L17.5 10H13.333" stroke="#35d07f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  map: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M17.5 8.333C17.5 13.333 10 17.5 10 17.5C10 17.5 2.5 13.333 2.5 8.333C2.5 5.238 4.975 2.5 10 2.5C15.025 2.5 17.5 5.238 17.5 8.333Z" stroke="#35d07f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 10C11.3807 10 12.5 8.88071 12.5 7.5C12.5 6.11929 11.3807 5 10 5C8.61929 5 7.5 6.11929 7.5 7.5C7.5 8.88071 8.61929 10 10 10Z" stroke="#35d07f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  heart: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M17.5 5.833C17.5 3.333 15.417 1.667 13.333 1.667C11.667 1.667 10.417 2.917 10 3.75C9.583 2.917 8.333 1.667 6.667 1.667C4.583 1.667 2.5 3.333 2.5 5.833C2.5 7.083 3.167 8.75 5 10.833C6.667 12.667 8.75 14.167 10 15C11.25 14.167 13.333 12.667 15 10.833C16.833 8.75 17.5 7.083 17.5 5.833Z" stroke="#35d07f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  sparkle: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2.5L11.25 7.5L16.25 8.75L11.25 10L10 15L8.75 10L3.75 8.75L8.75 7.5L10 2.5Z" stroke="#35d07f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  coin: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="7.5" stroke="#35d07f" strokeWidth="2" />
      <path d="M10 2.5V17.5M17.5 10H2.5" stroke="#35d07f" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  trophy: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M5.833 2.5H14.167V7.5C14.167 9.57107 12.5711 11.167 10.5 11.167H9.5C7.42893 11.167 5.833 9.57107 5.833 7.5V2.5Z" stroke="#35d07f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.833 11.167V15H14.167V11.167M5.833 15H3.333V17.5H16.667V15H14.167" stroke="#35d07f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  discount: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M2.5 5.833L10 2.5L17.5 5.833V10C17.5 14.167 10 17.5 10 17.5C10 17.5 2.5 14.167 2.5 10V5.833Z" stroke="#35d07f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.5 10L12.5 5" stroke="#35d07f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  leaf: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2.5C10 2.5 3.333 5.833 3.333 10.833C3.333 14.167 6.667 17.5 10 17.5C13.333 17.5 16.667 14.167 16.667 10.833C16.667 5.833 10 2.5 10 2.5Z" stroke="#35d07f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 2.5V17.5" stroke="#35d07f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  recycle: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M5.833 12.5L3.333 15L5.833 17.5M14.167 7.5L16.667 5L14.167 2.5M14.167 17.5L16.667 15L14.167 12.5M5.833 2.5L3.333 5L5.833 7.5" stroke="#35d07f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  earth: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="7.5" stroke="#35d07f" strokeWidth="2" />
      <path d="M2.5 10H17.5M10 2.5C12.5 2.5 15 4.167 16.25 7.5M10 2.5C7.5 2.5 5 4.167 3.75 7.5M10 17.5C12.5 17.5 15 15.833 16.25 12.5M10 17.5C7.5 17.5 5 15.833 3.75 12.5" stroke="#35d07f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
};

export default function FeatureHeroTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [prevBg, setPrevBg] = useState(null);
  const [isFading, setIsFading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [clickedTabIndex, setClickedTabIndex] = useState(null);
  const fadeTimeoutRef = useRef(null);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    // Intersection Observer to detect when section is visible
    if (!sectionRef.current) return;

    const checkInitialVisibility = () => {
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const threshold = windowHeight * 0.3;
      const isInView = rect.top < windowHeight - threshold && rect.bottom > threshold;
      
      if (isInView) {
        setIsVisible(true);
        // Reset the animation when section is initially visible
        setResetKey((prev) => prev + 1);
      }
    };

    // Check initial visibility immediately (use setTimeout to ensure DOM is ready)
    setTimeout(checkInitialVisibility, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
          if (entry.isIntersecting) {
            // Reset the animation when section becomes visible
            setResetKey((prev) => prev + 1);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );

    observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const next = () => {
    // Don't advance if reduced motion, not visible, or paused
    if (reducedMotion || !isVisible || isPaused) return;
    
    setActiveIndex((prev) => {
      const nextIndex = (prev + 1) % tabs.length;
      
      // Background crossfade
      setPrevBg(tabs[prev].bg);
      setIsFading(true);
      
      if (fadeTimeoutRef.current) {
        clearTimeout(fadeTimeoutRef.current);
      }
      
      fadeTimeoutRef.current = setTimeout(() => {
        setIsFading(false);
        setPrevBg(null);
      }, 300);
      
      return nextIndex;
    });
    
    setResetKey((prev) => prev + 1);
  };

  const handleTabClick = (index, e) => {
    if (e) {
      e.stopPropagation(); // Prevent event from bubbling to container
    }
    
    // Set clicked tab to show white background persistently
    setClickedTabIndex(index);
    
    // Pause the progress bar
    setIsPaused(true);
    
    if (index === activeIndex) return;
    
    // Background crossfade
    setPrevBg(tabs[activeIndex].bg);
    setIsFading(true);
    
    if (fadeTimeoutRef.current) {
      clearTimeout(fadeTimeoutRef.current);
    }
    
    fadeTimeoutRef.current = setTimeout(() => {
      setIsFading(false);
      setPrevBg(null);
    }, 300);
    
    setActiveIndex(index);
    setResetKey((prev) => prev + 1);
  };

  const handleContainerClick = () => {
    // Resume the progress bar when clicking outside tabs
    if (isPaused) {
      setIsPaused(false);
      setResetKey((prev) => prev + 1); // Restart the progress bar
      // Remove white background from clicked tab since progress resumes
      setClickedTabIndex(null);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleTabClick(index, e);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIndex = (activeIndex - 1 + tabs.length) % tabs.length;
      handleTabClick(prevIndex, e);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIndex = (activeIndex + 1) % tabs.length;
      handleTabClick(nextIndex, e);
    }
  };

  const activeTab = tabs[activeIndex];

  return (
    <section ref={sectionRef} className={styles.section}>
      {/* Background with crossfade */}
      <div 
        className={styles.background}
        style={{ background: activeTab.bg }}
      />
      {prevBg && isFading && (
        <div 
          className={styles.backgroundFade}
          style={{ background: prevBg }}
        />
      )}

      <div ref={containerRef} className={styles.container} onClick={handleContainerClick}>
        {/* Top/Middle Content */}
        <div className={styles.content}>
          {/* Pill Badge */}
          <div className={styles.pill}>
            <span>{activeTab.pill}</span>
          </div>

          {/* Headline */}
          <h1 className={styles.headline}>{activeTab.headline}</h1>

          {/* Subhead */}
          <p className={styles.subhead}>{activeTab.subhead}</p>

          {/* CTA Button */}
          <button className={styles.cta}>
            {activeTab.ctaText}
          </button>

          {/* Glass Card */}
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{activeTab.cardTitle}</h3>
              <p className={styles.cardDesc}>{activeTab.cardDesc}</p>
            </div>
            <div className={styles.cardIcons}>
              {activeTab.icons.map((iconName, idx) => (
                <div key={idx} className={styles.iconChip}>
                  {iconMap[iconName]}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Tabs */}
        <div 
          className={styles.tabList}
          role="tablist"
          aria-label="Feature tabs"
          onClick={(e) => e.stopPropagation()}
        >
          {tabs.map((tab, index) => {
            const isActive = index === activeIndex;
            return (
              <div key={tab.id} className={styles.tabWrapper}>
                <button
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${tab.id}`}
                  id={`tab-${tab.id}`}
                  className={`${styles.tab} ${isActive ? styles.tabActive : ''} ${clickedTabIndex === index ? styles.tabClicked : ''}`}
                  onClick={(e) => handleTabClick(index, e)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  tabIndex={isActive ? 0 : -1}
                >
                  <span className={styles.tabLabel}>{tab.label}</span>
                  {/* Track */}
                  <div className={styles.track} />
                  {/* Progress Bar */}
                  {!reducedMotion && isActive && isVisible && !isPaused && (
                    <div
                      key={`${activeIndex}-${resetKey}`}
                      className={styles.progress}
                      onAnimationEnd={next}
                    />
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* Tab Panel for accessibility */}
        <div
          role="tabpanel"
          id={`panel-${activeTab.id}`}
          aria-labelledby={`tab-${activeTab.id}`}
          className={styles.tabPanel}
        >
          {/* Content is visually displayed above */}
        </div>
      </div>
    </section>
  );
}

