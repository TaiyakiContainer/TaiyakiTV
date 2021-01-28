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
  Media(id: ${id}){
    bannerImage
    coverImage{extraLarge}
    title{romaji}
    id
    episodes
    nextAiringEpisode {
      airingAt
      episode
    }
    popularity
    description
  }
}
`;
