import * as React from 'react';
import { ProductItemType } from './ProductType';

function ProductItem({
    id,
    title,
    coverImage,
    price,
    score,
    availableCoupon = true,
}: ProductItemType): React.ReactElement {
    return (
        <div>
            {id}, {title}, {coverImage}, {price}, {score},{' '}
            {availableCoupon ? 'can' : "can't"}
        </div>
    );
}

export default ProductItem;
