import { OurBoardOfDirectorResponse } from '@/types/pages/ourBoardOfDirector.interface';
import { gql } from 'graphql-request';
import { fetchGraphQL } from '../fetcher';

export const ourBoardOfDirectorQuery = async (): Promise<OurBoardOfDirectorResponse> => {
  const query = gql`
    query OurBoardOfDirector {
      ourBoardOfDirector {
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
  const data = await fetchGraphQL<OurBoardOfDirectorResponse>(
    query,
    undefined,
    'OurBoardOfDirector',
  );
  return data;
};
