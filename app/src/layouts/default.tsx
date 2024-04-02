import { Outlet } from 'react-router-dom';
import { Header } from '@components/header/Header';
import { Navigation } from '@components/navigation/Navigation';
import { Footer } from '@components/footer/Footer';


export const DefaultLayout = () => {
  return (
    <main id="main">
        <Header />
        <Navigation />
        <Outlet />
        <Footer />
    </main>
  )
}

export default DefaultLayout;