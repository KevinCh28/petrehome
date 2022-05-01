import * as APIUtil from '../util/post_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';

const receivePosts = posts => {
  return {
    type: RECEIVE_POSTS,
    posts,
  }
}

const receivePost = post => {
  return {
    type: RECEIVE_POST,
    post,
  }
}

export const fetchPosts = (data) => dispatch => (
  APIUtil.fetchPosts(data)
    .then( posts => dispatch(receivePosts(posts)) )
)

export const fetchPost = postId => dispatch => (
  APIUtil.fetchPost(postId)
    .then( post => dispatch(receivePost(post)) )
)

export const fetchSplashPosts = () => dispatch => (
  APIUtil.fetchSplashPosts()
    .then(posts => dispatch(receivePosts(posts)))
)

export const createPost = postForm => dispatch => (
  APIUtil.createPost(postForm)
    .then( post => dispatch(receivePost(post)) )
)

export const editPost = (postId, data) => dispatch => (
  APIUtil.editPost(postId, data)
    .then(post => dispatch(receivePost(post)))
)