var React = require('react')
var ReactDOM = require('react-dom');
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
var Home = require('./Home')
var Favorites = require('./Favorites')
var NotFound = require('./NotFound')

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
  </Router>
), document.body);
