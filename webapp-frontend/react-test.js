// var React = require('react');
// var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
    render: function() {
        return (
            React.createElement('div', {className: "someClass"},
                "Hello, world with React!"
            )
        );
    }
});

ReactDOM.render(
    React.createElement(HelloWorld, null),
    document.getElementById("content")
);