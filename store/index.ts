import {createStore, applyMiddleware} from 'redux';
import {apiMiddleware} from 'redux-api-middleware';
import reducers from './reducers';

const store = applyMiddleware(apiMiddleware)(createStore)(reducers)

export default store;