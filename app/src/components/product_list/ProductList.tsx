import React from 'react';
import { Link } from 'react-router-dom';

import ProductSummary from '@components/product_summary/ProductSummary';
import './product_list.css';
import { slugify } from '@src/utils/utils';


import Product from '@customtypes/Product';

type ProductListProps = {
    products: Product[]
};

export const ProductList: React.FC<ProductListProps> = (props: ProductListProps) => {
    const { products } = props;

    return (
        <div className='product-list'>
            {products.map((product: Product) => (
                <Link to={`/products/${slugify(product.name)}`}>
                    <ProductSummary key={product.id} product={product} />
                </Link>
            ))}
        </div>
    );
};

export default ProductList;