import React, { Component } from 'react';
import GroupInfo from '../components/GroupInfo.jsx';
import axios from 'axios';

export default class GroupInfoContainer extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
            name: '',
            description: ''
        };
        this.getGroup = this.getGroup.bind(this);
    }

    componentDidMount() {
        this.getGroup();
    }

    getGroup() {
        const url = `http://localhost:3000/api/group/${this.props.params.groupId}`;
        const headers = {'Authorization': localStorage.token};
        axios({
            method: 'get',
            url: url,
            headers: headers
        })
            .then(response => {
                console.log(response.data);
                this.setState({
                    id: response.data.id,
                    name: response.data.groupName,
                    description: response.data.description
                });
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        console.log(this.state);
        return <GroupInfo
            group={this.state}
        />
    }
}