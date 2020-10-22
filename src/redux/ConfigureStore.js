import {Dishes} from './Dishes';
import {Comments} from './Comments';
import {Leaders} from './Leaders';
import {Promotions} from './Promotions'
import {createStore, combineReducers , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';



export const ConfigureStore = ()=>{
    const store = createStore(
       combineReducers(
           {
               dishes: Dishes,
               comments : Comments,
               leaders : Leaders,
               promotions : Promotions,
           }
       ),

       applyMiddleware(thunk, logger),
    )

    return store;
}