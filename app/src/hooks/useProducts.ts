import { useEffect, useState } from 'react';
import { Product } from '../types/Product';

type useProductsParams = {
  categoryName?: string,
  query?: string,
  productId?: string
}

type useProductsReturn = {
  isLoading: boolean
  products?: Product[],
  product?:  Product,
  error: unknown
}

export default function useProducts({ categoryName, query, productId }: useProductsParams): useProductsReturn {
  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    (async () => {
      let url;

      if (categoryName) {
        url = `http://localhost:2222/api/v1/products/${categoryName}`;
      } else if (query) {
        url = `http://localhost:2222/api/v1/products?q=${query}`;
      } else if (productId) {
        url = `http://localhost:2222/api/v1/products/${productId}`;
      } else {
        url = 'http://localhost:2222/api/v1/products';
      }

      // TODO: remove me
      console.log(`fetching product(s) for: "${categoryName ?? query ?? productId ?? 'all products'}" from url: "${url}"`);

      try {
        setIsLoading(true);
        const resp = await fetch(url);
        const data = await resp.json();
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          setProduct(data)
        }

        setIsLoading(false);
      } catch (err) {
        setError(err);
        setProducts([]);
        setIsLoading(false);
      }
    })();
  }, [categoryName, query, productId]);

  return {
    isLoading,
    products,
    product,
    error
  };
}
