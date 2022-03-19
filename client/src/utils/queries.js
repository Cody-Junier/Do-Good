import { gql } from '@apollo/client';


export const QUERY_CHARITYS = gql`
  query charitys($username: String) {
    charitys(username: $username) {
      _id
      createdAt
      username
      description
    }
  }
`;

export const QUERY_CHARITY = gql`
  query charity($id: ID!) {
    charity(_id: $id) {
      _id
      createdAt
      username
      description
    }
  }
`;



export const QUERY_USER = gql`
  
`;




