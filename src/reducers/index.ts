import { combineReducers } from 'redux';
import productListReducer from 'reducers/productListReducer';

const rootReducer = combineReducers({
    product: productListReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
