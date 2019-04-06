import {ADD_ARTICLE} from "../constants/action-types";
import {rejectArticleWithBadWord} from "../actions/index";

const forbiddenWords = ["spam","money"];

export function forbiddenWordsMiddleware({dispatch}){
  return function(next){
    return function(action){
      // do stuff
      if (action.type === ADD_ARTICLE){
        const foundWords = forbiddenWords.filter(word =>
          action.payload.title.includes(word)
        );

        if (foundWords.length) {
          let payload = {
            badWords: foundWords,
            message: "Can not add articles with word ["+foundWords+"]."
          }
          return dispatch(rejectArticleWithBadWord(payload));
        }
      }
      return next(action);
    }
  }
}