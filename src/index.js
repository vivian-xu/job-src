require('./commons/common.js');
require('./styles/style.scss');
require('./fonts/iconfont.eot');
require('./fonts/iconfont.svg');
require('./fonts/iconfont.ttf');
require('./fonts/iconfont.woff');

import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router';

// import routes from "./routes";

import ArticleListBlock from './pages/articleListBlock/ArticleListBlock';
import Profile from './pages/profile/Profile';
import Article from './pages/article/Article';
import AllComments from './pages/allComments/AllComments';
ReactDOM.render(
  <Router history={browserHistory}  >
        <Route path="/" component={ ArticleListBlock } />
        <Route path="/article" component={ Article } />
        <Route path="/mentors/:mentorId" component={ Profile } />
        <Route path="/mentors/:mentorId/comments" component={ AllComments } />
  </Router>,
  document.getElementById('app')
);
