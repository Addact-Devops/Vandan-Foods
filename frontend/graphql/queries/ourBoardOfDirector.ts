import { gql } from 'graphql-request';
import client from '../client';
import { OurBoardOfDirectorResponse } from '@/types/pages/ourBoardOfDirector.interface';

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
  const data = await client.request(query);
  return data as OurBoardOfDirectorResponse;
};
