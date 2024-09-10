import { gql } from "@/__generated__";

const GET_All_EXPERIENCES = gql(/* GraphQL */ `
  query Experiences($page: Int, $pageSize: Int, $search: String) {
    experiences(page: $page, pageSize: $pageSize, search: $search) {
      pageInfo {
        currentPage
        pageSize
        totalPages
      }
      data {
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
  }
`);

export default GET_All_EXPERIENCES;
