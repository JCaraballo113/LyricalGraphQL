import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class LyricCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { content: '' };
  }

  onSubmit(e) {
    e.preventDefault();

    const { mutate, songId} = this.props;
    const { content } = this.state;

    mutate({
      variables: {
        content,
        songId
      }
    })
    .then(() => {
      this.setState({ content: ''});
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <label>Add a Lyric</label>
        <input value={this.state.content} onChange={e => this.setState({ content: e.target.value })}/>
      </form>
    );
  }
}

const mutation = gql`
mutation AddLyricToSong($content: String!, $songId: ID!) {
  addLyricToSong(content: $content, songId: $songId) {
    id
    lyrics {
      content
    }
  }
}
`;

export default graphql(mutation)(LyricCreate);