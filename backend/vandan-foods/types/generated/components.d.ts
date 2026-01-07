import type { Schema, Struct } from '@strapi/strapi';

export interface VandanFoodBanner extends Struct.ComponentSchema {
  collectionName: 'components_vandan_food_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    bannerImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    bannerTitle: Schema.Attribute.String;
  };
}

export interface VandanFoodBaseHeading extends Struct.ComponentSchema {
  collectionName: 'components_vandan_food_base_headings';
  info: {
    displayName: 'baseHeading';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface VandanFoodCard extends Struct.ComponentSchema {
  collectionName: 'components_vandan_food_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface VandanFoodContactItem extends Struct.ComponentSchema {
  collectionName: 'components_vandan_food_contact_items';
  info: {
    description: 'Item for contact details with icon';
    displayName: 'Contact Item';
    icon: 'phone';
  };
  attributes: {
    content: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.String;
  };
}

export interface VandanFoodContactSection extends Struct.ComponentSchema {
  collectionName: 'components_vandan_food_contact_sections';
  info: {
    description: 'Section for contact information';
    displayName: 'Contact Section';
    icon: 'address-book';
  };
  attributes: {
    items: Schema.Attribute.Component<'vandan-food.contact-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface VandanFoodContentBlock extends Struct.ComponentSchema {
  collectionName: 'components_vandan_food_content_blocks';
  info: {
    displayName: 'ContentBlock';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'vandan-food.link', false>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface VandanFoodDescription extends Struct.ComponentSchema {
  collectionName: 'components_vandan_food_descriptions';
  info: {
    displayName: 'Description';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface VandanFoodFooterSection extends Struct.ComponentSchema {
  collectionName: 'components_vandan_food_footer_sections';
  info: {
    displayName: 'Footer Section';
    icon: 'layer-group';
  };
  attributes: {
    links: Schema.Attribute.Component<'vandan-food.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface VandanFoodHeadLine extends Struct.ComponentSchema {
  collectionName: 'components_vandan_food_head_lines';
  info: {
    displayName: 'HeadLine';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    title: Schema.Attribute.String;
  };
}

export interface VandanFoodHero extends Struct.ComponentSchema {
  collectionName: 'components_vandan_food_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'vandan-food.link', false>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface VandanFoodImage extends Struct.ComponentSchema {
  collectionName: 'components_vandan_food_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface VandanFoodLink extends Struct.ComponentSchema {
  collectionName: 'components_vandan_food_links';
  info: {
    displayName: 'Link';
    icon: 'briefcase';
  };
  attributes: {
    href: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images'>;
    isInternal: Schema.Attribute.Boolean;
    target: Schema.Attribute.Enumeration<['_self', '_blank']>;
    text: Schema.Attribute.String;
  };
}

export interface VandanFoodMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_vandan_food_menu_items';
  info: {
    displayName: 'MenuItem';
    icon: 'bulletList';
  };
  attributes: {
    href: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images'>;
    isInternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    submenu: Schema.Attribute.Component<'vandan-food.link', true>;
    text: Schema.Attribute.String;
  };
}

export interface VandanFoodPromo extends Struct.ComponentSchema {
  collectionName: 'components_vandan_food_promos';
  info: {
    displayName: 'Promo';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'vandan-food.link', false>;
    title: Schema.Attribute.String;
  };
}

export interface VandanFoodSocialIcon extends Struct.ComponentSchema {
  collectionName: 'components_vandan_food_social_icons';
  info: {
    displayName: 'SocialIcon';
    icon: 'twitter';
  };
  attributes: {
    hoverIcon: Schema.Attribute.Media<'images'>;
    icon: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface VandanFoodTitle extends Struct.ComponentSchema {
  collectionName: 'components_vandan_food_titles';
  info: {
    displayName: 'Title';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface VandanFoodTopBar extends Struct.ComponentSchema {
  collectionName: 'components_vandan_food_top_bars';
  info: {
    displayName: 'TopBar';
    icon: 'layout';
  };
  attributes: {
    email: Schema.Attribute.Email;
    emailIcon: Schema.Attribute.Media<'images'>;
    phoneIcon: Schema.Attribute.Media<'images'>;
    phoneNumber: Schema.Attribute.String;
    socialLinks: Schema.Attribute.Component<'vandan-food.social-icon', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'vandan-food.banner': VandanFoodBanner;
      'vandan-food.base-heading': VandanFoodBaseHeading;
      'vandan-food.card': VandanFoodCard;
      'vandan-food.contact-item': VandanFoodContactItem;
      'vandan-food.contact-section': VandanFoodContactSection;
      'vandan-food.content-block': VandanFoodContentBlock;
      'vandan-food.description': VandanFoodDescription;
      'vandan-food.footer-section': VandanFoodFooterSection;
      'vandan-food.head-line': VandanFoodHeadLine;
      'vandan-food.hero': VandanFoodHero;
      'vandan-food.image': VandanFoodImage;
      'vandan-food.link': VandanFoodLink;
      'vandan-food.menu-item': VandanFoodMenuItem;
      'vandan-food.promo': VandanFoodPromo;
      'vandan-food.social-icon': VandanFoodSocialIcon;
      'vandan-food.title': VandanFoodTitle;
      'vandan-food.top-bar': VandanFoodTopBar;
    }
  }
}
