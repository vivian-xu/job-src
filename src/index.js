require('./commons/common.js');

import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router';

import ArticleListBlock from './pages/ArticleListBlock';
import Profile from './pages/Profile';
import Article from './pages/Article';
import Allcomments from './pages/Allcomments';

require('./styles/style.scss');
require('./fonts/iconfont.eot');
require('./fonts/iconfont.svg');
require('./fonts/iconfont.ttf');
require('./fonts/iconfont.woff');

ReactDOM.render(
  <Router history={browserHistory}>
        <Route path="/" component={ ArticleListBlock } />
        <Route path="/article" component={ Article } />
        <Route path="/mentors/:mentorId" component={ Profile } />
        <Route path="/allcomments" component={ Allcomments } />
    </Router>,
  document.getElementById('app')
);
