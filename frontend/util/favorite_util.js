export const fetchFavorites = userId => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/favorites`,
  })
}

export const createFavorite = (userId, post) => {
  return $.ajax({
    method: 'POST',
    url: `/api/users/${userId}/favorites`,
    data: { post },
  })
}

export const deleteFavorite = (userId, favoriteId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/users/${userId}/favorites/${favoriteId}`,
  })
}
