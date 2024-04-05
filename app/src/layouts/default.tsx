import { Outlet } from 'react-router-dom';
import { Header } from '@components/header/Header';
import { Navigation } from '@components/navigation/Navigation';
import { Footer } from '@components/footer/Footer';

import useCategories from '@src/hooks/useCategories';

export const DefaultLayout = () => {
  const { isLoading, categories, error } = useCategories();

  return (
    <main id='main'>
        <Header />
        {isLoading ? (
          <Navigation categories={[]}/>
        ) : error ? (
          <span>{JSON.stringify(error)}</span>
        ) : (
            <Navigation categories={categories}/>
        )}
        <Outlet />
        <Footer />
    </main>
  )
}

export default DefaultLayout;