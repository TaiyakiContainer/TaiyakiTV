import {useQuery} from 'react-query';
import {
  AnilistDetailGraphql,
  AnilistPagedGraphql,
} from '../Models/Anilist/graphql';
import {AnilistKeys, AnilistSortingEnum} from '../Models/Anilist/types';

type Options = {
  id: number;
};

export function useAnilistRequest<T>(key: AnilistKeys, options?: Options) {
  // eslint-disable-next-line no-undef
  const controller = new AbortController();
  const fetcher = () => {
    let grapqh: string;
    switch (key) {
      case 'Trending':
        grapqh = AnilistPagedGraphql(AnilistSortingEnum.TRENDING);
        break;
      case 'Popular':
        grapqh = AnilistPagedGraphql(AnilistSortingEnum.POPULAR);
        break;
      case 'Detail':
        if (!options?.id)
          throw new Error('ID must not be null for Anilist Detail requests');
        grapqh = AnilistDetailGraphql(options.id);
        break;
    }
    return fetch('https://graphql.anilist.co', {
      method: 'POST',
      body: JSON.stringify({query: grapqh}),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json() as Promise<T>);
  };

  const query = useQuery<T>(
    key !== 'Detail' ? key : options!.id.toString(),
    fetcher,
    {
      staleTime: Infinity,
    },
  );

  return {
    query,
    controller,
  };
}
