import { gql } from "@/__generated__";

const GET_All_STORES = gql(/* GraphQL */ `
  query Stores {
    stores {
      id
      name
    }
  }
`);

export default GET_All_STORES;
