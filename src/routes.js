import { Route, IndexRoute } from 'react-router';

import App from './pages/app';
import ArticleListBlock from './pages/articleListBlock/ArticleListBlock';
import Profile from './pages/profile/Profile';
import Article from './pages/article/Article';
import AllComments from './pages/allComments/AllComments';

const routes = (
  <Route path='/' component={App}>
    <Route path="/articlelist" component={ ArticleListBlock } />
    <Route path="/article" component={ Article } />
    <Route path="/mentors/:mentorId" component={ Profile } />
    <Route path="/allComments" component={ Allcomments } />
  <Route/>
);

export default routes;
