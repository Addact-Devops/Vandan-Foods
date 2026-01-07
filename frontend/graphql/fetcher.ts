import { DocumentNode } from 'graphql';
import client from './client';
import { Variables } from 'graphql-request';

/**
 * A generic fetcher function for making GraphQL requests.
 * It centralizes error handling and logging for all GraphQL queries.
 *
 * @param query The GraphQL query or mutation document.
 * @param variables Optional variables for the query.
 * @param queryName An optional name for the query, used for logging.
 * @returns The data from the GraphQL response.
 * @throws Throws an error if the GraphQL request fails.
 */
export const fetchGraphQL = async <T>(
  query: DocumentNode | string,
  variables?: Variables,
  queryName?: string,
): Promise<T> => {
  try {
    const data = await client.request<T>(query, variables);
    return data;
  } catch (error) {
    // Log the error with the query name for easier debugging
    console.error(`GraphQL query '${queryName || 'unnamed'}' failed:`, error);

    // Re-throw the error to be handled by the calling component or a global error boundary
    throw error;
  }
};
