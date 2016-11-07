import React, { Component } from 'react';
import GroupCreate from '../components/GroupCreate';
import axios from 'axios';

export default class GroupCreateContainer extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            description: ""
        };
        this.nameChange = this.nameChange.bind(this);
        this.descChange = this.descChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    nameChange(e) {
        this.setState({name: e.target.value});
    }
    descChange(e) {
        this.setState({description: e.target.value});
    }

    submitForm() {
        const url = "http://localhost:3000/api/group/new/";
        const data = {

            groupName: this.state.name,
            description: this.state.description
        };
        axios({method: 'post',
            headers: {'Authorization': localStorage.token},
            url: url,
            data: data}
        )
            .then(response => {
                console.log(response.data);
                this.context.router.push(`/group/${response.data.id}`);
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        return (
            <div>
                <GroupCreate
                    nameChange={this.nameChange}
                    descChange={this.descChange}
                    submitForm={this.submitForm}
                    values={this.state}
                />
            </div>
        )
    }
}

GroupCreateContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
};