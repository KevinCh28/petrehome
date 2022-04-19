export const fetchPosts = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/posts',
  })
}

export const fetchPost = postId => {
  return $.ajax({
    method: 'GET',
    url: `/api/posts/${postId}`,
  })
}

export const createPost = post => {
  return $.ajax({
    method: 'POST',
    url: '/api/posts',
    data: post,
    contentType: false,
    processData: false,
  })
}

export const userFavPosts = userId => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/posts`
  })
}