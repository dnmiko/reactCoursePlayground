import React, { Component } from "react";
import { Route, NavLink } from 'react-router-dom';

import "./Blog.css";
import Posts from './Posts/Posts';
import NewPost from '../../containers/Blog/NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/newPost" exact>
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact component={Posts} />
        <Route path="/newPost" exact component={NewPost} />
        <Route path="/post/:postId" exact component={FullPost} />
      </div>
    );
  }
}

export default Blog;
