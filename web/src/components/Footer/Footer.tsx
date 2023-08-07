import { memo } from "react";

import { Logo, NavOptions, SocialMedias } from "@/components";

import { FOOTER_SITEMAP_OPTIONS, OUR_CONTACTS_OPTIONS } from "@/constants";

import styles from "./Footer.module.scss";

const Footer = () => {
  const ourContacts = () =>
    OUR_CONTACTS_OPTIONS.map((contact) => (
      <li className={styles.footerContactOption}>{contact}</li>
    ));

  return (
    <footer data-testid="footer" className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerFirstRow}>
          <section>
            <h3 className={styles.footerTitles}>Sitemap</h3>
            <nav>
              <ul className={styles.footerSitemapList}>
                <NavOptions options={FOOTER_SITEMAP_OPTIONS} />
              </ul>
            </nav>
          </section>

          <section>
            <h3 className={styles.footerTitles}>Our contacts</h3>
            <ul className={styles.footerSitemapList}>{ourContacts()}</ul>
          </section>

          <section>
            <Logo />
            <SocialMedias />
          </section>
        </div>

        <section className={styles.footerCopy}>
          <p className={styles.footerCopyText}>
            Made by{" "}
            <a
              href="https://github.com/matheusdoedev"
              className={styles.footerCopyTextLink}
            >
              @matheusdoedev
            </a>{" "}
            | Muzzarella 2023 @ All rights reserved
          </p>
        </section>
      </div>
    </footer>
  );
};

export default memo(Footer);
