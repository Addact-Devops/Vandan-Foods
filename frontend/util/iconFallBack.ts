import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faLocationDot,
  faMobileScreenButton,
  faPhone,
  faUser,
  faWarehouse,
} from '@fortawesome/free-solid-svg-icons';

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

export const getContactFallbackIcon = (content: string) => {
  const text = content.toLowerCase();

  if (text.includes('mobile')) return faMobileScreenButton;
  if (text.includes('phone')) return faPhone;
  if (text.includes('mail')) return faEnvelope;
  if (text.includes('plant')) return faWarehouse;
  if (text.includes('address')) return faLocationDot;

  return faUser;
};
