import Link from 'next/link';
import { Code, Send, Briefcase, Mail, MessageCircle } from 'lucide-react';
import { SITE, SOCIAL } from '@/lib/constants';
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
            <p className={styles.footerPara}>
              India&apos;s most trusted final year project mentorship service.
              Built by ex-students who know your pain.
            </p>
            <div className={styles.socialLinks}>
              <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Code size={20} /></a>
              <a href={SOCIAL.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Send size={20} /></a>
              <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Briefcase size={20} /></a>
            </div>
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
            <h4>Contact</h4>
            <ul className={styles.contactList}>
              <li>
                <a href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={16} />
                  <span>WhatsApp Us</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`}>
                  <Mail size={16} />
                  <span>{SITE.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© {currentYear} {SITE.name}. All rights reserved.</p>
          <div className={styles.builtBadge}>
            Built with ❤️ for Indian Students
          </div>
        </div>
      </div>
    </footer>
  );
}