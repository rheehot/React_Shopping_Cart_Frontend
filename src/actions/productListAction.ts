import { ThunkAction } from 'redux-thunk';
import { deprecated, createAsyncAction, ActionType } from 'typesafe-actions';
import productItems from 'data/productItem';
import { ProductItemProps } from 'models/ProductItem';
import { ProductListState } from 'reducers/productListReducer';

export const FETCH_PRODUCT_LIST_REQUEST = 'FETCH_PRODUCT_LIST_REQUEST';
export const FETCH_PRODUCT_LIST_SUCCESS = 'FETCH_PRODUCT_LIST_SUCCESS';
export const FETCH_PRODUCT_LIST_FAILURE = 'FETCH_PRODUCT_LIST_FAILURE';
export const CHANGE_PRODUCT_LIST_CURRENT_PAGE =
    'CHANGE_PRODUCT_LIST_CURRENT_PAGE';

type AsyncActionPayload = {
    productItems: ProductItemProps[];
    itemCounts: number;
};

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
)<void, AsyncActionPayload, string>();

/* ============================== *
 * 현재 페이지 번호를 바꾸는 액션 *
 * TPayload : 페이지 번호         *
 * ============================== */
const { createStandardAction } = deprecated;
export const changeProductListCurrentPage = createStandardAction(
    CHANGE_PRODUCT_LIST_CURRENT_PAGE,
)<number>();

const actions = { fetchProductList, changeProductListCurrentPage };

export type ProductListAction = ActionType<typeof actions>;

export function getProductList(
    page: number,
): ThunkAction<Promise<void>, ProductListState, null, ProductListAction> {
    return async (dispatch) => {
        const { request, success, failure } = fetchProductList;

        dispatch(request());

        try {
            let productList = [...productItems];
            const itemCounts = productList.length;

            await new Promise((resolve) => setTimeout(resolve, 1000));

            productList = productList.sort(
                (productA, productB) => productB.score - productA.score,
            );
            productList = productList.slice((page - 1) * 5, (page - 1) * 5 + 5);

            dispatch(success({ productItems: productList, itemCounts }));
        } catch (e) {
            dispatch(failure(e));
        }
    };
}
