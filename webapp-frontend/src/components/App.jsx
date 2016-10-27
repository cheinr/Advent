import React from 'react';
import GroupChat from './chats/group-chat';


//dummy objects to pass into group chat
var GROUP1 = {
    id: 0,
    groupName: "Advent Group 1",
    groupPictureUrl: "",
    tags: "",
    description: "A cool Group.",
    events : [],
    userGroups: [],
    groupMembers: []
}
var GROUP2 = {
    id: 1,
    groupName: "Advent Group 2",
    groupPictureUrl: "",
    tags: "",
    description: "A cool Group.",
    events : [],
    userGroups: [],
    groupMembers: []
}
var USER = {
    id: 0,
    displayName: "Fred",
    email: "chein@iastate.edu",
    description: "a;sldkjga;sdlk",
    pictureUrl: "asdagdsg"
}


export default function App(props) {
  return (
    <div className="Test">
      <GroupChat group={GROUP1} user={USER} />
      <GroupChat group={GROUP2} user={USER} />
    </div>
  );
}
