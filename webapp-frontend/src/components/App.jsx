import React from 'react';
import GroupChat from './chats/group-chat';

export default function App(props) {
  return (
    <div className="Test">
      <GroupChat groupName="TestGroup" />
    </div>
  );
}
