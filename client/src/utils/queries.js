import { gql } from '@apollo/client';


export const QUERY_Charitys = gql`
  query charitys($username: String) {
    charitys(username: $username) {
      _id
      createdAt
      username
      description
    }
  }
`;



export const QUERY_USER = gql`
  
`;




