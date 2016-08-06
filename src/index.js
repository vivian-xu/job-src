import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';

import { IndexLink, Link } from 'react-router';
import { createHashHistory } from 'history';

import Profile from './pages/Profile';
import ArticleList from './pages/ArticleList';
import Article from './pages/Article';

require('./styles/style.scss');
require('./fonts/iconfont.eot');
require('./fonts/iconfont.svg');
require('./fonts/iconfont.ttf');
require('./fonts/iconfont.woff');

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

ReactDOM.render(

    <Router  history={appHistory}>
        <Route path="/" component={ Profile } />
        <Route path="/articlelist" component={ ArticleList } />
        <Route path="/article" component={ Article } />

    </Router>,
    document.getElementById('app')
);
