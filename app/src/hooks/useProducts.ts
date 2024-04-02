
import { useEffect, useState } from 'react';
import { Product } from '../types/Product';

export default function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const resp = await fetch('http://localhost:3000/products');
        const data = await resp.json();
        setProducts(data);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setProducts([]);
        setIsLoading(false);
      }
    })();
  }, []);

  return {
    isLoading,
    products,
    error
  };
}
