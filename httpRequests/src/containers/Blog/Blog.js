import React, { Component } from "react";
import { Route, NavLink, Switch } from 'react-router-dom';

import "./Blog.css";
import Posts from './Posts/Posts';
// import NewPost from '../../containers/Blog/NewPost/NewPost';
import FullPost from './FullPost/FullPost';
import asyncComponent from '../../HOC/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
  return import("../../containers/Blog/NewPost/NewPost");
});
class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact activeClassName="active">
                  Posts
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
        <Switch>
          <Route path="/" exact component={Posts} />
          <Route path="/newPost" exact component={AsyncNewPost} />
          <Route path="/post/:postId" exact component={FullPost} />
          <Route render={() => <h1>Not found!</h1>} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
