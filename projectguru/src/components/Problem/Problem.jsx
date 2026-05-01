import * as Icons from 'lucide-react';
import { problems } from '@/data/problems';
import styles from './Problem.module.css';

export default function Problem() {
  return (
    <section className={styles.problem}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">The Real Problem</span>
          <h2 className="section-title">Sound familiar? You&apos;re not alone.</h2>
          <p className="section-sub">
            Every year, lakhs of students face the same nightmare. Here&apos;s what you&apos;re probably going through right now:
          </p>
        </div>

        <div className={styles.problemGrid}>
          {problems.map((item) => {
            const Icon = Icons[item.icon];
            return (
              <div key={item.id} className={styles.problemCard}>
                <div className={styles.problemIcon}>
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}