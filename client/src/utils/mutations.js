import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      username
      email
      _id
    }
  }
}
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!){
    addUser(username: $username, email: $email, password: $password){
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_CHARITY = gql`
mutation AddCharity($charityName: String!, $charityDescription: String!, $charityUrl: String!, $charityImg: String!) {
  addCharity (charityName: $charityName, charityDescription: $charityDescription, charityUrl: $charityUrl, charityImg: $charityImg){
    charityUrl
    charityDescription
    charityImg
    createdAt
    _id
    username
  }
}
`;
