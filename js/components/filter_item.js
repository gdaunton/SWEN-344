var React = require('react')

var Item = React.createClass({
  render: function() {
    return (
      <div className="item">
        <div className="right floated content">
          <div className="ui fitted checkbox">
            <input type="checkbox" />
            <label></label>
          </div>
        </div>
        <i className={"large "+ this.props.icon +" icon"}></i>
        <div className="content">
          {this.props.name}
        </div>
      </div>
    )
  }
});
module.exports = Item
