import {useEffect, useState} from 'react';

export const useAPI = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        
        setData(json);

        //delay the loading
        setTimeout(() => {
          setLoading(false);
        }, 2000);

      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  } , [url]);
  return {data, loading, error};
}