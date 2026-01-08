export interface QualityCertificationResponse {
  qualityCertification: {
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
  };
}
