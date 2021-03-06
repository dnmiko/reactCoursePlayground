import React, { Component } from "react";
import axios from "../../../axios";

import Post from '../../../components/Post/Post';

import './Posts.css';

class Posts extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios
      .get("/posts")
      .then((response) => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map((post) => {
          return {
            ...post,
            author: "Diego",
          };
        });

        this.setState({
          posts: updatedPosts,
        });
      })
      .catch((error) => console.log(error));
  }

  postSelectedHandler = ( id ) => {
    this.props.history.push({
      pathname: '/post/' + id
    })
  }

  render() {
    const posts = this.state.posts.map((post) => {
      return (
        <Post
          title={post.title}
          author={post.author}
          key={post.id}
          clicked={() => this.postSelectedHandler(post.id)}
        />
      );
    });

    return (
        <section className="Posts">{posts}</section>
    );
  }
}

export default Posts;
