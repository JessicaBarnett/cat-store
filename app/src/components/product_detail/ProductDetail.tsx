import React from 'react';
import './product_detail.css';
import Product from '@customtypes/Product';

type ProductDetailProps = {
  product: Product
}

export const ProductDetail: React.FC<ProductDetailProps> = (props: ProductDetailProps) => {
  const { product } = props;

  return (
    <div className="product-detail">
      <div className="product-detail-left">
        <img className="product-image" src={product.images[0]}></img>
      </div>
      <div className="product-detail-left">
        <h4>{product.name}</h4>
        <p>
          {product.brand}<br></br>
          {product.price}<br></br>
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;