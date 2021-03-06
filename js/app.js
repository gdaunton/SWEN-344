var React = require('react')
var ReactDOM = require('react-dom');
import {Router, Route, IndexRoute, RouteHandler, hashHistory} from 'react-router'
var Home = require('./Home')
var Favorites = require('./Favorites')

var App = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    this.context.router.push('/');
    return {
      'user': null,
    }
  },

  login: function(username, password, callback) {
    var self = this;
    login(username, password, function(data) {
      if (typeof data != 'string') {
        self.setState({'user': data});
      }
      callback(data);
    });
  },

  logout: function() {
    Cookies.set('last_login', Date());
    this.context.router.push('/');
    this.setState({'user': null});
  },

  register: function(username, password, callback) {
    var self = this;
    var data = register(username, password)
    if (typeof data != 'string') {
      self.setState({'user': data});
    }
    callback(data);
  },

  updateUser: function(user) {
    this.setState({'user': user});
  },

  render: function() {
    var user_function = this.state.user == null ? {'login': this.login, 'register': this.register} : {'logout': this.logout};
    return(
      <main>
        {this.props.children && React.cloneElement(this.props.children, {
          action: user_function,
          user: this.state.user,
          updateUser: this.updateUser
        })}
      </main>
    )
  },

});
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="favorites" component={Favorites} />
    </Route>
  </Router>
), document.getElementById('main'));
