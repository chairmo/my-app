import {combineReducers, applyMiddleware, createStore} from "redux";
import Logger from 'react-logger';
import Thunk from 'react-thunk';
import {dishes} from 'dishes';
import {leaders} from "./leaders";
import {comments} from "./comments";
import {promotions} from "./promotions";


export const configureStore = () => {
    let store = createStore(
        combineReducers({
        dishes,
        comments,
        promotions,
        leaders
    }),
    applyMiddleware(Thunk, Logger));

    return store;

};