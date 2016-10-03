import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class EventCreate extends Component {
    render() {
        return (
            <div className="Test">
                <RaisedButton
                    label={this.props.test}
                    onTouchTap={this.props.submitForm} />
            </div>
        );
    }
}