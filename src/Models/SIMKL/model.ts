export type SimklEpisodesModel = {
  title: string;
  episode: number;
  description?: string;
  img?: string;
  ids: {
    simkl_id: number;
  };
};

export type SimklIdSearchModel = {
  title: string;
  ids: {
    simkl: number;
    slug: string;
  };
};
