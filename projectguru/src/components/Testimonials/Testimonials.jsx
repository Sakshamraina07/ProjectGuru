import { Star } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  return (
    <section className={styles.testimonials} id="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Student Stories</span>
          <h2 className="section-title">From &quot;I&apos;ll fail&quot; to &quot;Viva cleared!&quot;</h2>
          <p className="section-sub">
            Real students. Real results. Real relief on viva day. Here&apos;s what they have to say:
          </p>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((t) => (
            <div key={t.id} className={styles.testimonialCard}>
              <div className={styles.stars}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className={styles.testimonialText}>{t.text}</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>{t.avatar}</div>
                <div className={styles.authorInfo}>
                  <h4>{t.name}</h4>
                  <p>{t.course}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}