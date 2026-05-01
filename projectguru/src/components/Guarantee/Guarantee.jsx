import * as Icons from 'lucide-react';
import { guarantees } from '@/data/guarantees';
import styles from './Guarantee.module.css';

export default function Guarantee() {
  return (
    <section className={styles.guarantee}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Promises we don&apos;t break.</h2>
          <p className={styles.sub}>
            No fine print. No tricky terms. Yeh hain hamari guarantees, in writing.
          </p>
        </div>

        <div className={styles.guaranteeGrid}>
          {guarantees.map((item) => {
            const Icon = Icons[item.icon];
            return (
              <div key={item.id} className={styles.guaranteeItem}>
                <div className={styles.gIcon}>
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