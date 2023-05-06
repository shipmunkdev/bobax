import { gql } from '@apollo/client';

export const GET_BOBA_LIST = gql`
  query {
    List {
      id
      name
      description
      price
      imageLink
      options {
        milk {
          name
        }
        toppings {
          name
          price
        }
      }
    }
  }
`;
