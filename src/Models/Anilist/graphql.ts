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
