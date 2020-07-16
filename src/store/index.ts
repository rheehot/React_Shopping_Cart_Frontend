import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

const store = createStore(
    rootReducer,
    process.env.NODE_ENV === 'development'
        ? composeWithDevTools(applyMiddleware(thunk))
        : applyMiddleware(thunk),
);

export default store;
