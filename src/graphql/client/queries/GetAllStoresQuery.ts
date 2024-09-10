import { gql } from "@/__generated__";

const GET_All_STORES = gql(/* GraphQL */ `
  query AllStores($page: Int, $pageSize: Int) {
    stores(page: $page, pageSize: $pageSize) {
      pageInfo {
        currentPage
        pageSize
        totalPages
      }
      data {
        id
        name
        activityField
        experiencesCount
        website
        score
      }
    }
  }
`);

export default GET_All_STORES;
