import { RECEIVE_FAVORITES, RECEIVE_FAVORITE, REMOVE_FAVORITE } from "../actions/favorite_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const favoritesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_FAVORITES:
      // return Object.assign({}, state, action.favorites)
      return action.favorites
    case RECEIVE_FAVORITE:
      // const newFav = { [action.favorite.id]: action.favorite };
      // return Object.assign({}, state, newFav)
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