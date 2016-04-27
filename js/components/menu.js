var React = require('react')
import { Link } from 'react-router'

var Menu = React.createClass({
  onComponenetDidMount: function() {
    $('.ui.modal').modal('hide');
  },

  login: function() {
    $('#user').val('');
    $('#pass').val('');
    $('#login .content .ui.error.message').remove();
    $('.ui.modal').modal('show');
    var submit = this.submit;
    var action = "";
    $('#login').submit(function(e) {
      submit(e, action);
    });
    $('#log').click(function(e) {
      action = "login";
    });
    $('#reg').click(function(e) {
      action = "register";
    });
  },

  submit: function(e, action) {
    e.preventDefault();
    if(action == "login") {
      this.props.action.login(this.refs.username.value, this.refs.password.value, function(data){
        result(data);
      });
    } else {
      this.props.action.register(this.refs.username.value, this.refs.password.value, function(data){
        result(data);
      });
    }
  },

  render: function() {
    var text = this.props.action.login != null ? 'Login' : 'Logout';
    var action = this.props.action.login != null ? this.login : this.props.action.logout;
    return (
      <main>
        <div className="ui nav top fixed secondary pointing menu">
          <div className="center logo item">
            <img src="assets/images/icon.png" />
          </div>
          <Link to="/" className="link item" activeClassName="active" onlyActiveOnIndex>
            <i className="large home icon"></i>
            <span className="content">Home</span>
          </Link>
          {(() => {
            if (text == 'Logout') {
              return (
                <Link to="favorites" className="link item" activeClassName="active">
                  <i className="large star icon"></i>
                  <span className="content">Favorites</span>
                </Link>
              );
            }
          })()}
          <div className="right menu">
            <div className="item">
              <a className="ui purple button" onClick={action}>{text}</a>
            </div>
          </div>
        </div>

        <form id="login" className="ui basic small modal" onSubmit={this.submit} style={{textAlign: 'center'}}>
          <img className="ui small image" src="assets/images/icon.png" style={{margin: '0 auto'}}/>
          <div className="header" style={{padding: '0'}}>
            Login / Register
          </div>
          <div className="content">
            <div className="ui form">
              <div className="field">
                <label>Username</label>
                <input id="user" type="text" ref="username" placeholder="Username" required />
              </div>
              <div className="field">
                <label>Password</label>
                <input id="pass" type="password" ref="password" placeholder="Password" required />
              </div>
            </div>
          </div>
          <div className="actions">
            <button id="reg" className="ui purple basic button" type="submit">Register</button>
            <button id="log" className="ui purple basic button" type="submit">Login</button>
          </div>
        </form>
      </main>
    )
  },
});

var result = function(data) {
  if (typeof data == 'string') {
    $('#login .content .ui.error.message').remove();
    $('#login .content').prepend('<div class="ui error message"><div class="header">' + data + '</div></div>');
  } else {
    $('.ui.modal').modal('hide');
  }
}
module.exports = Menu
