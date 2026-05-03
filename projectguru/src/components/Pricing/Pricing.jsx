import { pricingPlans } from '@/data/pricing';
import { getTelegramLink } from '@/lib/constants';
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
          {pricingPlans.map((plan) => (
            <div key={plan.id} className={getCardClass(plan.popular)}>
              {plan.popular ? (
                <span className={styles.popularTag}>{plan.badge}</span>
              ) : null}

              <h3 className={styles.planName}>{plan.name}</h3>
              <p className={styles.planDesc}>{plan.description}</p>

              <div className={styles.price}>
                <div className={styles.priceAmount}>{plan.priceLabel}</div>
                <div className={styles.pricePeriod}>{plan.period}</div>
                <div className={styles.priceNote}>{plan.note}</div>
              </div>

              <ul className={styles.planFeatures}>
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <span className={styles.checkMark}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={`/checkout?plan=${plan.name}&price=${plan.price}`}
                className={getButtonClass(plan)}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className={styles.consultLine}>
          Confused which plan to pick?{' '}
          <a
            href={getTelegramLink('pricing_consultation')}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.consultLink}
          >
            Book a free 15-min consultation
          </a>
        </p>
      </div>
    </section>
  );
}