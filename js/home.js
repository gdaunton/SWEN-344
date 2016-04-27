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

  onFavorite: function(data) {
    if(this.isFavorite(data.url)) {
      this.props.updateUser(removeFavorite(this.props.user, data));
    } else {
      this.props.updateUser(addFavorite(this.props.user, data));
    }
  },

  isFavorite: function(url) {
    var favorite = false;
    if(this.props.user == null)
      return false;
    this.props.user.fav.forEach(function(item){
      if(item.url === url){
        favorite = true;
        return;
      }
    });
    return favorite;
  },

  render: function() {
    return (
      <main>
        <Menu action={this.props.action} user={this.props.user} />
        <div className="ui centered stackable grid" style={{'paddingTop':'5.5em'}}>
          <Filter onChange={this.filterChange} user={this.props.user} />
          <Content user={this.props.user} data={this.state.data} isFavorite={this.isFavorite} onFavorite={this.onFavorite}/>
        </div>
      </main>
    )
  }
});
module.exports = Home
