// export const fetchAllPosts = () => {
//   return $.ajax({
//     method: 'GET',
//     url: '/api/posts',
//   })
// }

// import { async } from "regenerator-runtime"

//please use react fetch instead of ajax

export const fetchPosts = data => {
  return $.ajax({
    method: 'GET',
    url: '/api/posts',
    data
  })
}

// export const fetchPosts = async (data) => {
//   const res = await fetch("/api/posts");
//   return (await res.json())
// }

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