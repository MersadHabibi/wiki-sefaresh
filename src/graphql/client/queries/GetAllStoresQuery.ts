import { gql } from "@/__generated__";

const GET_All_STORES = gql(/* GraphQL */ `
  query AllStores {
    stores {
      id
      name
      activityField
      experiencesCount
      website
      score
    }
  }
`);

export default GET_All_STORES;
