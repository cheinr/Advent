var TestComponent = React.createClass({
    render: function() {
        return (
            React.createElement('div', {className: "someClass"},
                "Test Component"
            )
        );
    }
});

ReactDOM.render(
    React.createElement(TestComponent, null),
    document.getElementById("container")
);