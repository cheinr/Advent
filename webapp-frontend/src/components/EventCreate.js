import React, { Component } from 'react';

export default class EventCreate extends Component {
    render() {
        // TODO probably should switch over to bootstrap for the desktop app
        return (
            <div>
                <h1>Create Event</h1>

                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea className="form-control" id="description"/>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox"/> Checkbox Test</label>
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
            </div>
        );
    }
}