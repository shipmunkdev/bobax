import { useEffect, useState } from 'react';

const useApi = (url: string) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchApi = () => {

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setLoading(false);
        setData(json);
      });
  };

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      setData(require('./bobalist.json'));
      setLoading(false);
    } else {
      fetchApi();
    }
  }, []);

  return { loading, data };
};

export default useApi;
