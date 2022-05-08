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
              {/* <img src={window.pawPrint} key={"pawPrint"} className="paw-print"/> */}
              <svg viewBox="0 0 70 68" xmlns="http://www.w3.org/2000/svg" className="paw-print">
                <path d="M17.26 29.338c0-5.76-3.876-10.439-8.63-10.439C3.876 18.9 0 23.578 0 29.34c0 5.76 3.876 10.422 8.63 10.422 4.754 0 8.63-4.678 8.63-10.423zM8.63 36.84c-3.147 0-5.698-3.365-5.698-7.518 0-4.152 2.55-7.517 5.698-7.517 3.147 0 5.665 3.38 5.665 7.534 0 4.152-2.518 7.5-5.665 7.5zM70 29.322c0-5.745-3.876-10.422-8.63-10.422-4.754 0-8.63 4.677-8.63 10.439a1.448 1.448 0 00.37 1.13 1.474 1.474 0 001.096.485 1.486 1.486 0 001.096-.484 1.457 1.457 0 00.37-1.131c0-4.137 2.55-7.518 5.698-7.518 3.147 0 5.698 3.365 5.698 7.517 0 4.137-2.55 7.502-5.698 7.502a1.48 1.48 0 00-1.042.427 1.454 1.454 0 000 2.066 1.48 1.48 0 001.042.428c4.754 0 8.63-4.678 8.63-10.439zm-24.233-7.944c4.754 0 8.63-4.678 8.63-10.439S50.504.5 45.767.5c-4.738 0-8.63 4.678-8.63 10.439s3.843 10.439 8.63 10.439zm0-17.956c3.147 0 5.698 3.364 5.698 7.517 0 4.153-2.584 7.517-5.698 7.517-3.114 0-5.698-3.364-5.698-7.517 0-4.153 2.534-7.517 5.698-7.517zM24.233 21.378c4.754 0 8.63-4.678 8.63-10.439S29.02.5 24.233.5c-4.787 0-8.63 4.678-8.63 10.439s3.893 10.439 8.63 10.439zm0-17.956c3.148 0 5.698 3.364 5.698 7.517 0 4.153-2.534 7.517-5.698 7.517-3.163 0-5.698-3.364-5.698-7.517 0-4.153 2.584-7.517 5.698-7.517zm31.472 44.103l-9.11-15.806c-3.015-5.204-7.14-8.076-11.595-8.076-4.456 0-8.58 2.872-11.595 8.075l-9.11 15.79a18.17 18.17 0 00-1.49 3.283 12.275 12.275 0 00-.83 4.547 12.252 12.252 0 003.453 8.386 12.473 12.473 0 008.308 3.776h.497a12.27 12.27 0 004.82-.969c1.094-.426 2.916-1.247 4.804-2.133l.68.279a31.023 31.023 0 0011.71 2.806 12.49 12.49 0 008.335-3.746 12.27 12.27 0 003.492-8.383 14.65 14.65 0 00-.812-4.465 18.27 18.27 0 00-1.557-3.364zm-9.474 17.053a25.207 25.207 0 01-8.746-1.87l.563-.28 1.656-.755c.11-.063.21-.14.298-.23l1.657-.837 1.557-.788c.345-.176.606-.48.726-.846.12-.367.09-.765-.085-1.109a1.47 1.47 0 00-.847-.728 1.486 1.486 0 00-1.12.074l-1.656.787c-2.567 1.297-6.857 3.48-8.663 4.219l-.165.115c-1.375.64-2.65 1.198-3.446 1.51a8.681 8.681 0 01-3.975.738h-.15a9.513 9.513 0 01-6.323-2.858 9.345 9.345 0 01-2.654-6.366.566.566 0 000-.115 9.476 9.476 0 01.663-3.43c.329-.97.756-1.905 1.275-2.79l9.094-15.84c2.468-4.267 5.681-6.565 9.06-6.565 3.38 0 6.626 2.347 9.06 6.565l9.16 15.806c.518.887.945 1.821 1.276 2.79.417 1.15.652 2.358.696 3.579a9.328 9.328 0 01-2.625 6.349 9.496 9.496 0 01-6.287 2.875z"></path>
              </svg>
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