import {Dishes} from './Dishes';
import {Comments} from './Comments';
import {Leaders} from './Leaders';
import {Promotions} from './Promotions'
import {createStore, combineReducers} from 'redux';



export const ConfigureStore = ()=>{
    const store = createStore(
       combineReducers(
           {
               dishes: Dishes,
               comments : Comments,
               leaders : Leaders,
               promotions : Promotions,
           }
       )
    )

    return store;
}