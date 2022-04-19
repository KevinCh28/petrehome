import { RECEIVE_POSTS, RECEIVE_POST, RECEIVE_USER_FAV_POSTS } from "../actions/post_actions"

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_POSTS:
      return Object.assign({}, state, action.posts)
    case RECEIVE_POST:
      const newPost = { [action.post.id]: action.post };
      return Object.assign({}, state, newPost)
    case RECEIVE_USER_FAV_POSTS:
      nextState = Object.assign({}, state, action.posts)
      return nextState
    default:
      return state;
  }
}

export default postsReducer;