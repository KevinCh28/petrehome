import { fetchPosts } from "./post_actions";

export const UPDATE_FILTER = "UPDATE_FILTER";

const changeFilter = (filter) => {
  return {
    type: UPDATE_FILTER,
    filter,
  }
};

export const updateFilter = filter => dispatch => {
  dispatch(changeFilter(filter));
  return fetchPosts(filter)(dispatch);
};