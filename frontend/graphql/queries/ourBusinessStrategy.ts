import { gql } from 'graphql-request';

import { OurBusinessStrategyResponse } from '@/types/pages/ourBusinessStrategy.interface';
import { fetchGraphQL } from '../fetcher';

export const ourBusinessStrategyQuery = async (): Promise<OurBusinessStrategyResponse> => {
  const query = gql`
    query OurBusinessStrategy {
      ourBusinessStrategy {
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
        headLine {
          id
          title
          description
        }
      }
    }
  `;

  const data = await fetchGraphQL<OurBusinessStrategyResponse>(
    query,
    undefined,
    'OurBusinessStrategy',
  );
  return data;
};
