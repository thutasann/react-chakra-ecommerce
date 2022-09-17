import {
    applyMiddleware,
    combineReducers,
    legacy_createStore
} from 'redux';
import thunk from 'redux-thunk';
import { AppReducer } from './AppReducer/appReducer';

const rootReducer = combineReducers({
    AppReducer: AppReducer
});

export const store = legacy_createStore(
    rootReducer,
    applyMiddleware(thunk)
)