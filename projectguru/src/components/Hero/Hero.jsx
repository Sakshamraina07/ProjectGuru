'use client';

import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
  const scrollTo = (e, target) => {
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } 
    }
  };

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroGrid}>

          <motion.div 
            className={styles.heroContent}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div className={styles.badge} variants={itemVariants}>
              Trusted by 2,000+ Final Year Students
            </motion.div>

            <motion.h1 className={styles.heroTitle} variants={itemVariants}>
              Final Year Project Ka Stress?{' '}
              <span className={styles.highlight}>Hum Hain Na.</span>
            </motion.h1>

            <motion.p className={styles.heroSub} variants={itemVariants}>
              Stop Googling at 2 AM. Stop begging seniors for code. Get a personal mentor who walks with you from <strong>Day 1 to Viva Day</strong> — explaining every line, solving every doubt, until your project is submitted with confidence.
            </motion.p>

            <motion.div className={styles.heroCtaGroup} variants={itemVariants}>
              <a href="#pricing" className="btn btn-primary btn-large" onClick={(e) => scrollTo(e, '#pricing')}>
                Book Free Consultation
              </a>
              <a href="#how-it-works" className="btn btn-secondary btn-large" onClick={(e) => scrollTo(e, '#how-it-works')}>
                See How It Works
              </a>
            </motion.div>

            <motion.div className={styles.heroTrust} variants={itemVariants}>
              <div className={styles.trustAvatars}>
                <div>R</div>
                <div>A</div>
                <div>P</div>
                <div>S</div>
              </div>
              <div className={styles.trustText}>
                <strong>2,000+ students</strong> already passed their viva
                <br />
                <span className={styles.stars}>★★★★★</span> 4.9/5 average rating
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className={styles.heroVisual}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className={styles.floatingCardTop}>
              <div className={styles.floatingIconGreen}>✓</div>
              <div>Viva Cleared!</div>
            </div>

            <div className={styles.floatingCardBottom}>
              <div className={styles.floatingIconOrange}>⚡</div>
              <div>Doubt Solved in 5 min</div>
            </div>

            <div className={styles.chatWindow}>
              <div className={styles.chatHeader}>
                <div className={styles.chatAvatar}>M</div>
                <div className={styles.chatInfo}>
                  <h4>Mentor Rahul</h4>
                  <p>Online now</p>
                </div>
              </div>

              <div className={styles.chatBody}>
                <div className={styles.chatMsgReceived}>
                  Sir, ML algorithm samajh nahi aa raha
                </div>
                <div className={styles.chatMsgSent}>
                  Don&apos;t worry! Let&apos;s hop on a call right now. I&apos;ll explain it line by line
                </div>
                <div className={styles.chatMsgReceived}>
                  Sach mein? Kal viva hai!
                </div>
                <div className={styles.chatMsgSent}>
                  Bilkul. Aur main viva ke liye mock session bhi karwa dunga
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}