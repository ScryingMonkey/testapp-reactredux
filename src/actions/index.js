import {ADD_ARTICLE, FOUND_BAD_WORD} from "../constants/action-types";

export function addArticle(payload) {
  return {type: ADD_ARTICLE, payload }
};
export function rejectArticleWithBadWord(payload) {
  return {type: FOUND_BAD_WORD, payload}
}
