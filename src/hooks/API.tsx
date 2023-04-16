import { useEffect, useState } from 'react';
import { bobaList } from 'assets/sampleBobaAPI';

const useApi = (url: string) => {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>();
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const fetchApi = () => {
    if (process.env.NODE_ENV === 'development') {
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          setData(json);
        })
        .catch(() => {
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setData(bobaList);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return { data, error, loading };
};

export default useApi;
