import { Check, X } from 'lucide-react';
import { comparison } from '@/data/features';
import styles from './Comparison.module.css';

export default function Comparison() {
  return (
    <section className={styles.comparison}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Why ProjectGuru</span>
          <h2 className="section-title">We&apos;re not another freelancing site.</h2>
          <p className="section-sub">
            Yahaan baat sirf project banane ki nahi — tumhe project samjhaane ki hai. Compare karo aur khud dekho.
          </p>
        </div>

        <div className={styles.compareGrid}>

          <div className={styles.compareCardBad}>
            <h3 className={styles.titleBad}>{comparison.bad.title}</h3>
            <ul>
              {comparison.bad.points.map((point, i) => (
                <li key={i} className={styles.itemBad}>
                  <X size={18} className={styles.iconBad} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.compareCardGood}>
            <h3 className={styles.titleGood}>{comparison.good.title}</h3>
            <ul>
              {comparison.good.points.map((point, i) => (
                <li key={i} className={styles.itemGood}>
                  <Check size={18} className={styles.iconGood} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}