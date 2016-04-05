var React = require('react')
var ReactDOM = require('react-dom');
import {Router, Route, IndexRoute, RouteHandler, hashHistory} from 'react-router'
var Home = require('./Home')
var Favorites = require('./Favorites')

var App = React.createClass({
  getInitialState: function() {
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
    this.setState({'user': null});
  },

  render: function() {
    var user_function = this.state.user == null ? {'login': this.login} : {'logout': this.logout};
    return(
      <main>
        {this.props.children && React.cloneElement(this.props.children, {
          action: user_function,
          user: this.state.user
        })}
      </main>
    )
  },

});
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="favorites" component={Home} />
    </Route>
  </Router>
), document.getElementById('main'));

function login(username, password, callback) {
  $.getJSON("php/data.json", {
      format: "json"
    })
    .done( function(data) {
      var stuff = null;
      data.users.forEach(function (item, index) {
        if(item.name == username) {
          if(item.password == password) {
            stuff = item;
            return;
          } else {
            stuff = "incorrect password";
          }
        }
      });
      if(stuff == null) stuff = "user not found";
      callback(stuff);
    });
};

function register(username, password) {
  $.getJSON("php/data.json", function(data) {
    data.users.forEach(function(item, index) {
      if(item.name == username) {
        return "user already exists";
      }
    });
    data.users.put({"name": username, "password": password, "fav": []});
    console.log(data);
  });
};
