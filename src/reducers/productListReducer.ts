import {
    FETCH_PRODUCT_LIST,
    CHANGE_PRODUCT_LIST_CURRENT_PAGE,
    ProductListAction,
} from '../actions/productListAction';
import { createReducer } from 'typesafe-actions';

type ProductListState = {
    isFetching: boolean;
    currentPage: number;
};

const initialState: ProductListState = {
    isFetching: false,
    currentPage: 1,
};

const productListReducer = createReducer<ProductListState, ProductListAction>(
    initialState,
    {
        [FETCH_PRODUCT_LIST]: (state) => ({ ...state }),
        [CHANGE_PRODUCT_LIST_CURRENT_PAGE]: (state) => ({ ...state }),
    },
);

export default productListReducer;
