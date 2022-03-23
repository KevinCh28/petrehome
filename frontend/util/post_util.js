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

export const createPost = postForm => {
  return $.ajax({
    method: 'POST',
    url: '/api/posts',
    data: postForm,
  })
}