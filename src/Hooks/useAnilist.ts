import {useQuery} from 'react-query';
import {AnilistPagedGraphql} from '../Models/Anilist/graphql';
import {AnilistKeys, AnilistSortingEnum} from '../Models/Anilist/types';

export function useAnilistRequest<T>(key: AnilistKeys) {
  // eslint-disable-next-line no-undef
  const controller = new AbortController();
  const fetcher = () => {
    let grapqh: string;
    switch (key) {
      case 'Trending':
        grapqh = AnilistPagedGraphql(AnilistSortingEnum.TRENDING);
    }
    return fetch('https://graphql.anilist.co', {
      method: 'POST',
      body: JSON.stringify({query: grapqh}),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json() as Promise<T>);
  };

  const query = useQuery<T>(key, fetcher, {
    staleTime: Infinity,
  });

  return {
    query,
    controller,
  };
}
