import { deprecated, createAsyncAction, ActionType } from 'typesafe-actions';

export const ADD_COUPON_AT_PRODUCT = 'APPLY_COUPON_AT_PRODUCT';
export const REMOVE_COUPON_FROM_PRODUCT = 'REMOVE_COUPON_FROM_PRODUCT';

export const FETCH_COUPON_LIST_REQUEST = 'FETCH_COUPON_LIST_REQUEST';
export const FETCH_COUPON_LIST_SUCCESS = 'FETCH_COUPON_LIST_SUCCESS';
export const FETCH_COUPON_LIST_FAILURE = 'FETCH_COUPON_LIST_FAILURE';

export const OPEN_COUPON_MODAL_DIALOG = 'OPEN_COUPON_MODAL_DIALOG';
export const CLOSE_COUPON_MODAL_DIALOG = 'CLOSE_COUPON_MODAL_DIALOG';

const { createStandardAction } = deprecated;

const actions = {};

export type CouponAction = ActionType<typeof actions>;
