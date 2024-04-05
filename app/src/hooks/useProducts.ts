import { useEffect, useState } from 'react';
import { Product } from '../types/Product';
// import useCategories from './useCategories';
//
// type useProductsParams = {
//   category?: string,
//   query?: string
// }

export default function useProducts(/*{ category, query }: useProductsParams*/) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    (async () => {
      // let urlComponents = ['http://localhost:2222/products'];

      // // http://localhost:2222/products?category=006
      // // http://localhost:2222/products?q=mouse

      // if (category || query) {
      //   urlComponents.push('?');
      // }

      // if (category) {
      //   urlComponents.push(`category=${category}`)

      // }

      try {
        setIsLoading(true);
        const resp = await fetch('http://localhost:2222/products');
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
