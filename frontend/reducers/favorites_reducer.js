import { RECEIVE_FAVORITES, RECEIVE_FAVORITE, REMOVE_FAVORITE } from "../actions/favorite_actions";

const favoritesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FAVORITES:
      return Object.assign({}, state, action.favorites)
    case RECEIVE_FAVORITE:
      const newFav = { [action.favorite.id]: action.favorite };
      return Object.assign({}, state, newFav)
    case REMOVE_FAVORITE:
      const nextState = Object.assign({}, state)
      delete nextState[action.favoriteId]
      return nextState
    default:
      return state;
  }
}

export default favoritesReducer;