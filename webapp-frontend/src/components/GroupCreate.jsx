import React, { Component } from 'react';

export default class GroupCreate extends Component {
    componentDidMount() {

    }
    render() {
        return (
            <div>
                <h1>Create Group</h1>

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
                    <button type="button" className="btn btn-default" onClick={this.props.submitForm}>Submit</button>
                </form>
            </div>
        );
    }
}