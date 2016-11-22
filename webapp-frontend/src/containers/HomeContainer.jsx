import React from 'react';
import axios from 'axios';
import Announcement from '../components/display/Announcement';
import Error from '../components/feedback/Error';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      announcements: [],
      showErrors: false,
    };
    this.getAnnouncementsForUser = this.getAnnouncementsForUser.bind(this);
  }

  componentWillMount() {
    this.getAnnouncementsForUser();
  }

  getAnnouncementsForUser() {
    const url = `/api/announcement/homepage/user/${localStorage.id}`;

    axios.get(url)
      .then((response) => {
        this.setState({ announcements: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          showErrors: true,
          errorMessage: 'There was an error receiving announcements from the server',
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.showErrors ? <Error>{this.state.errorMessage}</Error> : null}
        <h3>News Feed</h3>
        {this.state.announcements.map((announcement, id) =>
          <Announcement key={id} title={announcement.title} content={announcement.content} date={new Date(announcement.date)} group={announcement.groupDTO} />
        )}
      </div>
    );
  }
}
