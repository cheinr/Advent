import React, { Component } from 'react';

export default class BasicInputField extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input type="text" className="form-control"
                       onChange={this.props.valChange} value={this.props.val}
                       id={this.props.id} />
            </div>
        );
    }
}