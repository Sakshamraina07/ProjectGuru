'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getTelegramLink } from '@/lib/constants';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  const navClass = scrolled ? styles.navbar + ' ' + styles.scrolled : styles.navbar;
  const linksClass = mobileOpen ? styles.navLinks + ' ' + styles.mobileOpen : styles.navLinks;

  return (
    <nav className={navClass}>
      <div className={styles.navWrap}>
        <Link href="/" className={styles.logo}>
          ProjectGuru
          <span className={styles.logoDot}>.</span>
        </Link>

        <div className={linksClass}>
          <a href="#features" onClick={(e) => scrollTo(e, '#features')}>Features</a>
          <a href="#pricing" onClick={(e) => scrollTo(e, '#pricing')}>Pricing</a>
          <a href="#testimonials" onClick={(e) => scrollTo(e, '#testimonials')}>Reviews</a>
          <a href="#faq" onClick={(e) => scrollTo(e, '#faq')}>FAQ</a>
          <a
            href={getTelegramLink('navbar_get_started')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Get Started
          </a>
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}