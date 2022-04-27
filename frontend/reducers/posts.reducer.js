import { RECEIVE_POSTS, RECEIVE_POST } from "../actions/post_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_POSTS:
      return Object.assign({}, state, action.posts)
    case RECEIVE_POST:
      const newPost = { [action.post.id]: action.post };
      return Object.assign({}, newPost)
    case RECEIVE_CURRENT_USER:
      return {}
    default:
      return state;
  }
}

export default postsReducer;