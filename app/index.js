var React = require('react');
var ReactDOM = require('react-dom');

var Footer = React.createClass({
  render: function(){
    return (
      <div>
        <h1> imma footer </h1>
      </div>
      )
  }
});

var Middle = React.createClass({
  render: function(){
    return (
        <div>
          <h4> imma middle content </h4>
        </div>
      )
  }
});

var Header = React.createClass({
  render: function(){
    return (
        <div> hello world </div>
      )
  }
});

var Container = React.createClass({
  render: function(){
    return (
      <div>
        <Header />
        <Middle />
        <Footer />
      </div>
      )
  }
});

ReactDOM.render(
  <Container />,
  document.getElementById('app')
);