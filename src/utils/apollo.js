import {
  useQuery as useQueryBase,
  useLazyQuery as useLazyQueryBase,
} from '@apollo/client';

// Should act the same as the regular "useQuery", but with an extra flag
// "inCache" for cases where we are waiting for a new response
// but we have old data to show:
export const useQuery = (query, options = {}) => {
  const result = useQueryBase(query, {
    notifyOnNetworkStatusChange: true,
    ...options,
  });

  return {
    ...result,
    inCache: checkIfInCache(query, result),
  };
}

export const useLazyQuery = (query, options) => {
  const [getData, result] = useLazyQueryBase(query, {
    notifyOnNetworkStatusChange: true,
    ...options,
  });

  return [
    getData,
    {
      ...result,
      inCache: checkIfInCache(query, result),
    },
  ];
}

const checkIfInCache = (query, { loading, client, variables }) => {
  if (loading) {
    try {
      return Boolean(client.readQuery({ query, variables }));

    } catch (error) {
      return false;
    }
  }
}
