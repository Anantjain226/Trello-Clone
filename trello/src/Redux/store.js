import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './Boards/reducer';
import {composeWithDevTools} from "redux-devtools-extension"

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootReducer = combineReducers({
    allBoards: reducer
})

export const store = createStore( rootReducer, composeWithDevTools(applyMiddleware(thunk)))
