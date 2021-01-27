import {TaiyakiSettings} from '../../Models/settings';

export enum SettingsActionType {
  SetSettings = 'SET_SETTINGS',
}

interface ISetSettings {
  type: SettingsActionType.SetSettings;
  payload: TaiyakiSettings;
}

export type Actions = ISetSettings;

export const SetSettings = (settings: TaiyakiSettings) => ({
  type: SettingsActionType.SetSettings,
  payload: settings,
});
