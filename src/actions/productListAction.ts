import { createAction, ActionType } from 'typesafe-actions';

export const FETCH_PRODUCT_LIST = 'FETCH_PRODUCT_LIST';
export const CHANGE_PRODUCT_LIST_CURRENT_PAGE =
    'CHANGE_PRODUCT_LIST_CURRENT_PAGE';

export const fetchProductList = createAction(FETCH_PRODUCT_LIST)();
export const changeProductListCurrentPage = createAction(
    CHANGE_PRODUCT_LIST_CURRENT_PAGE,
)<number>();

const actions = { fetchProductList, changeProductListCurrentPage };

export type ProductListAction = ActionType<typeof actions>;
