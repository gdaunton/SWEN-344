var React = require('react')
var Menu = require('./components/Menu')
var Filter = require('./components/Filter')
var Content = require('./components/Content')

var Favorites = React.createClass({
  getInitialState: function() {
    var self = this;
    return {
      data: this.props.user != null ? this.props.user.fav : null,
    }
  },

  filterChange: function(filter) {
    var self = this;
    var newData = null;
    this.props.user.fav.forEach(function(item, index){
      if(item.type == 'US' && filter.us)
        newData.push(item);
      if(item.type == 'World' && filter.world)
          newData.push(item);
      if(item.type == 'Sports' && filter.sports)
          newData.push(item);
      if(item.type == 'Weather' && filter.weather)
          newData.push(item);
      if(item.type == 'Tech' && filter.tech)
          newData.push(item);
    });
    this.setState({data: newData});
  },

  onFavorite: function(data) {
    this.props.updateUser(removeFavorite(this.props.user, data));
  },

  isFavorite: function() {
    return true;
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
module.exports = Favorites
