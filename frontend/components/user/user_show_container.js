import { connect } from "react-redux";
import UserShow from "./user_show"
import { fetchFavorites } from "../../actions/favorite_actions";
import { fetchPosts } from "../../actions/post_actions"

const mapStateToProps = state => {
  
  return {
    // currentUser: state.entities.users[state.session.id],
    
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);