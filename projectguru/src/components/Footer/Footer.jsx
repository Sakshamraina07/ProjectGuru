import Link from 'next/link';
import { SITE, SOCIAL, getTelegramLink } from '@/lib/constants';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div className={styles.footerAbout}>
            <div className={styles.logo}>
              {SITE.name}<span className={styles.logoDot}>.</span>
            </div>
            <p>
              India&apos;s most trusted final year project mentorship service.
              Built by ex-students who know your pain.
            </p>
          </div>

          <div className={styles.footerCol}>
            <h4>Product</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#testimonials">Reviews</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div className={styles.footerCol}>
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Become a Mentor</Link></li>
              <li><Link href="/contact">Refund Policy</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className={styles.footerCol}>
            <h4>Connect</h4>
            <ul>
              <li>
                <a
                  href={getTelegramLink('footer')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Telegram
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
              <li>
                <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          © {currentYear} {SITE.name}. Made with love for stressed final-year students. All rights reserved.
        </div>
      </div>
    </footer>
  );
}