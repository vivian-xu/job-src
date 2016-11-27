import { Route, IndexRoute } from 'react-router';

import App from './pages/app/App';
import ArticleListPage from './pages/articleListBlock/ArticleListPage';
// import ArticleListBlock from './pages/articleListBlock/ArticleListBlock';
import Profile from './pages/profile/Profile';
import Article from './pages/article/Article';
import AllComments from './pages/allComments/AllComments';
import Comments from './pages/allComments/Comments';
import InfiniteLoadScroll from './components/infiniteLoadScroll/InfiniteLoadScroll';

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={ArticleListPage} />
    <Route path="/articles" component={ ArticleListPage } />
    <Route path="/articles/:articleid" component={ Article } />
    <Route path="/mentors/:mentorId" component={ Profile } />
    <Route path="/mentors/:mentorId/comments" component={ AllComments } />
  </Route>
);

export default routes;
