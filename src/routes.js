import React from 'react';
import { Route, IndexRoute } from 'react-router';


import Profile from './pages/Profile';
import ArticleListBlock from './pages/ArticleListBlock';
import Article from './pages/Article';



const routes = (
    <Route path="/" component={ ArticleListBlock } />
    <Route path="/article" component={ Article } />
    <Route path="/profile" component={ Profile } />
);

export default routes;
