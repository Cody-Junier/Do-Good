import { gql } from '@apollo/client';


export const QUERY_CHARITIES = gql`
query Charities {
  charities {
    createdAt
    username
    charityUrl
    charityDescription
    charityImg
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

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      charities {
        _id
        username
        createdAt
        charityUrl
        charityDescription
        charityImg
        charityName
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      charities {
        _id
        username
      }
    }
  }
`;

