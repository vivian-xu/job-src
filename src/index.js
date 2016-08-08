import Common from './components/common/common.js';
require('./components/common/common.js');

import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from 'react-router';
import { createHashHistory } from 'history';

// import routes from './routes';

import { Route, IndexRoute } from 'react-router';
import { useRouterHistory } from 'react-router';

import ArticleListBlock from './pages/ArticleListBlock';
import Profile from './pages/Profile';
import Article from './pages/Article';

require('./styles/style.scss');
require('./fonts/iconfont.eot');
require('./fonts/iconfont.svg');
require('./fonts/iconfont.ttf');
require('./fonts/iconfont.woff');


const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

ReactDOM.render(
    <Router  history={appHistory}>
        <Route path="/" component={ ArticleListBlock } />
        <Route path="/article" component={ Article } />
        <Route path="/profile" component={ Profile } />
    </Router>,
    document.getElementById('app')
);
