var React = require('react')
import { Link } from 'react-router'

var Menu = React.createClass({
  render: function() {
    return (
      <div className="ui nav top fixed secondary pointing menu">
        <div className="center logo item">
          <img src="assets/images/icon.png" />
        </div>
        <a className="active link item">
          <i className="large home icon"></i>
          <span className="content">Home</span>
        </a>
        <a className="link item">
          <i className="large star icon"></i>
          <span className="content">Favorites</span>
        </a>
        <div className="right menu">
          <div className="item">
            <a className="ui purple button">Login</a>
          </div>
        </div>
      </div>
    )
  }
});
module.exports = Menu
