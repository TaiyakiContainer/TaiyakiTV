import React, {
  useContext,
  useReducer,
  useEffect,
  Dispatch,
  createContext,
} from 'react';
import {initalSettingsState, TaiyakiSettings} from '../Models/settings';
import {Actions, SettingsActionType, SetSettings} from './Settings/action';

interface ApplicationState {
  settings: TaiyakiSettings;
}

interface ApplicationStateContext {
  state: ApplicationState;
  dispatch: Dispatch<Actions>;
}

const initialState: ApplicationState = {
  settings: initalSettingsState,
};

const store = createContext<ApplicationStateContext>({
  state: initialState,
  dispatch: () => null,
});
const {Provider} = store;

const appReducer = (
  state: ApplicationState,
  action: Actions,
): ApplicationState => {
  const {settings} = state;
  switch (action.type) {
    case SettingsActionType.SetSettings:
      return {
        ...state,
        settings: {...settings, ...action.payload},
      };
    default:
      return state;
  }
};

const AppProvider = ({children}: {children: JSX.Element}) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return <Provider value={{state, dispatch}}>{children}</Provider>;
};

export {store, AppProvider};
