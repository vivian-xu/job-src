import { Route, IndexRoute } from 'react-router';

import Test from './pages/Test';
import App from './pages/app/App';
import ArticleListPage from './pages/articleListBlock/ArticleListPage';
import Profile from './pages/profile/Profile';
import Article from './pages/article/Article';
import AllComments from './pages/allComments/AllComments';
import Comments from './pages/allComments/Comments';
// import InfiniteLoadScroll from './components/infiniteLoadScroll/InfiniteLoadScroll';
import Questions from './pages/questions/Questions';
import About from './pages/about/About';
import Deal from './pages/deal/Deal';

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={ArticleListPage} />
    <Route path="/articles" component={ ArticleListPage } />
    <Route path="/articles/:articleid" component={ Article } />
    <Route path="/mentors/:mentorId" component={ Profile } />
    <Route path="/mentors/:mentorId/comments" component={ AllComments } />
    <Route path="/test" component={ Test } />
    <Route path="/qa" component={ Questions } />
    <Route path="/about" component={ About } />
    <Route path="/deal" component={ Deal } />
  </Route>
);

export default routes;
