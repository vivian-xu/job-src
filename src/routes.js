import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Profile from './pages/Profile';
import ArticleListBlock from './pages/ArticleListBlock';
import Article from './pages/Article';
import Allcomments from './pages/Allcomments';


const routes = (
    <Route path="/" component={ ArticleListBlock } />
    <Route path="/article" component={ Article } />
    <Route path="/profile" component={ Profile } />
    <Route path="/allcomments" component={ Allcomments } />
);

export default routes;
