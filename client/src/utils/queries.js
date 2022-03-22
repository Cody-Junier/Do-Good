import { gql } from '@apollo/client';


export const QUERY_CHARITIES = gql`
  query charitys($username: String) {
    charitys(username: $username) {
      _id
      charityName
      charityDescription
      charityUrl
      charityImg
      createdAt
      username
    }
  }
`;

export const QUERY_CHARITY = gql`
  query charity($id: ID!) {
    charity(_id: $id) {
      _id
      charityName
      charityDescription
      charityUrl
      charityImg
      createdAt
      username
    }
  }
`;



export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      charities {
        _id
      charityName
      createdAt
      username
      description
      imageUrl
      }
    }
  }
`;




