import { StaticImageData } from 'next/image';

export interface HeroBannerProps {
  heroBannerData: {
    bannerTitle: string;
    bannerImage: {
      alternativeText: string;
      height: number;
      url: string;
      width: number;
    };
  };
}

export interface ContentRenderProps {
  h1?: string;
  h2?: string;
  richText?: string;
}

export interface Crumb {
  label: string;
  href?: string;
  isCurrent?: boolean;
}

export interface BreadCrumbProps {
  crumbs: Crumb[];
  className?: string;
}

export interface ImageBaseProps {
  src: string | StaticImageData;
  alt?: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  width?: number;
  height?: number;
}
