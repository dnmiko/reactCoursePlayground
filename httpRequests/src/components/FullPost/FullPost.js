import React, { Component } from "react";
import axios from "axios";

import "./FullPost.css";

class FullPost extends Component {
  state = {
    loadedContent: null,
  };

  componentDidUpdate() {
    if (this.props.postId) {
        if (
          !this.state.loadedContent ||
          (this.state.loadedContent &&
            this.state.loadedContent.id !== this.props.postId)
        )
          axios
            .get(
              "/posts/" + this.props.postId
            )
            .then((response) => {
              this.setState({
                loadedContent: response.data,
              });
            });
    }
  }

  deletePostHandler = () => {
    axios.delete(
      "/posts/" + this.props.postId
    )
    .then((response) => {
      console.log(response);
    })
  }
  
  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;

    if (this.props.postId) {
        post = <p style={{ textAlign: "center" }}>Loading...</p>;
    }

    if (this.props.postId && this.state.loadedContent) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedContent.title}</h1>
          <p>{this.state.loadedContent.body}</p>
          <div className="Edit">
            <button className="Delete" onClick={this.deletePostHandler}>
              Delete
            </button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
