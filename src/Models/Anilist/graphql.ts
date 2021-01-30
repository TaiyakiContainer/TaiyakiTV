import {AnilistSortingEnum} from './types';

export const AnilistPagedGraphql = (sort: AnilistSortingEnum): string => `
query {
    Page(page: 1) {
      media(sort: ${sort}, type: ANIME){
        bannerImage
        coverImage{extraLarge}
        title{romaji}
        id
      }
    }
    }
`;

export const AnilistDetailGraphql = (id: number): string => `

query {
  Media(id: ${id}, type: ANIME){
    bannerImage
    coverImage{extraLarge}
    title{romaji english}
    id
    idMal
    episodes
    nextAiringEpisode {
      airingAt
      episode
    }
    hashtag
    episodes
    countryOfOrigin
    status
    trending
    averageScore
    popularity
    description
  }
}
`;
