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
    isInternal: Schema.Attribute.Boolean;
    target: Schema.Attribute.Enumeration<['_self', '_blank']>;
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

export interface VandanFoodTitle extends Struct.ComponentSchema {
  collectionName: 'components_vandan_food_titles';
  info: {
    displayName: 'Title';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'vandan-food.banner': VandanFoodBanner;
      'vandan-food.card': VandanFoodCard;
      'vandan-food.content-block': VandanFoodContentBlock;
      'vandan-food.description': VandanFoodDescription;
      'vandan-food.head-line': VandanFoodHeadLine;
      'vandan-food.hero': VandanFoodHero;
      'vandan-food.image': VandanFoodImage;
      'vandan-food.link': VandanFoodLink;
      'vandan-food.promo': VandanFoodPromo;
      'vandan-food.title': VandanFoodTitle;
    }
  }
}
