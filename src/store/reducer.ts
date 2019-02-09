import { combineReducers } from 'redux';

import { BuildingsState, buildings } from './buildings/reducer';
import { PostState, post } from './post/reducer';

export interface AppState {
    post: PostState;
    buildings: BuildingsState;
}

export default combineReducers({ post, buildings });