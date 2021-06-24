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
      media(sort: [TRENDING, POPULARITY_DESC, SCORE_DESC, TITLE_ROMAJI], search: $search) {
        id
        description
        title {
          romaji
          english
          native
        }
        coverImage {
          large
        }
        siteUrl
        bannerImage
        isAdult
        meanScore
        popularity
        startDate {
          year
          month
        }
      }
    }
  }
`
