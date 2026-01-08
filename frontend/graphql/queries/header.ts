import { gql } from 'graphql-request';
import { fetchGraphQL } from '../fetcher';
import { HeaderResponse } from '@/types/header.interface';

export const headerQuery = async (): Promise<HeaderResponse> => {
  const query = gql`
    query Header {
      header {
        logo {
          alternativeText
          height
          url
          width
        }
        topBar {
          phoneNumber
          email
          phoneIcon {
            alternativeText
            height
            url
            width
          }
          emailIcon {
            alternativeText
            height
            width
            url
          }
          socialLinks {
            label
            url
            icon {
              alternativeText
              height
              url
              width
            }
            hoverIcon {
              alternativeText
              height
              url
              width
            }
          }
        }
        mainMenu {
          id
          text
          href
          isInternal
          icon {
            alternativeText
            height
            url
            width
          }
          subMenu {
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
      }
    }
  `;

  return fetchGraphQL<HeaderResponse>(query, undefined, 'Header');
};
