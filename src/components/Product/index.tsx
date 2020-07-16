import * as React from 'react';
import { RootState } from 'reducers';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Helemt from 'components/Helmet';
import ProductItem from 'components/Product/ProductItem';
import { getProductList } from 'actions/productListAction';

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
    const dispatch = useDispatch();
    const { loading, productItems, currentPage } = useSelector(
        (state: RootState) => state.product,
    );

    React.useEffect(() => {
        dispatch(getProductList(currentPage));
    }, [currentPage]);

    return (
        <ProductContainer className="route-container">
            <Helemt title="PRODUCT" />
            <ProductListContainer>
                {loading ? (
                    <div>Loading</div>
                ) : (
                    productItems.map((item) => (
                        <ProductItem key={item.id} {...item} />
                    ))
                )}
            </ProductListContainer>
        </ProductContainer>
    );
}

export default Product;
