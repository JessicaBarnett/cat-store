import { useEffect, useState } from 'react';
import { Product } from '@customtypes/Product';

type useSearchParams = {
  query: string
}

export default function useSearch({ query }: useSearchParams) {
  const [productResults, setProductResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    (async () => {

      try {
        setIsLoading(true);
        const resp = await fetch(`http://localhost:2222/products?q=${query}`);
        const data = await resp.json();
        setProductResults(data);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setProductResults([]);
        setIsLoading(false);
      }
    })();
  }, [query]);

  return {
    isLoading,
    productResults,
    error
  };
}
