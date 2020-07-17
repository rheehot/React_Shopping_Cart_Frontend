import {
    ADD_PRODUCT_TO_CART,
    REMOVE_PRODUCT_FROM_CART,
    REMOVE_ALL_PRODUCT_FROM_CART,
    SELECT_PRODUCT_AT_CART,
    SELECT_ALL_PRODUCT_AT_CART,
    PURCHASE_PRODUCT_AT_CART,
    CartAction,
} from 'actions/cartAction';
import { createReducer } from 'typesafe-actions';
import { ProductItem } from 'models/ProductItem';

export type CartState = {
    cartItemCounts: 0 | 1 | 2 | 3;
    cartItems: ProductItem[];
    price: number;
    error?: string;
};

const initialState: CartState = {
    cartItemCounts: 0,
    cartItems: [],
    price: 0,
    error: null,
};

const cartReducer = createReducer<CartState, CartAction>(initialState, {});

export default cartReducer;
