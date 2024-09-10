import { gql } from "@/__generated__";

const GET_All_STORES = gql(/* GraphQL */ `
  query AllStores($page: Int, $pageSize: Int, $search: String) {
    stores(page: $page, pageSize: $pageSize, search: $search) {
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
