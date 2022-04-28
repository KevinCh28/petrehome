import { fetchPosts } from "./post_actions";

export const UPDATE_FILTER = "UPDATE_FILTER";

const changeFilter = (filter, value) => {
  return {
    type: UPDATE_FILTER,
    filter,
    value
  }
};

export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return fetchPosts(getState().ui.filters)(dispatch);
};