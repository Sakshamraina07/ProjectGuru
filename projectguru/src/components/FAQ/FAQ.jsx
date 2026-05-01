'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/data/faqs';
import styles from './FAQ.module.css';

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className={styles.faq} id="faq">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">FAQs</span>
          <h2 className="section-title">Real questions. Real answers.</h2>
          <p className="section-sub">
            Everything you wanted to ask but didn&apos;t know whom to ask. Pick the doubt that hits hardest:
          </p>
        </div>

        <div className={styles.faqList}>
          {faqs.map((item) => {
            const isOpen = openId === item.id;
            const itemClass = isOpen ? styles.faqItemActive : styles.faqItem;

            return (
              <div key={item.id} className={itemClass}>
                <button
                  className={styles.faqQ}
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <div className={styles.faqToggle}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className={styles.faqA}>
                        <p>{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}