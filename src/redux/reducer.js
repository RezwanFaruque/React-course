import { DISHES } from '../Shared/Dishes';
import { COMMENTS } from '../Shared/Comments';
import { LEADERS } from '../Shared/Leaders';
import { PROMOTIONS } from '../Shared/Promotions';

export const initialState ={
    dishes : DISHES,
    leaders : LEADERS,
    comments : COMMENTS,
    promotions : PROMOTIONS,
    
}

export const Reducer = (state = initialState , action) => {

    return state;
}