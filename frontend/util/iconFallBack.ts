import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

export const getSocialFallbackIcon = (label: string) => {
  switch (label.toLowerCase()) {
    case 'facebook':
      return faFacebookF;
    case 'instagram':
      return faInstagram;
    case 'linkedin':
      return faLinkedinIn;
    case 'youtube':
      return faYoutube;
    default:
      return faFacebookF;
  }
};
