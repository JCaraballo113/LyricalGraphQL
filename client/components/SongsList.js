import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import { Link } from 'react-router';

// Queries
import fetchSongs from '../queries/fetchSongs';

class SongsList extends Component {

  onSongDelete(id) {
    this.props.deleteSong({
      variables: {
        id
      }
    }).then(() => this.props.data.refetch());
  }

  renderSongs() {
    const { songs } = this.props.data;

    return songs.map(({id, title}) => {
      return (
        <li key={id} className="collection-item">
        <span className="animated__item">{title}</span>
        <i className="material-icons right fade" onClick={() => this.onSongDelete(id)}>delete</i>
        </li>
      );
    });
  }

  render() {
    const { loading } = this.props.data;

    if(loading) { return <div className="loading">Loading</div>; }
    return (
      <div>
        <ul className="collection">
          {this.renderSongs()}
        </ul>
        <Link to="/songs/new" className="btn-floating btn-large red right"><i className="material-icons">add</i></Link>
      </div>
    );
  }
}

const deleteSong = gql`
mutation DeleteSong($id: ID) {
  deleteSong(id: $id) {
    id
  }
}
`;

export default compose(graphql(fetchSongs), graphql(deleteSong, { name: 'deleteSong'}))(SongsList);
