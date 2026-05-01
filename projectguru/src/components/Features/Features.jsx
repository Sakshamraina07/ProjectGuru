import * as Icons from 'lucide-react';
import { features } from '@/data/features';
import styles from './Features.module.css';

export default function Features() {
  return (
    <section className={styles.features} id="features">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">What You Get</span>
          <h2 className="section-title">Everything you need to ace your final year project</h2>
          <p className="section-sub">
            Mentorship, code, documentation, viva prep — sab kuch ek jagah. No more juggling between random tutorials and Telegram groups.
          </p>
        </div>

        <div className={styles.featuresGrid}>
          {features.map((feature) => {
            const Icon = Icons[feature.icon];
            return (
              <div key={feature.id} className={styles.featureCard}>
                <div className={styles.featureIconWrap}>
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}