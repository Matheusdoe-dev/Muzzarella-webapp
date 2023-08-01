import Image from "next/image";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div data-testid="home">
      <section className={styles.intro}>
        <h1 className={styles.introTitle}>Muzzarella</h1>
        <p className={styles.introText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </p>
      </section>

      <section className={styles.deliverySystem}>
        <div className={styles.deliverySystemContainer}>
          <article>
            <h2 className={styles.deliverySystemTitle}>
              Our own food order delivery system
            </h2>
            <p className={styles.deliverySystemText}>
              Is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make.
              <br />
              <br /> is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make
            </p>
          </article>
          <Image
            src="/assets/images/home-intro-img.jpg"
            alt="Our own food order delivery system"
            width={474}
            height={374}
          />
        </div>
      </section>

      <section>
        <div>
          <article>
            <h2>Order your pizza now!</h2>
            <p>
              Is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make
            </p>
          </article>

          <button>Order now</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
