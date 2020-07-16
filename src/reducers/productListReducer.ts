import {
    CHANGE_PRODUCT_LIST_CURRENT_PAGE,
    FETCH_PRODUCT_LIST_REQUEST,
    ProductListAction,
} from '../actions/productListAction';
import { ProductItemType } from '../components/Product/ProductType';
import { createReducer } from 'typesafe-actions';

type ProductListState = {
    isFetching: boolean;
    currentPage: number;
    productItems: ProductItemType[];
    itemCounts: number;
};

const initialState: ProductListState = {
    isFetching: false,
    currentPage: 1,
    productItems: [],
    itemCounts: 0,
};

const PAGE_PER_COUNT: number = 5;

const productListReducer = createReducer<ProductListState, ProductListAction>(
    initialState,
    {
        [FETCH_PRODUCT_LIST_REQUEST]: (state) => ({ ...state }),
        [CHANGE_PRODUCT_LIST_CURRENT_PAGE]: (state) => ({ ...state }),
    },
);

export default productListReducer;
