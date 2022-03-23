import { combineReducers } from "redux";
import postsReducer from "./posts.reducer";
import userReducer from "./users_reducer";

const entitiesReducer = combineReducers({
  users: userReducer,
  posts: postsReducer,
})

export default entitiesReducer;