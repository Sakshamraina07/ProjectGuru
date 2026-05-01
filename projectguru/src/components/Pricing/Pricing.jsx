import * as Icons from 'lucide-react';
import { pricingPlans } from '@/data/pricing';
import styles from './Pricing.module.css';

export default function Pricing() {
  const getCardClass = (popular) => {
    return popular ? styles.pricingCardPopular : styles.pricingCard;
  };

  const getButtonClass = (plan) => {
    if (plan.popular) return styles.btnPlanWhite;
    if (plan.ctaStyle === 'primary') return styles.btnPlanPrimary;
    return styles.btnPlanOutline;
  };

  return (
    <section className={styles.pricing} id="pricing">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Pricing</span>
          <h2 className="section-title">Pick the support level that fits you</h2>
          <p className="section-sub">
            3 plans, same quality of project, different levels of mentorship. Choose based on how much hand-holding you need.
          </p>
        </div>

        <div className={styles.pricingGrid}>
          {pricingPlans.map((plan) => {
            const Icon = Icons[plan.icon];
            return (
              <div key={plan.id} className={getCardClass(plan.popular)}>
                {plan.popular ? (
                  <span className={styles.popularTag}>{plan.badge}</span>
                ) : null}

                <div className={styles.planHeader}>
                  <div className={styles.planIcon}>
                    <Icon size={24} strokeWidth={2} />
                  </div>
                  <h3 className={styles.planName}>{plan.name}</h3>
                </div>
                
                <p className={styles.planDesc}>{plan.description}</p>

                <div className={styles.price}>
                  <div className={styles.priceAmount}>{plan.priceLabel}</div>
                  <div className={styles.pricePeriod}>{plan.period}</div>
                  <div className={styles.priceNote}>{plan.note}</div>
                </div>

                <ul className={styles.planFeatures}>
                  {plan.features.map((feature, i) => (
                    <li key={i}>
                      <Icons.CheckCircle2 size={16} className={styles.checkMark} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a href="#contact" className={getButtonClass(plan)}>
                  {plan.cta}
                </a>
              </div>
            );
          })}
        </div>

        <p className={styles.consultLine}>
          Confused which plan to pick?{' '}
          <a href="#contact" className={styles.consultLink}>
            Book a free 15-min consultation
          </a>
        </p>
      </div>
    </section>
  );
}