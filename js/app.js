var React = require('react')
var ReactDOM = require('react-dom');
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
var Home = require('./Home')
var Favorites = require('./Favorites')

var user = null;
var App = React.createClass({
  getInitialState: function() {
    return {
      user: null,
    }
  },

  login: function(username, password, callback) {
    console.log('login');
    var user = login(username, password);
    if (typeof user != 'string') {
      Cookies.set('last_login', Date());
      this.setState({user: user});
    } else {
      callback(user);
    }
  },

  logout: function() {
    this.setState({user: null});
  },

  render: function() {
    var user_function = this.state.user == null ? {'login': this.login} : {'logout': this.logout};
    return(
      <Router history={hashHistory}>
        <Route path="/" action={user_function} component={Home} />
        <Route path="/favorites" action={user_function} component={Home} />
      </Router>
    )
  },

});
ReactDOM.render((<App />), document.getElementById('main'));

function login(username, password) {
  $.ajax("php/login.php", {
    type: "POST",
    data: {username: username, password},
    statusCode: {
      200: function (response) {
        return response.user;
      },
      400: function (response) {
        return 'incorrect password';
      },
      404: function (response) {
        return register(username, password);
      }
    }
  });
};

function register(username, password) {
  $.ajax("php/register.php", {
    type: "POST",
    data: {username: username, password},
    statusCode: {
      200: function (response) {
        return request.user;
      },
      400: function (response) {
        return 'user already exists';
      },
    }
  });
};
