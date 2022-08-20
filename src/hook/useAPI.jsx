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
        const json = await response.json();
        
        setData(json);
        // setData(products);

        //delay the loading
        setTimeout(() => {
          setLoading(false);
        }, 1000);

      } catch (error) {
        setError(error);
        console.log(`the error is ${error}`);
        setLoading(false);
      }
    };
    fetchData();
  } , [query]);
  return {data, loading, error, setData};
}