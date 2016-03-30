var React = require('react')

var Item = React.createClass({

  render: function() {
    var image = this.props.image != null ? (<div className="image"><img className="masonry-image" src={this.props.image} /></div>) : [];
    return (
      <div className="ui card">
        {image}
        <div className="content">
          <a className="header" href={this.props.url}>{this.props.title}</a>
          <div className="meta">
            <span className="category">{this.props.date}</span>
          </div>
          <div className="description">
            <p>{this.props.description}</p>
          </div>
        </div>
        <div className="extra content">
          <div className={this.props.type.icon + " left floated"}>
            <i className={this.props.type.icon + ' icon'} style={{color: this.props.type.color}}></i>
            {this.props.type.type}
          </div>
          <div className="right floated star">
            <i className="star icon"></i>
            Favorite
          </div>
        </div>
      </div>
    )
  }
});
module.exports = Item
