import { useEffect, useState } from 'react';
import { Category } from '../types/Category';

export default function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    (async () => {
      try {
        console.log('categories fetch')
        setIsLoading(true);
        const resp = await fetch('http://localhost:2222/categories');
        const data = await resp.json();
        setCategories(data);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setCategories([]);
        setIsLoading(false);
      }
    })();
  }, []);

  return {
    isLoading,
    categories,
    error
  };
}
