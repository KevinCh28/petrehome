import { RECEIVE_FAVORITES, RECEIVE_FAVORITE, REMOVE_FAVORITE } from "../actions/favorite_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const favoritesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_FAVORITES:
      return action.payload.favorites
    case RECEIVE_FAVORITE:
      newState[action.favorite.id] = action.favorite
      return newState
    case REMOVE_FAVORITE:
      delete newState[action.favoriteId]
      return newState
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
}

export default favoritesReducer;