export interface Media {
  alternativeText?: string;
  height?: number;
  width?: number;
  url: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: Media;
  hoverIcon?: Media;
}

export interface TopBar {
  phoneNumber: string;
  email: string;
  phoneIcon: Media;
  emailIcon: Media;
  socialLinks: SocialLink[];
}

export interface SubMenu {
  id: string;
  text: string;
  href: string;
  isInternal: boolean;
  target?: string;
  icon?: Media;
}

export interface MainMenu {
  id: string;
  text: string;
  href: string;
  isInternal: boolean;
  icon?: Media;
  subMenu?: SubMenu[];
}

export interface HeaderData {
  logo: Media;
  topBar: TopBar;
  mainMenu: MainMenu[];
}

export interface HeaderResponse {
  header: HeaderData;
}
