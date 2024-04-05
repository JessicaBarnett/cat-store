import { useEffect, useState } from 'react';
import { Product } from '../types/Product';

type useProductsParams = {
  category?: string,
  query?: string
}

export default function useProducts({ category, query }: useProductsParams) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    (async () => {
      let url;

      if (category) {
        url = `http://localhost:2222/api/v1/products/${category}`;
      } else if (query) {
        url = `http://localhost:2222/api/v1/products?q=${query}`;
      } else {
        url = 'http://localhost:2222/api/v1/products';
      }

      // TODO: remove me
      console.log(`fetching products for: "${category ?? query ?? 'all products'}" from url: "${url}"`);

      try {
        setIsLoading(true);
        const resp = await fetch(url);
        const data = await resp.json();
        setProducts(data);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setProducts([]);
        setIsLoading(false);
      }
    })();
  }, [category, query]);

  return {
    isLoading,
    products,
    error
  };
}
