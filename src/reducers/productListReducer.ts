import {
    CHANGE_PRODUCT_LIST_CURRENT_PAGE,
    FETCH_PRODUCT_LIST_REQUEST,
    FETCH_PRODUCT_LIST_SUCCESS,
    FETCH_PRODUCT_LIST_FAILURE,
    ProductListAction,
} from '../actions/productListAction';
import { ProductItemType } from '../components/Product/ProductType';
import { createReducer, action } from 'typesafe-actions';

export type ProductListState = {
    loading: boolean;
    currentPage: number;
    productItems: ProductItemType[];
    itemCounts: number;
    error?: string;
};

const initialState: ProductListState = {
    loading: false,
    currentPage: 1,
    productItems: [],
    itemCounts: 0,
    error: null,
};

const productListReducer = createReducer<ProductListState, ProductListAction>(
    initialState,
    {
        [FETCH_PRODUCT_LIST_REQUEST]: (state) => ({
            ...state,
            loading: true,
        }),
        [FETCH_PRODUCT_LIST_SUCCESS]: (state, action) => ({
            ...state,
            loading: false,
            productItems: action.payload,
        }),
        [FETCH_PRODUCT_LIST_FAILURE]: (state, action) => ({
            ...state,
            loading: false,
            error: action.payload,
        }),
        [CHANGE_PRODUCT_LIST_CURRENT_PAGE]: (state, action) => ({
            ...state,
            currentPage: action.payload,
        }),
    },
);

export default productListReducer;
