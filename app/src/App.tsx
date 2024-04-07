import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { DefaultLayout } from '@layouts/default';

import { ErrorPage } from '@pages/error_page/ErrorPage';
import { ProductListPage } from '@pages/product_list_page/ProductListPage';
import { HomePage } from '@pages/home_page/HomePage';
import { ProductDetailPage } from '@pages/product_detail_page/ProductDetailPage';
import { SearchPage } from '@pages/search_page/SearchPage';


import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout/>} errorElement={<ErrorPage />}>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/categories/:category" element={<ProductListPage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/products/:productName/:productId" element={<ProductDetailPage />} />
          <Route index path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
