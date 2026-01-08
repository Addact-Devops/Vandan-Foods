import { gql } from 'graphql-request';
import { fetchGraphQL } from '../fetcher';
import { FooterResponse } from '@/types/footer.interface';

export const footerQuery = async (): Promise<FooterResponse> => {
  const query = gql`
    query Footer {
      footer {
        logo {
          alternativeText
          height
          url
          width
        }
        description
        columns {
          __typename

          ... on ComponentVandanFoodFooterSection {
            title
            links {
              id
              text
              href
              isInternal
              target
              icon {
                alternativeText
                height
                url
                width
              }
            }
          }

          ... on ComponentVandanFoodContactSection {
            id
            title
            items {
              content
              link
              icon {
                alternativeText
                height
                url
                width
              }
            }
          }
        }
        copyrightText
      }
    }
  `;

  return fetchGraphQL<FooterResponse>(query, undefined, 'Footer');
};
