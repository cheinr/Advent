import React from 'react';


export default class ChatMessageSender extends React.Component {

  render() {
    return (
      <div>
         <form className="form-inline">
           <input type="text" className="form-control" />
           <button type="button" className="btn btn-default">Send</button>
         </form>
      </div>
    );
  }
}
