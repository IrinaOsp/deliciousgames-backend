import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsVideo extends Schema.Component {
  collectionName: 'components_components_videos';
  info: {
    displayName: 'video';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

export interface ComponentsTechInfo extends Schema.Component {
  collectionName: 'components_components_tech_infos';
  info: {
    displayName: 'TechInfo';
  };
  attributes: {
    dimensions: Attribute.String & Attribute.DefaultTo<'32 \u00D7 23 \u00D7 8'>;
    weight: Attribute.Decimal;
    distributionPackageDimensions: Attribute.String &
      Attribute.DefaultTo<'35 \u00D7 25 \u00D7 50'>;
    packaging: Attribute.Integer & Attribute.DefaultTo<6>;
    distributionPackWeight: Attribute.Decimal & Attribute.DefaultTo<12>;
    ENGeditionEAN: Attribute.Integer;
    CZeditionEAN: Attribute.Integer;
    DEeditionEAN: Attribute.Integer;
  };
}

export interface ComponentsTechData extends Schema.Component {
  collectionName: 'components_components_tech_data';
  info: {
    displayName: 'TechSpecification';
    description: '';
  };
  attributes: {
    playersNumber: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'1-4'>;
    playingTime: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'60-150'>;
    minAge: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<14>;
  };
}

export interface ComponentsRule extends Schema.Component {
  collectionName: 'components_components_rules';
  info: {
    displayName: 'Rule';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    document: Attribute.Media<'files'> & Attribute.Required;
    isBonus: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface ComponentsPrice extends Schema.Component {
  collectionName: 'components_components_prices';
  info: {
    displayName: 'price';
  };
  attributes: {
    currency: Attribute.Enumeration<['EUR', 'CZK']> &
      Attribute.Required &
      Attribute.DefaultTo<'CZK'>;
    price: Attribute.Decimal &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface ComponentsImages extends Schema.Component {
  collectionName: 'components_components_images';
  info: {
    displayName: 'Images';
  };
  attributes: {
    main: Attribute.Media<'images'> & Attribute.Required;
    box: Attribute.Media<'images'> & Attribute.Required;
    background: Attribute.Media<'images'> & Attribute.Required;
    components: Attribute.Media<'images'>;
    sliderImages: Attribute.Media<'images', true>;
    banner: Attribute.Media<'images'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.video': ComponentsVideo;
      'components.tech-info': ComponentsTechInfo;
      'components.tech-data': ComponentsTechData;
      'components.rule': ComponentsRule;
      'components.price': ComponentsPrice;
      'components.images': ComponentsImages;
    }
  }
}
