import {COMMENTS} from '../Shared/Comments';
import * as ActionTypes from './Actiontype';

export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {

        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            console.log("Comment: ", comment);
            return state.concat(comment);
        default:
          return state;
      }
};