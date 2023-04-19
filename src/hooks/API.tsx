import { useEffect, useState } from 'react';
import { bobaList, toppingsList, milkList } from 'assets/sampleBobaAPI';
import { ErrorProps } from 'types/common/main';

const useApi = (url: string, endpoint: string) => {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>();
  const [error, setError] = useState<ErrorProps>({ status: 0, message: '' });
  const [loading, setLoading] = useState<boolean>(true);
  const fetchApi = () => {
    const fullurl = url + endpoint;
    if (process.env.NODE_ENV === 'development') {
      fetch(fullurl)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else if (response == undefined) {
            throw { status: 503, message: 'You forget to turn on backend server...tsk tsk' };
          } else {
            throw { status: response.status, message: response.statusText };
          }
        })
        .then((json) => {
          setData(json);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
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
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return { data, error, loading };
};

export default useApi;
