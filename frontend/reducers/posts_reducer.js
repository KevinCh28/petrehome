import { RECEIVE_POSTS, RECEIVE_POST, RECEIVE_CREATE_POST } from "../actions/post_actions";

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts
    case RECEIVE_POST:
      const newPost = { [action.post.id]: action.post };
      return Object.assign({}, newPost)
    case RECEIVE_CREATE_POST:
      return nextState
    default:
      return state;
  }
}

export default postsReducer;