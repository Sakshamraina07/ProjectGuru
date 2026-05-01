import { CheckCircle2 } from 'lucide-react';
import { solutionPoints, howItWorks } from '@/data/features';
import styles from './Solution.module.css';

export default function Solution() {
  return (
    <section className={styles.solution} id="how-it-works">
      <div className="container">
        <div className={styles.solutionContent}>

          <div className={styles.solutionText}>
            <span className="section-tag">The ProjectGuru Way</span>
            <h2 className={styles.solutionTitle}>
              We don&apos;t just hand you a project.
              <br />
              We make you <span className={styles.highlight}>project-ready.</span>
            </h2>
            <p className={styles.solutionPara}>
              Forget those copy-paste websites that disappear after delivery. ProjectGuru is built different — we pair you with a <strong>real mentor</strong> who teaches you the project, builds it WITH you, and prepares you for viva like you&apos;ve been working on it for months.
            </p>

            <ul className={styles.solutionList}>
              {solutionPoints.map((point, i) => (
                <li key={i}>
                  <CheckCircle2 size={18} className={styles.checkIcon} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.solutionVisual}>
            <h3 className={styles.visualTitle}>How It Works</h3>
            {howItWorks.map((step) => (
              <div key={step.step} className={styles.stepCard}>
                <div className={styles.stepNum}>{step.step}</div>
                <div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}