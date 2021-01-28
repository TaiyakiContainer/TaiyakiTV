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
  title: {romaji: string};
  id: number;
};

export type AnilistDetailModel = {
  data: {
    Media: AnilistMediaModel;
  };
};
