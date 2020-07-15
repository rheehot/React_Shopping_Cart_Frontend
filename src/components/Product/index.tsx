import * as React from 'react';
import styled from 'styled-components';
import productItem from '../../data/productItem';
import ProductItem from './ProductItem';

const ProductContainer = styled.div`
    width: 80%;
    height: 100%;
    margin: 0 auto;
    scrollbar-width: none;
`;

const ProductListContainer = styled.ul`
    width: 100%;
    text-align: center;
`;

function Product(): React.ReactElement {
    return (
        <ProductContainer className="route-container">
            <ProductListContainer>
                {productItem.map((item) => (
                    <ProductItem key={item.id} {...item} />
                ))}
            </ProductListContainer>
        </ProductContainer>
    );
}

export default Product;
