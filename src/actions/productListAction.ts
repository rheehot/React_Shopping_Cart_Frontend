import { createAction, createAsyncAction, ActionType } from 'typesafe-actions';
import { ProductItemType } from '../components/Product/ProductType';

export const FETCH_PRODUCT_LIST_REQUEST = 'FETCH_PRODUCT_LIST_REQUEST';
export const FETCH_PRODUCT_LIST_SUCCESS = 'FETCH_PRODUCT_LIST_SUCCESS';
export const FETCH_PRODUCT_LIST_FAILURE = 'FETCH_PRODUCT_LIST_FAILURE';
export const CHANGE_PRODUCT_LIST_CURRENT_PAGE =
    'CHANGE_PRODUCT_LIST_CURRENT_PAGE';

/* ================================== *
 * 상품 목록을 가져오는 비동기 액션   *
 * TRequestPayload : 페이지 번호      *
 * TSuccessPayload : 상품 목록 리스트 *
 * TFailurePayload : 실패 메시지      *
 * ================================== */
export const fetchProductList = createAsyncAction(
    FETCH_PRODUCT_LIST_REQUEST,
    FETCH_PRODUCT_LIST_SUCCESS,
    FETCH_PRODUCT_LIST_FAILURE,
)<number, ProductItemType[], string>();

/* ============================== *
 * 현재 페이지 번호를 바꾸는 액션 *
 * TPayload : 페이지 번호         *
 * ============================== */
export const changeProductListCurrentPage = createAction(
    CHANGE_PRODUCT_LIST_CURRENT_PAGE,
)<number>();

const actions = { fetchProductList, changeProductListCurrentPage };

export type ProductListAction = ActionType<typeof actions>;
