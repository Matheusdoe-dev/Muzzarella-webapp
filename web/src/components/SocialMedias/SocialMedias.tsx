import { memo } from "react";
import Image from "next/image";

import { SOCIAL_MEDIAS_OPTIONS } from "@/constants";

import styles from "./SocialMedias.module.scss";

const SocialMedias = () => {
  const socialMediasOptions = () =>
    SOCIAL_MEDIAS_OPTIONS.map(({ url, iconUrl, alt, width, height }) => (
      <li key={alt}>
        <a href={url} target="_BLANK">
          <Image
            src={iconUrl}
            alt={alt}
            width={width}
            height={height}
            sizes="fixed"
          />
        </a>
      </li>
    ));

  return (
    <ul data-testid="social-medias" className={styles.socialMediasList}>
      {socialMediasOptions()}
    </ul>
  );
};

export default memo(SocialMedias);
