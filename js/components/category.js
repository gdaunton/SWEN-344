var React = require('react')

var Category = React.createClass({
  render: function() {
    return (
      <label htmlFor={this.props.icon} className="item">
        <div className="right floated content">
          <div className="ui fitted checkbox">
            <input id={this.props.icon} type="checkbox" />
            <label></label>
          </div>
        </div>
        <i className={"large "+ this.props.icon +" icon"}></i>
        <div className="content">
          {this.props.name}
        </div>
      </label>
    )
  }
});
module.exports = Category
