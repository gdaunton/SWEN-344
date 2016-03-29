var React = require('react')
import { Link } from 'react-router'

var Menu = React.createClass({
  render: function() {
    return (
      <div className="ui nav top fixed secondary pointing menu">
        <div className="center logo item">
          <img src="assets/images/icon.png" />
        </div>
        <Link to="/" className="link item" activeClassName="active">
          <i className="large home icon"></i>
          <span className="content">Home</span>
        </Link>
        <Link to="favorites" className="link item" activeClassName="active">
          <i className="large star icon"></i>
          <span className="content">Favorites</span>
        </Link>
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
