import { deprecated, ActionType } from 'typesafe-actions';
import { ProductItem } from 'models/ProductItem';

export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
export const REMOVE_ALL_PRODUCT_FROM_CART = 'REMOVE_ALL_PRODUCT_FROM_CART';

export const SELECT_PRODUCT_AT_CART = 'SELECT_BUYING_PRODUCT_AT_CART';
export const SELECT_ALL_PRODUCT_AT_CART = 'SELECT_ALL_PRODUCT_AT_CART';
export const PURCHASE_PRODUCT_AT_CART = 'PURCHASE_PRODUCT_AT_CART';

const { createStandardAction } = deprecated;

/* =========================== *
 * 카트에 상품을 추가하는 액션 *
 * TPayload : 상품 객체        *
 * =========================== */
export const addProductToCart = createStandardAction(ADD_PRODUCT_TO_CART)<
    ProductItem
>();

/* ============================= *
 * 카트에서 상품을 제거하는 액션 *
 * TPayload : 상품 객체 ID       *
 * ============================= */
export const removeProductFromCart = createStandardAction(
    REMOVE_PRODUCT_FROM_CART,
)<string>();

/* ============================= *
 * 카트에서 상품을 제거하는 액션 *
 * TPayload : void               *
 * ============================= */
export const removeAllProductFromCart = createStandardAction(
    REMOVE_ALL_PRODUCT_FROM_CART,
)();

/* ========================================== *
 * 카트에서 구매할 상품을 선택, 취소하는 액션 *
 * TPayload : 상품 객체 ID                    *
 * ========================================== */
export const selectProductAtCart = createStandardAction(SELECT_PRODUCT_AT_CART)<
    string
>();

/* =============================================== *
 * 카트에서 구매할 상품을 모두 선택, 취소하는 액션 *
 * TPayload : void                                 *
 * =============================================== */
export const selectAllProductAtCart = createStandardAction(
    SELECT_ALL_PRODUCT_AT_CART,
)();

/* ================================== *
 * 카트의 선택된 상품을 구매하는 액션 *
 * TPayload : void                    *
 * ================================== */
export const purchaseProductAtCart = createStandardAction(
    PURCHASE_PRODUCT_AT_CART,
)();

const actions = {
    addProductToCart,
    removeProductFromCart,
    removeAllProductFromCart,
    selectProductAtCart,
    selectAllProductAtCart,
    purchaseProductAtCart,
};

export type CartAction = ActionType<typeof actions>;
