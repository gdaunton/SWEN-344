var React = require('react/addons');
var Category = require('./Category');

var Filter = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function() {
    return {
      us: true,
      world: true,
      sports: true,
      weather: true,
      tech: true
    }
  },

  componentWillUpdate: function(nextProps, nextState) {
    nextProps.onChange(nextState);
  },

  render: function() {
    return (
      <div className="four wide column">
        <div className="ui segment">
          <div className="ui middle aligned list">
            <Category name="US News" icon="map marker" color="#db2828"valueLink={this.linkState("us")} />
            <Category name="World News" icon="globe" color="#1678c2" valueLink={this.linkState("world")} />
            <Category name="Sports" icon="soccer" color="#f26202" valueLink={this.linkState("sports")} />
            <Category name="Weather" icon="cloud" color="#009c95" valueLink={this.linkState("weather")} />
            <Category name="Technology" icon="mobile" color="#5829bb" valueLink={this.linkState("tech")} />
          </div>
        </div>
      </div>
    )
  }
});
module.exports = Filter
