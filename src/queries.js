import { gql } from '@apollo/client';

export const ANIME_LIST = gql`
  query Page($page: Int, $perPage: Int, $search: String) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      media(sort: [TRENDING, SCORE_DESC, POPULARITY_DESC, TITLE_ROMAJI], search: $search) {
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
