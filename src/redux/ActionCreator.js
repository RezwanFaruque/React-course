import * as ActionTypes from './Actiontype';
import { DISHES } from '../Shared/Dishes';

export const addComments = (dishId,rating,author,comment)=>({
    type: ActionTypes.ADD_COMMENT,
    payload:{
        dishId : dishId,
        rating : rating,
        author : author,
        comment : comment,
    }
})

export const fetchDishes = ()=>(dispatch)=>{
    dispatch(dishesLoading(true));

    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});