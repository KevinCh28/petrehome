import { connect } from "react-redux";
import { fetchPost } from "../../actions/post_actions";
import PostShow from "./post_show";


const mapStateToProps = (state, ownProps) => {
  return {
    post: state.entities.posts[ownProps.match.params.postId]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPost: postId => dispatch(fetchPost(postId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);