import axios from "axios";
import { SET_BLOG, SET_LOADED } from "../actionsList";

export const setLoaded = payload => ({
    type: SET_LOADED,
    payload
});

export const fetchBLog = () => (dispatch) => {
    dispatch(setLoaded(false));
    axios.get('/blog').then(({ data }) => {
        dispatch(setBlog(data.items));
    });
}

export const setBlog = (articles) => ({
    type: SET_BLOG,
    payload: articles
});