import React, { Component } from 'react';

export default class EventCreate extends Component {
    render() {
        return (
            <div className="Test">
                <input
                    type="button"
                    value={this.test}
                    onClick={this.testFunc} />
            </div>
        );
    }
}