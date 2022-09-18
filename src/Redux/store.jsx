import {
    applyMiddleware,
    combineReducers,
    legacy_createStore
} from 'redux';
import thunk from 'redux-thunk';
import { AppReducer } from './AppReducer/appReducer';
import { Cartreducer } from './CartReducer/CartReducer';
import { FillterReducer } from './FilterReducer/FilterReducer';
import { WishListReducer } from "./WishListReducer/WishListReducer";

const rootReducer = combineReducers({
    AppReducer: AppReducer,
    Fillters: FillterReducer,
    Cartreducer: Cartreducer,
    WishList: WishListReducer
});

export const store = legacy_createStore(
    rootReducer,
    applyMiddleware(thunk)
)