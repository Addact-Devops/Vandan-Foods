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
  crumbs?: Crumb[];
}

export interface ContentRenderProps {
  typeOfHeading?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  headlineArrData?: HeadlineData[];
}

export interface HeadlineData {
  id?: string;
  title?: string;
  description?: string;
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

export interface IconProps {
  className?: string;
  ref?: React.Ref<SVGCircleElement>;
}
