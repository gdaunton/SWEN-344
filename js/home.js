var React = require('react')
var Menu = require('./components/Menu')
var Filter = require('./components/Filter')
var Content = require('./components/Content')

var Home = React.createClass({
  filterChange: function(filter) {
    
  },

  render: function() {
    return (
      <main>
        <Menu />
        <div className="ui centered stackable sticky grid" style={{'paddingTop':'5.5em'}}>
          <Filter onChange={this.filterChange} />
          <Content />
        </div>
      </main>
    )
  }
});
module.exports = Home
