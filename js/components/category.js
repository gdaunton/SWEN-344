var React = require('react')

var Category = React.createClass({
  getValueLink: function(props) {
    return props.valueLink || {
      value: props.value,
      requestChange: props.onChange
    };
  },

  handleChange: function(evt){
    this.getValueLink(this.props).requestChange(evt.target.checked);
  },

  componentWillReceiveProps: function(nextProps) {
    var valueLink = this.getValueLink(nextProps);
    $(this.getDOMNode()).children('input').prop('checked', valueLink.value);
  },

  render: function() {
    var valueLink = this.getValueLink(this.props);
    var style = {color: this.props.color};
    return (
      <label htmlFor={this.props.icon} className="item">
        <div className="right floated content">
          <div className="ui fitted checkbox">
            <input id={this.props.icon} type="checkbox" checked={valueLink.value} onChange={this.handleChange}/>
            <label></label>
          </div>
        </div>
        <i style={style} className={"large "+ this.props.icon +" icon"}></i>
        <div className="content">
          {this.props.name}
        </div>
      </label>
    )
  }
});
module.exports = Category
