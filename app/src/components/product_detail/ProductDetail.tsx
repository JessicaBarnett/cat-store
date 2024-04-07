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
      <img className="product-image" src={product.images[0]}></img>
      <h4>{product.name}</h4>
      <p>
        {product.description}
        {product.price}
      </p>
    </div>
  );
};

export default ProductDetail;