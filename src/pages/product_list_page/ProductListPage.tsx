import React from 'react';

import { Header } from '@components/header/Header';
import { Navigation } from '@components/navigation/Navigation';
import { Filters } from '@components/filters/Filters';
import { ProductList } from '@components/product_list/ProductList';
import { Footer } from '@components/footer/Footer';

import './product-list-page.css';

export const ProductListPage: React.FC = () => {

  return (
    <section className="product-list-page">
      <Header></Header>
      <Navigation></Navigation>
      <Filters></Filters>
      <ProductList></ProductList>
      <Footer></Footer>
    </section>
  );
};
