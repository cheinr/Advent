import React, { Component } from 'react';
import {Link} from 'react-router';
import GroupInfo from '../components/GroupInfo.jsx';
import axios from 'axios';

export default class GroupInfoContainer extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
            name: '',
            description: '',
            events: [],
            users: []
        };
        this.getGroup = this.getGroup.bind(this);
        this.joinGroup = this.joinGroup.bind(this);
    }

    componentDidMount() {
        this.getGroup();
    }

    getGroup() {
        const url = `/api/group/${this.props.params.groupId}`;

        axios({
            method: 'get',
            url: url,
        })
            .then(response => {
                console.log(response.data);
		console.log(response.data.userGroups);
                this.setState({
                    id: response.data.id,
                    name: response.data.groupName,
                    description: response.data.description,
                    events: response.data.events,
                    users: response.data.userGroups
                });
            })
            .catch(error => {
                console.log(error);
            });
    };

    joinGroup() {

        const url = `/api/join/group/${this.props.params.groupId}`;
        axios({
            method: 'post',
            url: url,
        })
            .then(response => {
                const users = this.state.users;
                users.push(response.data);
                this.setState({users: users});
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        console.log(this.state);
        return (
	    <div>
		<GroupInfo group={this.state}
			   groupId={this.props.params.groupId}
			   joinGroup={this.joinGroup}
		/>
	    </div>
	)
    }
}
