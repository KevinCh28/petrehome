import React from "react";
import SplashPostIndexItem from "./splash_post_index_item";
import { Link } from "react-router-dom";

class SplashPostIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchSplashPosts();
  }

  render() {
    return (
      <div>
        <div>
          <ul className="self-post-list">
            {
              this.props.posts.map(post => (
                <SplashPostIndexItem
                  key={post.id}
                  post={post}
                />
              ))
            }
            < Link to="/posts" className="recommendations-post-more">
              MORE PETS
            </Link>
          </ul>
        </div>
      </div>
    )
  }

}

export default SplashPostIndex;