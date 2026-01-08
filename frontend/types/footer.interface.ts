export interface Media {
  alternativeText?: string;
  height?: number;
  width?: number;
  url: string;
}

export interface FooterLinkItem {
  id: string;
  text: string;
  href?: string;
  isInternal?: boolean;
  target?: string;
  icon?: Media | null;
}

export interface FooterLinksSection {
  __typename: 'ComponentVandanFoodFooterSection';
  title: string;
  links: FooterLinkItem[];
}

export interface FooterContactItem {
  content: string;
  link?: string | null;
  icon?: Media | null;
}

export interface FooterContactSection {
  __typename: 'ComponentVandanFoodContactSection';
  id: string;
  title: string;
  items: FooterContactItem[];
}

export type FooterColumn = FooterLinksSection | FooterContactSection;

export interface FooterData {
  logo?: Media | null;
  description?: string | null;
  columns: FooterColumn[];
  copyrightText?: string | null;
}

export interface FooterResponse {
  footer: FooterData;
}
