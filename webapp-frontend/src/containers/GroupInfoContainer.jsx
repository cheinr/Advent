import React, { Component } from 'react';
import GroupInfo from '../components/GroupInfo.jsx';
import axios from 'axios';

export default class GroupInfoContainer extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
            name: '',
            description: '',
            events: []
        };
        this.getGroup = this.getGroup.bind(this);
        this.getGroupEvents = this.getGroupEvents.bind(this);
        this.joinGroup = this.joinGroup.bind(this);
    }

    componentDidMount() {
        this.getGroup();
        this.getGroupEvents();
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

    getGroupEvents() {
        const url = `http://localhost:3000/api/event/group/${this.props.params.groupId}`;
        const headers = {'Authorization': localStorage.token};
        axios({
            method: 'get',
            url: url,
            headers: headers
        })
            .then(response => {
                console.log(response.data);
                this.setState({
                    events: response.data
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    joinGroup() {
        const role = "member";
        // TODO use user id
        const url = `http://localhost:3000/api/join/user/${1}/group/${this.props.params.groupId}/role/${role}`;
        const headers = {'Authorization': localStorage.token};
        axios({
            method: 'post',
            url: url,
            headers: headers
        })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        console.log(this.state);
        return <GroupInfo
            group={this.state}
            groupId={this.props.params.groupId}
            joinGroup={this.joinGroup}
        />
    }
}