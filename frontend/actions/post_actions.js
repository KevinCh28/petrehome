import * as APIUtil from '../util/post_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const RECEIVE_USER_FAV_POSTS = 'RECEIVE_USER_FAV_POSTS';

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

const receiveUserFavPosts = posts => {
  return {
    type: RECEIVE_USER_FAV_POSTS,
    posts
  }
}


export const fetchPosts = () => dispatch => (
  APIUtil.fetchPosts()
    .then( posts => dispatch(receivePosts(posts)) )
)

export const fetchPost = postId => dispatch => (
  APIUtil.fetchPost(postId)
    .then( post => dispatch(receivePost(post)) )
)

export const createPost = postForm => dispatch => (
  APIUtil.createPost(postForm)
    .then( post => dispatch(receivePost(post)) )
)

export const userFavPosts = userId => dispatch => (
  APIUtil.userFavPosts(userId)
    .then( posts => dispatch(receiveUserFavPosts(posts)))
)