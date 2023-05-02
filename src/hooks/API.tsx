import { useEffect, useState } from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_BOBA_LIST } from 'hooks/QueryGraphQL';
import { ErrorProps } from 'types/common/main';
import { bobaList, toppingsList, milkList } from 'assets/sampleBobaAPI';

const useApi = (url: string, endpoint: string) => {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>();
  const [error, setError] = useState<ErrorProps>({ status: 0, message: '' });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const fullurl = url + endpoint;
      const client = new ApolloClient({
        uri: fullurl,
        cache: new InMemoryCache(),
      });

      const fetchData = async () => {
        try {
          const { loading, data } = await client.query({
            query: GET_BOBA_LIST,
          });
          setLoading(loading);
          setData(data);
        } catch (error) {
          setError({ status: 500, message: 'Error' });
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    } else {
      if (endpoint == '/boba_list') {
        setData(bobaList);
      } else if (endpoint == '/toppings_list') {
        setData(toppingsList);
      } else {
        setData(milkList);
      }
      setLoading(false);
    }
  }, [url, endpoint]);

  return { data, error, loading };
};

export default useApi;
