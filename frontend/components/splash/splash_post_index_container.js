import { connect } from "react-redux";
import SplashPostIndex from "./splash_post_index";
import { fetchPosts, fetchSplashPosts } from "../../actions/post_actions";

const mapStateToProps = state => {
  let temptPosts = Object.values(state.entities.posts)
  temptPosts.splice(4);

  return {
    posts: temptPosts,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSplashPosts: () => dispatch(fetchSplashPosts()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashPostIndex);