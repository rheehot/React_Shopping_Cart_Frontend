import * as React from 'react';
import productItem from '../../data/productItem';
import ProductItem from './ProductItem';

function Product(): React.ReactElement {
    return (
        <div>
            {productItem.map((item) => (
                <ProductItem {...item} />
            ))}
        </div>
    );
}

export default Product;
