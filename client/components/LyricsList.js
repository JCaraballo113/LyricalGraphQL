import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { fetchSong } from '../queries/fetchSongs';
import { likeLyricMutation, deleteLyricMutation } from '../mutations/lyricMutations';

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

  onDelete(id) {
    this.props.deleteLyric({
      variables: { id },
      refetchQueries: [{ query: fetchSong, variables: { id: this.props.songId } }],
      optimisticResponse: {
        __typename: 'Mutation',
        deleteLyric: {
          __typename: 'LyricType',
          id: null
        }
      }
    });
  }

  renderLyrics() {
    return this.props.lyrics.map(({id, content, likes}) => {
      return <li key={id} className="collection-item">
        <span className="animated__item">{content}</span>
        <div className="vote-box">
          {likes}
          <i className="material-icons right fade" onClick={() => this.onLike(id, likes)}>thumb_up</i>
          <i className="material-icons right fade" onClick={() => this.onDelete(id)}>delete</i>
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

export default compose(graphql(likeLyricMutation, {
  name: 'likeLyric'
}), graphql(deleteLyricMutation, {
  name: 'deleteLyric'
}))(LyricsList);