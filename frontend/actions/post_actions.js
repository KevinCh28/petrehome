import * as APIUtil from '../util/post_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS';
export const REMOVE_POST_ERRORS = 'REMOVE_POST_ERRORS';
export const RECEIVE_CREATE_POST = 'RECEIVE_CREATE_POST';

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

const receiveCreatePost = post => {
  return {
    type: RECEIVE_CREATE_POST,
    post,
  }
}

const receiveErrors = errors => {
  return {
    type: RECEIVE_POST_ERRORS,
    errors,
  }
}

export const removeErrors = () => {
  return {
    type: REMOVE_POST_ERRORS,
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

export const createPost = (postForm) => dispatch => {
  return APIUtil.createPost(postForm)
    .then(
      post => dispatch(receiveCreatePost(post)),
      err => dispatch(receiveErrors(err.responseJSON)),
    )
}

export const editPost = (postId, data) => dispatch => (
  APIUtil.editPost(postId, data)
    .then(
      post => dispatch(receivePost(post)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
)