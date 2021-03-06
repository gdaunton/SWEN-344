var React = require('react/addons');
var Category = require('./Category');
var dateFormat = require('dateformat');

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
  componentDidMount: function() {
    console.log($(window).width());
    if($(window).width() > 750) {
      $('.ui.sticky').sticky({
        offset: 75,
      });
    } else {
      $('.ui.sticky').removeClass('sticky');
    }
  },

  componentWillUpdate: function(nextProps, nextState) {
    if (nextState != this.state)
      nextProps.onChange(nextState);
  },

  render: function() {
    return (
      <div className="filter four wide column">
        <div className="ui sticky segment">
          {(() => {
            if (this.props.user != null) {
              return (
                <h4 className="ui purple header">
                  Logged in as <b>{this.props.user.username}</b>
                <span className="sub header">Last login: {Cookies.get('last_login') != null ? dateFormat(Cookies.get('last_login'), "mmm dS, yyyy h:MM TT") : "N/A"}</span>
                </h4>
              );
            }
          })()}
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
