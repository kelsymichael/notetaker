var React = require('react');
var ReactDOM = require('react-dom');

var Header = React.createClass({
  render: function(){
    return (
        <div> hello world </div>
      )
  }
});

ReactDOM.render(
  <Header />,
  document.getElementById('app')
);