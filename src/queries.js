import { gql } from '@apollo/client';

export const ANIME_LIST = gql`
  query Page($page: Int, $perPage: Int, $sort: [MediaSort], $search: String) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      media(sort: $sort, search: $search) {
        id
        title {
          romaji
          english
          native
        }
        coverImage {
          large
        }
        isAdult
        status
        meanScore
        popularity
      }
    }
  }
`
