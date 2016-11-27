/*global React:true*/
require('./commons/common.js');
require('./styles/style.scss');
require('./fonts/iconfont.eot');
require('./fonts/iconfont.svg');
require('./fonts/iconfont.ttf');
require('./fonts/iconfont.woff');

import ReactDOM from 'react-dom';
import {
  Router,
  browserHistory
} from 'react-router';

import routes from "./routes";
ReactDOM.render(
  <Router history={browserHistory}  routes={routes} />,
  document.getElementById('app')
);
