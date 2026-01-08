import { gql } from 'graphql-request';
import { fetchGraphQL } from '../fetcher';
import { QualityCertificationResponse } from '@/types/pages/qualityCertification.interface';

export const qualityCertificationQuery = async (): Promise<QualityCertificationResponse> => {
  const query = gql`
    query QualityCertification {
      qualityCertification {
        banner {
          banner {
            bannerTitle
            bannerImage {
              alternativeText
              height
              url
              width
            }
          }
        }
      }
    }
  `;

  const res = await fetchGraphQL<QualityCertificationResponse>(
    query,
    undefined,
    'QualityCertification',
  );

  return res;
};
