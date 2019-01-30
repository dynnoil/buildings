import { Building } from "../types/Building";
import { FetchState, FetchAction, fetchable } from "./fetchable";
import { combineReducers } from "redux";

export interface AppState {
    buildings: BuildingsState;
}

export type BuildingsState = FetchState<Building[]>;

const initialState: BuildingsState = {
    error: null,
    isFetching: false,
    receivedAt: null,
    response: []
};

type BuildingsAction = FetchAction<Building[]>;

export const buildings = (state: BuildingsState = initialState, action: BuildingsAction): BuildingsState => {
    switch (action.type) {
        case 'FETCH_BUILDINGS':
            return fetchable(state, action);
        default:
            return state;
    }
}

export default combineReducers({ buildings });