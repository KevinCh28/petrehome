import { connect } from "react-redux";
import UserPosts from "./user_posts";
import { fetchPosts } from "../../actions/post_actions"
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = (state) => {
  const posts = Object.values(state.entities.posts) || []
  const myPosts = posts.filter(post => post.authorId === state.session.id)
  debugger
  return {
    userId: state.session.id,
    posts: myPosts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openModal: modal => dispatch(openModal(modal)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchPosts: (filter) => dispatch(fetchPosts(filter)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPosts);