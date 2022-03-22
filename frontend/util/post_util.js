export const fetchPosts = data => {
  return $.ajax({
    method: 'GET',
    url: '/api/posts',
    data: { data },
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