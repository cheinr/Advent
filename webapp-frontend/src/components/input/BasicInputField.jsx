import React, { Component } from 'react';

export default class BasicInputField extends Component {
  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input
          type="text"
          className="form-control"
          onChange={this.props.onChange}
          value={this.props.value}
          id={this.props.id}
        />
      </div>
    );
  }
}