import gql from 'graphql-tag';

export const likeLyricMutation = gql`
mutation LikeLyric($id: ID) {
  likeLyric(id: $id) {
    id
    likes
  }
}
`;

export const deleteLyricMutation = gql`
mutation DeleteLyric($id: ID!) {
  deleteLyric(id: $id) {
    id
  }
}`;