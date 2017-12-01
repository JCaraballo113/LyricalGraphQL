import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { fetchSong } from '../queries/fetchSongs';

class SongDetail extends Component {
  render() {
    return(
      <h3>Song Detail</h3>
    );
  }
}

export default graphql(fetchSong)(SongDetail);