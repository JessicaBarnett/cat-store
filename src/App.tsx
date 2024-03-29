import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { DefaultLayout } from '@layouts/default';

import { ErrorPage } from '@pages/error_page/ErrorPage';
import { ProductListPage } from '@pages/product_list_page/ProductListPage';
import { HomePage } from '@pages/home_page/HomePage';


// import './App.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />} errorElement={<ErrorPage />}>
          <Route path="/products" element={<ProductListPage />} />
          <Route index path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
