// export const fetchAllPosts = () => {
//   return $.ajax({
//     method: 'GET',
//     url: '/api/posts',
//   })
// }

export const fetchPosts = data => {
  return $.ajax({
    method: 'GET',
    url: '/api/posts',
    data
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
    // data: { post: post },
    contentType: false,
    processData: false,
  })
}

export const editPost = (postId, post) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/posts/${postId}`,
    data: { post: post },
  })
}