import { Outlet } from 'react-router-dom';
import { Header } from '@components/header/Header';
import { Navigation } from '@components/navigation/Navigation';
import { Footer } from '@components/footer/Footer';

// import useCategories from '@src/hooks/useCategories';
import useNavigationData from '@hooks/useNavigationData';

export const DefaultLayout = () => {
  const { isLoading, navigationData, error } = useNavigationData();

  return (
    <main id='main'>
        <Header />
        {isLoading ? (
          <Navigation navData={[]}/>
        ) : error ? (
          <span>{JSON.stringify(error)}</span>
        ) : (
            <Navigation navData={navigationData}/>
        )}
        <Outlet />
        <Footer />
    </main>
  )
}

export default DefaultLayout;