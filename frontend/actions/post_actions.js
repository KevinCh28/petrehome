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

const receivefollow = follow => {
  return {
    type: RECEIVE_FOLLOW,
    follow,
  }
}

export const fetchPosts = filters => dispatch => (
  APIUtil.fetchPosts(filters)
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