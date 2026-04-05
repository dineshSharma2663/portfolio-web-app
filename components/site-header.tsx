"use client";

import { AnimatePresence, motion } from "framer-motion";
import { type MouseEvent, useEffect, useRef, useState } from "react";
import { InteractiveButton, InteractiveLink } from "@/components/interactive-button";
import { portfolioData } from "@/data/portfolio";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileLayout, setIsMobileLayout] = useState(false);
  const navItems = portfolioData.navigation.filter((item) => item.visible);
  const scrollTimerRef = useRef<number | null>(null);
  const shellRef = useRef<HTMLDivElement | null>(null);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 720px)");
    const syncLayout = (event?: MediaQueryListEvent) => {
      const matches = event?.matches ?? mediaQuery.matches;
      setIsMobileLayout(matches);
      if (!matches) {
        setIsOpen(false);
      }
    };

    syncLayout();
    mediaQuery.addEventListener("change", syncLayout);

    return () => {
      mediaQuery.removeEventListener("change", syncLayout);
      if (scrollTimerRef.current !== null) {
        window.clearTimeout(scrollTimerRef.current);
      }
    };
  }, []);

  const scrollToSection = (href: string) => {
    const target = document.querySelector<HTMLElement>(href);
    if (!target) {
      window.location.hash = href;
      return;
    }

    const headerOffset = (shellRef.current?.offsetHeight ?? 96) + 12;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: "smooth",
    });
    window.history.replaceState(null, "", href);
  };

  const handleNavSelection = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.startsWith("#")) {
      closeMenu();
      return;
    }

    event.preventDefault();
    if (scrollTimerRef.current !== null) {
      window.clearTimeout(scrollTimerRef.current);
      scrollTimerRef.current = null;
    }

    if (isMobileLayout) {
      closeMenu();
      scrollTimerRef.current = window.setTimeout(() => {
        scrollToSection(href);
        scrollTimerRef.current = null;
      }, 260);
      return;
    }

    scrollToSection(href);
  };

  return (
    <div className="site-header-shell" ref={shellRef}>
      <header className={`site-header ${isOpen ? "menu-open" : ""}`}>
        <div className="header-main">
          <InteractiveLink href="#home" className="brand-mark" onClick={closeMenu}>
            <span className="brand-accent" aria-hidden="true" />
            <span className="brand-copy">
              <strong>{portfolioData.profile.fullName}</strong>
              <span>{portfolioData.profile.headline}</span>
            </span>
          </InteractiveLink>

          {!isMobileLayout ? (
            <nav className="nav-links nav-links-desktop" aria-label="Primary">
              {navItems.map((item) => (
                <InteractiveLink
                  key={item.href}
                  href={item.href}
                  className="nav-link"
                  onClick={(event) => handleNavSelection(event, item.href)}
                >
                  {item.label}
                </InteractiveLink>
              ))}
            </nav>
          ) : (
            <InteractiveButton
              className="menu-toggle"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsOpen((open) => !open)}
            >
              <span
                className={`menu-toggle-bar ${isOpen ? "is-open" : ""}`}
                aria-hidden="true"
              />
              <span
                className={`menu-toggle-bar ${isOpen ? "is-open" : ""}`}
                aria-hidden="true"
              />
              <span
                className={`menu-toggle-bar ${isOpen ? "is-open" : ""}`}
                aria-hidden="true"
              />
            </InteractiveButton>
          )}
        </div>

        <AnimatePresence initial={false}>
          {isMobileLayout && isOpen ? (
            <motion.nav
              id="mobile-navigation"
              className="nav-links-mobile"
              aria-label="Mobile"
              initial={{ opacity: 0, height: 0, y: -8 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mobile-nav-grid">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ delay: index * 0.03, duration: 0.2 }}
                  >
                    <InteractiveLink
                      href={item.href}
                      className="nav-link mobile-nav-link"
                      onClick={(event) => handleNavSelection(event, item.href)}
                    >
                      {item.label}
                    </InteractiveLink>
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </header>
    </div>
  );
}
