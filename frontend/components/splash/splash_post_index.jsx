import React from "react";
import SplashPostIndexItem from "./splash_post_index_item";
import { Link } from "react-router-dom";

class SplashPostIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const filter = {
      dogOrCat: "",
      petAge: "",
      petBreed: "",
      petGender: "",
    }
    this.props.fetchPosts(filter);
  }

  render() {
    const { posts } = this.props;

    return (
      <div>
        <div className="recommendations-posts-container">
          {posts.map(post => 
            <SplashPostIndexItem
              key={post.id}
              post={post}
            />
          )}
          < Link to="/posts" className="recommendations-post-more">
            <div>
              <img src={window.pawPrint} key={"pawPrint"} className="paw-print"/>
            </div>
            <div>Many more pets</div>
            <div>available on PetRehome</div>
            <div className="meet-them-line"></div>
            <div className="meet-them">MEET THEM</div>
          </Link>
        </div>
      </div>
    )
  }

}

export default SplashPostIndex;