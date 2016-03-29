var React = require('react')
import { Link } from 'react-router'

var Menu = React.createClass({
  render: function() {
    return (
      <div className="ui nav top fixed secondary pointing menu">
        <div className="center logo item">
          <img src="assets/images/icon.png" />
        </div>
        <a className="active item">
          <i className="large home icon"></i>
          Home
        </a>
        <a className="item">
          <i className="large star icon"></i>
          Favorites
        </a>
      </div>
    )
  }
});
module.exports = Menu
