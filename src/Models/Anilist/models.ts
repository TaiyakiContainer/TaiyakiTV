export type AnilistPagedFrontModel = {
  data: {
    Page: {
      media: AnilistMediaModel[];
    };
  };
};
export type AnilistMediaModel = {
  bannerImage?: string;
  coverImage: {extraLarge: string};
  title: {romaji: string; english?: string};
  id: number;
  description?: string;

  popularity?: number;
  hashtag?: string;
  episodes: number;
  countryOfOrigin?: string;
  status: 'FINISHED' | 'RELEASING' | 'NOT_YET_RELEASED' | 'CANCELED';
  trending?: number;
  averageScore: number;
};

export type AnilistDetailModel = {
  data: {
    Media: AnilistMediaModel;
  };
};
