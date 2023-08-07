import { SocialMediaOption } from "@/interfaces";

const ICONS_WIDTH_AND_HEIGHT = {
  width: 43,
  height: 43,
};

export const SOCIAL_MEDIAS_OPTIONS: SocialMediaOption[] = [
  {
    url: "http://facebook.com",
    iconUrl: "/assets/icons/facebook.svg",
    alt: "Facebook",
    ...ICONS_WIDTH_AND_HEIGHT,
  },
  {
    url: "http://instagram.com",
    iconUrl: "/assets/icons/instagram.svg",
    alt: "Instagram",
    ...ICONS_WIDTH_AND_HEIGHT,
  },
  {
    url: "http://twitter.com",
    iconUrl: "/assets/icons/twitter.svg",
    alt: "Twitter",
    ...ICONS_WIDTH_AND_HEIGHT,
  },
];
