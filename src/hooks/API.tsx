import { useEffect, useState } from 'react';

const useApi = (url: string) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const fetchApi = () => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setData(json);
      })
      .catch((err) => {
        setError(true);
      });
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return { data, error };
};

export default useApi;
