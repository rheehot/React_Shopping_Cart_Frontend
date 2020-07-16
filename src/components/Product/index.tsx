import * as React from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem';

const ProductContainer = styled.div`
    width: 80%;
    height: 100%;
    margin: 0 auto;
    scrollbar-width: none;
`;

const ProductListContainer = styled.ul`
    width: 100%;
    padding: 20px 0;
    text-align: center;
`;

function Product(): React.ReactElement {
    const productItem = [];

    return (
        <ProductContainer className="route-container">
            <ProductListContainer>
                {productItem &&
                    productItem.map((item) => (
                        <ProductItem key={item.id} {...item} />
                    ))}
            </ProductListContainer>
        </ProductContainer>
    );
}

export default Product;
