var React = require('react');
var Item = require('./Item');

var Filter = React.createClass({
  render: function() {
    return (
      <div className="four wide column">
        <div className="ui segment">
          <div className="ui middle aligned list">
            <Filter-Item name="US News" icon="map marker" />
            <Filter-Item name="World News" icon="globe" />
            <Filter-Item name="Sports" icon="soccer" />
            <Filter-Item name="Weather" icon="cloud" />
            <Filter-Item name="Technology" icon="mobile" />
          </div>
        </div>
      </div>
    )
  }
});
module.exports = Filter
