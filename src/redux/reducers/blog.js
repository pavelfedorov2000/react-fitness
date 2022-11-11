import { SET_BLOG, SET_LOADED } from "../actionsList";

const initialState = {
    articles: [],
    isLoaded: false
};

const blog = (state = initialState, action) => {
    switch (action.type) {
        case SET_BLOG:
            return {
                ...state,
                articles: action.payload,
                isLoaded: true
            }
        case SET_LOADED:
            return {
                ...state,
                isLoaded: action.payload
            }
        default:
            return state
    }
}

export default blog;