import { ThunkAction } from 'redux-thunk';
import productItems from 'data/productItem';
import { ProductListAction, fetchProductList } from 'actions/productListAction';
import { ProductListState } from 'reducers/productListReducer';

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
