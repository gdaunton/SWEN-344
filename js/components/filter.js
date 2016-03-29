var React = require('react');
var Category = require('./Category');

var Filter = React.createClass({
  render: function() {
    return (
      <div className="four wide column">
        <div className="ui segment">
          <div className="ui middle aligned list">
            <Category name="US News" icon="map marker" />
            <Category name="World News" icon="globe" />
            <Category name="Sports" icon="soccer" />
            <Category name="Weather" icon="cloud" />
            <Category name="Technology" icon="mobile" />
          </div>
        </div>
      </div>
    )
  }
});
module.exports = Filter
