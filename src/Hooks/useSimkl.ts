import {useState} from 'react';
import {LayoutAnimation} from 'react-native';
import {useQuery} from 'react-query';
import {SimklEpisodesModel, SimklIdSearchModel} from '../Models/SIMKL/model';
import {SimklKeys} from '../Models/SIMKL/types';

type Options = {
  id?: number;
  idMal?: number;
  jsonData?: string;
};

export function useSimklRequest<T>(key: SimklKeys, options?: Options) {
  const controller = new AbortController();
  const BASE_URL = 'https://api.simkl.com';
  const CLIENT_ID =
    'b3392816b2f405397aa0721dc2af589e2ed6f71d333abd6200ae19a56d9bc685';

  const [simklID, setSimklID] = useState<number | undefined>(options?.id);

  const method = (): 'POST' | 'GET' => {
    // if (key === 'Episodes') return 'GET';
    return 'POST';
  };

  const transformResponse = (data: T) => {
    if (key === 'Episodes') {
      ((data as unknown) as SimklEpisodesModel[]).forEach((i) => {
        if (i.img) {
          i.img = 'https://simkl.net/episodes/' + i.img + '_w.jpg';
        }
      });
    }
  };

  const fetcher = (): Promise<T> => {
    let path: string;
    switch (key) {
      case 'Episodes':
        path = '/anime/episodes/' + options?.id ?? simklID;
        break;
      case 'Search':
        path = '/search/id?mal=' + options!.idMal + 'extended=full';
        break;
      default:
        throw new Error(
          '[Error in useSimklRequest: This simkl key does not exist]',
        );
    }
    const searchFetcher = (): Promise<void> => {
      if (simklID) {
        return Promise.resolve();
      }
      return fetch(BASE_URL + '/search/id?mal=' + options!.idMal, {
        headers: {
          'simkl-api-key': CLIENT_ID,
        },
        signal: controller.signal,
      })
        .then((response) => response.json() as Promise<SimklIdSearchModel[]>)
        .then((json) => {
          if (json.length > 0) {
            setSimklID(json[0].ids.simkl);
            if (key === 'Episodes') {
              path = '/anime/episodes/' + json[0].ids.simkl + '?extended=full';
            }
          } else {
            console.warn('Simkl ID could not be provided for this anime');
          }
        });
    };
    return searchFetcher().then(() =>
      fetch(BASE_URL + path, {
        headers: {
          'simkl-api-key': CLIENT_ID,
        },
        signal: controller.signal,
        method: method(),
        body: method() === 'POST' ? options!.jsonData : undefined,
      }).then((response) => response.json() as Promise<T>),
    );
  };

  const query = useQuery<T>(key, fetcher, {
    onSettled: () =>
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut),
    onSuccess: transformResponse,
    enabled: options && options!.idMal !== undefined,
  });

  return {query, controller, simklID};
}
