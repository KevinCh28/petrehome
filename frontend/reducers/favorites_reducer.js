import { RECEIVE_FAVORITES, RECEIVE_FAVORITE, REMOVE_FAVORITE } from "../actions/favorite_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const favoritesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_FAVORITES:
      nextState = action.favorites
      return nextState
    case RECEIVE_FAVORITE:
      nextState[action.favorite.id] = action.favorite
      return nextState
    case REMOVE_FAVORITE:
      delete nextState[action.favoriteId]
      return nextState
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
}

export default favoritesReducer;