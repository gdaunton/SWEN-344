var React = require('react')
var dateFormat = require('dateformat');

var Item = React.createClass({

  render: function() {
    var image = this.props.data.image != null ? (<div className="image"><img className="masonry-image" src={this.props.data.image} /></div>) : [];
    return (
      <div className="ui card">
        {image}
        <div className="content">
          <a className="header" target="_blank" href={this.props.data.url}>{this.props.data.title}</a>
          <div className="meta">
            <span className="category">{dateFormat(this.props.data.date, "mmm dS, yyyy h:MM TT")}</span>
          </div>
          <div className="description">
            <p>{this.props.data.description}</p>
          </div>
        </div>
        <div className="extra content">
          <div className={this.props.type.icon + " left floated"}>
            <i className={this.props.type.icon + ' icon'} style={{color: this.props.type.color}}></i>
            {this.props.type.type}
          </div>
          <button className={(this.props.selected ? "active " : "") + "right floated star"} onClick={() => { this.props.onFavorite(this.props.data) }}>
            <i className="star icon"></i>
            Favorite
          </button>
        </div>
      </div>
    )
  }
});
module.exports = Item
