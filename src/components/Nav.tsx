"use client";

import { useEffect, useRef, useState } from "react";
import { Brand } from "./Brand";
import { Close, Instagram, Menu } from "./Icons";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const menuDialog = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const trigger = menuButton.current;
    const backgroundElements = document.querySelectorAll<HTMLElement>(
      ".nav-inner, main, .site-footer, .floating-book",
    );
    backgroundElements.forEach((element) => element.setAttribute("inert", ""));
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = menuDialog.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      backgroundElements.forEach((element) => element.removeAttribute("inert"));
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      trigger?.focus();
    };
  }, [open]);

  return (
    <header
      className={cn(
        "site-header",
        scrolled && "site-header--scrolled",
      )}
    >
      <nav className="site-container nav-inner" aria-label="Primary navigation">
        <a href="#main-content" aria-label="Blessed Hair Studio home">
          <Brand compact />
        </a>

        <ul className="nav-links">
          {site.nav.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a
            className="nav-instagram"
            href={site.social[0].href}
            target="_blank"
            rel="noreferrer"
            aria-label={site.social[0].label}
          >
            <Instagram />
          </a>
          <a className="button button--red nav-book" href="#book">
            Book now
          </a>
          <button
            ref={menuButton}
            type="button"
            className="menu-trigger"
            aria-label="Open menu"
            aria-controls="mobile-navigation"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <Menu />
          </button>
        </div>
      </nav>

      {open && (
        <div
          ref={menuDialog}
          id="mobile-navigation"
          className="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="mobile-menu__top">
            <Brand compact />
            <button
              ref={closeButton}
              type="button"
              className="menu-trigger mobile-menu__close"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <Close />
            </button>
          </div>

          <ul className="mobile-menu__links">
            {site.nav.map((item, index) => (
              <li key={item.href}>
                <span>0{index + 1}</span>
                <a href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-menu__footer">
            <a className="button button--red" href="#book" onClick={() => setOpen(false)}>
              Choose your barber
            </a>
            <a href={site.social[0].href} target="_blank" rel="noreferrer">
              {site.brand.instagramHandle}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
