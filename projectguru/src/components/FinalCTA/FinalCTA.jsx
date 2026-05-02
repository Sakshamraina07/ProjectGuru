import { getTelegramLink } from '@/lib/constants';
import styles from './FinalCTA.module.css';

export default function FinalCTA() {
  return (
    <section className={styles.finalCta}>
      <div className={styles.bgPattern}></div>
      <div className={styles.content}>
        <h2 className={styles.title}>Stop stressing. Start submitting.</h2>
        <p className={styles.subtitle}>
          Your final year is hard enough. Don&apos;t let your project be the reason you can&apos;t sleep at night. Talk to us, the first consultation is free, no pressure to buy.
        </p>
        <a
          href={getTelegramLink('final_cta')}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButton}
        >
          Book Free Consultation Now
        </a>
        <p className={styles.miniText}>
          Slots fill fast near submission season. Lock yours today.
        </p>
      </div>
    </section>
  );
}