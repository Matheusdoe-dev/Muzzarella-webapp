import { Button } from "@/components";

import styles from "./CTASection.module.scss";

const CTASection = () => {
  return (
    <section className={styles.ctaSection} data-testid="cta-section">
      <div className={styles.ctaSectionContainer}>
        <article>
          <h2 className={styles.ctaSectionInfoTitle}>Order your pizza now</h2>
          <p className={styles.ctaSectionInfoText}>
            Is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make
          </p>
        </article>
        <Button>Order now</Button>
      </div>
    </section>
  );
};

export default CTASection;
