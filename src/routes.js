import React from 'react';
import { Route, IndexRoute } from 'react-router';

import ArticleListBlock from './pages/ArticleListBlock';
import Profile from './pages/Profile';
import Article from './pages/Article';
import Allcomments from './pages/Allcomments';

const routes = (
  <Route path="/articlelist" component={ ArticleListBlock } />
  <Route path="/article" component={ Article } />
  <Route path="/mentors/:mentorId" component={ Profile } />
  <Route path="/allcomments" component={ Allcomments } />
);

export default routes;
