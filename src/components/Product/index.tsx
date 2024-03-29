import * as React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'reducers';
import Helemt from 'components/Helmet';
import Loading from 'components/Loading';
import Pagination from 'components/Pagination';
import ProductItem from 'components/Product/ProductItem';
import { getProductList } from 'actions/thunkAction';

const ProductContainer = styled.div`
    width: 80%;
    height: auto;
    margin: 0 auto;
    scrollbar-width: none;
`;

const ProductListContainer = styled.ul`
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-around;
    padding: 30px 0;
    text-align: center;
`;

function Product(): React.ReactElement {
    const dispatch = useDispatch();
    const { loading, productItems, currentPage, itemCounts } = useSelector(
        (state: RootState) => state.product,
    );

    React.useEffect(() => {
        dispatch(getProductList(currentPage));
    }, [currentPage]);

    return (
        <ProductContainer className="route-container">
            <Helemt title="PRODUCT" />
            <ProductListContainer>
                {productItems.map((item) => (
                    <ProductItem key={item.id} {...item} />
                ))}
                <Pagination
                    currentPage={currentPage}
                    range={Math.ceil(itemCounts / 5)}
                />
            </ProductListContainer>
            <Loading isLoading={loading} />
        </ProductContainer>
    );
}

export default Product;
