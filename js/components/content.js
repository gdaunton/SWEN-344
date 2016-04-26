var React = require('react');
var Item = require('./Item');

var Content = React.createClass({

  componentDidMount: function() {
    $('#content').masonry({
      itemSelector: '.ui.card',
    });
  },

  componentDidUpdate: function() {
    $('#content').imagesLoaded().progress( function() {
      $('#content').masonry('reloadItems');
      $('#content').masonry('layout');
      $('.ui.sticky').sticky('refresh');
    });
  },

  render: function() {
    var style = this.props.data != null ? {display: 'none'} : {};
    var elements = [];
    if (this.props.data != null && this.props.data.length != 0) {
      var self = this;
      elements = this.props.data.map(function(item, index) {
        return (<Item onFavorite={self.props.onFavorite} key={index} data={item} type={self.resovleType(item.type)} />);
      });
    } else if (this.props.data != null && this.props.data.length == 0) {
      elements = (<h2 className="ui center aligned purple header" style={{margin: 0, padding: '3em'}}>No Items</h2>);
    }
    return (
      <div id='content' className="ten wide column" style={{minHeight: '10em'}}>
        {elements}
        <div className={"ui " + (this.props.data != null ?  "disabled" : "active") + " text loader"}>Loading</div>
      </div>
    )
  },

  resovleType: function(type) {
    if (type == 'US') {
      return {type: type, icon:"map marker", color:"#db2828"};
    } else if (type == 'World') {
      return {type: type, icon: 'globe', color: '#1678c2'};
    } else if (type == 'Tech') {
      return {type: type, icon: 'mobile', color: '#5829bb'};
    } else if (type == 'Sports') {
      return {type: type, icon: 'soccer', color: '#f26202'};
    } else if (type == 'Weather') {
      return {type: type, icon: 'cloud', color: '#009c95'};
    }
  },

});
module.exports = Content
