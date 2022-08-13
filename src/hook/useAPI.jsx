import {useEffect, useState} from 'react';
import products from '../Data/products';


export const useAPI = (query) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${query}`);
        console.log(query)
        const json = await response.json();
        
        setData(json);
        // setData(products);

        //delay the loading3
        setTimeout(() => {
          setLoading(false);
        }, 3000);

      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  } , [query]);
  return {data, loading, error, setData};
}