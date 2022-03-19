import { gql } from '@apollo/client';


export const QUERY_CHARITYS = gql`
  query charitys($username: String) {
    charitys(username: $username) {
      _id
      charityName:
      createdAt
      username
      description
      imageUrl:
    }
  }
`;

export const QUERY_CHARITY = gql`
  query charity($id: ID!) {
    charity(_id: $id) {
      _id
      charityName:
      createdAt
      username
      description
      imageUrl:
    }
  }
`;



export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      password:
      charities {
        _id
      charityName:
      createdAt
      username
      description
      imageUrl:
      }
    }
  }
`;



