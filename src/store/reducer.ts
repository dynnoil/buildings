import { combineReducers } from 'redux';

import { BuildingsState, buildings } from './buildings/reducer';

export interface AppState {
    buildings: BuildingsState;
}

export default combineReducers({ buildings });