var React = require('react')
var Menu = require('./components/Menu')
var Filter = require('./components/Filter')
var Content = require('./components/Content')

var Favorites = React.createClass({
  render: function() {
    return (
      <main>
        <Menu />
        <div className="ui centered stackable sticky grid" style="padding-top:5.5em;">
          <Filter />
          <Content />
        </div>
      </main>
    )
  }
});
module.exports = Favorites
