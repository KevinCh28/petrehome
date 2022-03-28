import * as APIUtil from "../util/favorite_util"

export const RECEIVE_FAVORITES = "RECEIVE_FAVORITES";
export const RECEIVE_FAVORITE = "RECEIVE_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

const receiveFavorites = favorites => {
  return {
    type: RECEIVE_FAVORITES,
    favorites,
  }
}

const receiveFavorite = favorite => {
  return {
    type: RECEIVE_FAVORITE,
    favorite,
  }
}

const removeFavorite = favoriteId => {
  return {
    type: REMOVE_FAVORITE,
    favoriteId,
  }
}

export const fetchFavorites = userId => dispatch => (
  APIUtil.fetchFavorites(userId)
    .then(favorites => dispatch(receiveFavorites(favorites)))
)

export const createFavorite = (userId, post) => dispatch => (
  APIUtil.createFavorite(userId, post)
    .then(favorite => dispatch(receiveFavorite(favorite)))
)

export const deleteFavorite = (userId, favoriteId) => dispatch => (
  APIUtil.deleteFavorite(userId, favoriteId)
    .then(() => dispatch(removeFavorite(favoriteId)))
)