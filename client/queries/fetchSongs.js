import gql from 'graphql-tag';

export const fetchSongs = gql`
{
  songs {
    id
    title
  }
}
`;

export const fetchSong = gql`
query Song($id: ID!) {
  song(id: $id) {
    id
    title,
    lyrics
  }
}
`;
