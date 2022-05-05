import { combineReducers } from "redux";
import sessionErrorsReducer from './session_errors_reducer';
import sessionPostsReducer from './posts_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  posts: sessionPostsReducer,
})

export default errorsReducer;