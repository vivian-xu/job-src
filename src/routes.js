import { Route, IndexRoute } from 'react-router';

import Test from './pages/Test';
import App from './pages/app/App';
import ArticleListBlock from './pages/articleListBlock/ArticleListBlock';
import Profile from './pages/profile/Profile';
import Article from './pages/article/Article';
// import AllComments from './pages/allComments/AllComments';
import AllComments from './pages/allComments/CommentsTest';

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={ArticleListBlock} />
    <Route path="/articlelist" component={ ArticleListBlock } />
    <Route path="/article" component={ Article } />
    <Route path="/mentors/:mentorId" component={ Profile } />
    <Route path="/mentors/:mentorId/comments" component={ AllComments } />

    <Route path="/test" component={ Test } />
  </Route>
);

export default routes;
