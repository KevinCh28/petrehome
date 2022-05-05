import { combineReducers } from "redux";
import sessionErrorsReducer from './session_errors_reducer';
import postErrorsReducer from './posts_errors_reducer';
import messagesErrorsReducer from './message_errors_reducer'

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  posts: postErrorsReducer,
  messages: messagesErrorsReducer,
})

export default errorsReducer;