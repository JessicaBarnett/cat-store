import { useEffect, useState } from 'react';
import { NavItemData } from '@customtypes/NavItemData';

export default function useNavigation() {
  const [navigation, setNavigation] = useState<NavItemData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>();


  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const resp = await fetch('http://localhost:2222/navigation');
        const data = await resp.json();
        setNavigation(data);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setNavigation([]);
        setIsLoading(false);
      }
    })();
  }, []);

  return {
    isLoading,
    navigation,
    error
  };
}
