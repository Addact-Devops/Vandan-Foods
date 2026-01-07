export interface OurBusinessStrategyResponse {
  ourBusinessStrategy: {
    banner: {
      banner: {
        bannerTitle: string;
        bannerImage: {
          alternativeText: string;
          height: number;
          url: string;
          width: number;
        };
      };
    };
    headLine: {
      id: string;
      title: string;
      description: string;
    };
  };
}
