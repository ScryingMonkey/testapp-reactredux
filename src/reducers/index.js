import {ADD_ARTICLE,FOUND_BAD_WORD} from "../constants/action-types";

const initialState = {
    articles: [],
    articleMessages: []
};
function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE){
        let title = action.payload.title;
        console.log("...adding article ["+title+"].");
        return Object.assign({},state, {
            articles: state.articles.concat(action.payload)
        });
    } else if (action.type === FOUND_BAD_WORD){
        let badWords = action.payload.badWords;
        console.log("...found bad words in title ["+badWords+"].");
        return Object.assign({}, state, {
            // articles: state.articles.concat(action.payload)
            articleMessages: state.articleMessages.concat(action.payload)
        });
    }
    return state;
}
export default rootReducer;