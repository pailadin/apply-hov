import { gql } from '@apollo/client';

export const ANIME_LIST = gql`
  query getAnime(
    $page: Int = 1,
    $perPage: Int = 50,
    $search: String,
    $sort: [MediaSort] = [TRENDING, POPULARITY_DESC, SCORE_DESC, TITLE_ROMAJI]
  ) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      media(search: $search, sort: $sort) {
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
