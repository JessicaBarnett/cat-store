import React from 'react';
import './product_detail_page.css';
import Product from '@customtypes/Product';
import ProductDetail from '@src/components/product_detail/ProductDetail';


export const ProductDetailPage: React.FC<ProductDetailPageProps> = () => {
  const product: Product = {
    "id": "e3dffd6a-6901-44ca-8690-4ad8f899b96a",
    "name": "Crinkle toy 1",
    "description": "Aliquam erat volutpat.",
    "price": "$4.43",
    "category": "001",
    "brand": "Toy Brand A",
    "kind": "chase",
    "images": [
        "/images/products/product-img-1.jpg",
        "/images/products/product-img-2.jpg",
        "/images/products/product-img-3.jpg",
        "/images/products/product-img-4.jpg"
    ]
  };

  return (
    <div className="product-detail-page">
      <ProductDetail product={product}/>
    </div>
  );
};

export default ProductDetailPage;