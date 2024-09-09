import { gql } from "@/__generated__";

const GET_All_EXPERIENCES = gql(/* GraphQL */ `
  query Experiences {
    experiences {
      id
      title
      body
      createdAt
      score
      storeId
      Store {
        id
        name
      }
    }
  }
`);

export default GET_All_EXPERIENCES;
