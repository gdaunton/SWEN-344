var React = require('react')
var Menu = require('./components/Menu')
var Filter = require('./components/Filter')
var Content = require('./components/Content')

var numItems = 5;
var init = {
  us: true,
  world: true,
  sports: true,
  weather: true,
  tech: true
};

var Home = React.createClass({

  getInitialState: function() {
    var self = this;
    getData(init, numItems, function(data){
      self.setState({data: data});
    });
    return {
      data: null,
    }
  },

  filterChange: function(filter) {
    var self = this;
    this.setState({data: null});
    getData(filter, numItems, function(data){
      self.setState({data: data});
    });
  },

  render: function() {
    return (
      <main>
        <Menu action={this.props.route.action}/>
        <div className="ui centered stackable grid" style={{'paddingTop':'5.5em'}}>
          <Filter onChange={this.filterChange} />
          <Content data={this.state.data} />
        </div>
      </main>
    )
  }
});
module.exports = Home
