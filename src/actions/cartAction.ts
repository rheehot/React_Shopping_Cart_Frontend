import { deprecated, ActionType } from 'typesafe-actions';

export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
export const REMOVE_ALL_PRODUCT_AT_CART = 'REMOVE_ALL_PRODUCT_AT_CART';

export const SELECT_PRODUCT_AT_CART = 'SELECT_BUYING_PRODUCT_AT_CART';
export const SELECT_ALL_PRODUCT_AT_CART = 'SELECT_ALL_PRODUCT_AT_CART';
export const PURCHASE_PRODUCT_AT_CART = 'PURCHASE_PRODUCT_AT_CART';

const { createStandardAction } = deprecated;

const actions = {};

export type CartAction = ActionType<typeof actions>;
