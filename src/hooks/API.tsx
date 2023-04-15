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
    fetchApi();
  }, []);

  return { loading, data };
};

export default useApi;
