import React, { Component } from 'react';
import GroupInfo from '../components/GroupInfo.jsx';
import GroupChat from '../components/chats/group-chat.jsx';
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
        const url = `http://localhost:3000/api/group/${this.props.params.groupId}`;

        axios({
            method: 'get',
            url: url,
        })
            .then(response => {
                console.log(response.data);
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
        const role = "member";
        // TODO use user id
        const url = `http://localhost:3000/api/join/user/${1000}/group/${this.props.params.groupId}/role/${role}`;
        const headers = {'Authorization': localStorage.token};
        axios({
            method: 'post',
            url: url,
            headers: headers
        })
            .then(response => {
                const users = this.state.users;
                users.push(response.data);
                this.setState({users: users})
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
	    <GroupChat group={this.state} user={{id: 1, displayName: "Colin"}}/>
	    </div>
	)
    }
}
