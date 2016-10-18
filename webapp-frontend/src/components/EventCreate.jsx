import React, { Component } from 'react';

export default class EventCreate extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <h1>Create Event</h1>

                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name"
                               onChange={this.props.nameChange}
                               value={this.props.values.name}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea className="form-control" id="description"
                                  onChange={this.props.descChange}
                                  value={this.props.values.description}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="start_date">Start Date and Time</label>
                        <input type="text" className="form-control" id="start_date"
                               onChange={this.props.startChange}
                               value={this.props.values.start_date}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="end_date">End Date and Time (optional)</label>
                        <input type="text" className="form-control" id="end_date"
                               onChange={this.props.endChange}
                               value={this.props.values.end_date}/>
                    </div>
                    {/* todo the dates should use a date time picker*/}
                    <div className="form-group">
                        <label htmlFor="location">Location</label>
                        <input type="text" className="form-control" id="location"
                               onChange={this.props.locChange}
                               value={this.props.values.location}/>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox"/> Checkbox Test</label>
                    </div>
                    <button type="button" className="btn btn-default" onClick={this.props.submitForm}>Submit</button>
                </form>
            </div>
        );
    }
}