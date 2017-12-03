import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class LyricsList extends Component {

  onLike(id, likes) {
    this.props.likeLyric({ 
      variables: { id },
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          id,
          __typename: 'LyricType',
          likes: likes + 1
        }
      }
    });
  }

  renderLyrics() {
    return this.props.lyrics.map(({id, content, likes}) => {
      return <li key={id} className="collection-item">
        <span className="animated__item">{content}</span>
        <div className="vote-box">
          <i className="material-icons right fade" onClick={() => this.onLike(id, likes)}>thumb_up</i>
          {likes}
        </div>
      </li>;
    });
  }

  render() {
    return (
      <ul className="collection">
        {this.renderLyrics()}
      </ul>
    );
  }
}

const mutation = gql`
mutation LikeLyric($id: ID) {
  likeLyric(id: $id) {
    id
    likes
  }
}
`;

export default graphql(mutation, {
  name: 'likeLyric'
})(LyricsList);