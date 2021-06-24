import {
  useQuery as useQueryBase,
} from '@apollo/client';

// Should act the same as the regular "useQuery", but with an extra flag
// "inCache" for cases where we are waiting for a new response
// but we have old data to show:
export const useQuery = (query, options = {}) => {
  const result = useQueryBase(query, {
    notifyOnNetworkStatusChange: true,
    ...options,
  });

  let inCache = true;
  if (result.loading) {
    try {
      inCache = Boolean(result.client.readQuery({
        query: query,
        variables: result.variables
      }));

    } catch (error) {
      inCache = false;
    }
  }

  return { ...result, inCache };
}
