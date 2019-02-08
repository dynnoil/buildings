import { FetchMetaState, fetchMeta } from "../fetchMeta/reducer";
import { BuildingBase } from "../../types/Building";
import { BuildingsAction, FETCH_BUILDINGS } from "./actions";
import { FetchStatus } from "../fetchMeta/actions";

export interface BuildingsState extends FetchMetaState {
    items: BuildingBase[];
    hasMore: boolean;
    receivedAt: Date;
}

const initialState: BuildingsState = {
    error: null,
    isFetching: false,
    items: [],
    hasMore: false,
    receivedAt: null
};

export const buildings = (state: BuildingsState = initialState, action: BuildingsAction): BuildingsState => {
    if (action.type !== FETCH_BUILDINGS) { return state };
    switch (action.status) {
        case FetchStatus.REQUEST:
        case FetchStatus.FAILURE:
            return {
                ...state,
                ...fetchMeta(state, action)
            };
        case FetchStatus.SUCCESS:
            return {
                ...fetchMeta(state, action),
                items: state.items.concat(action.items),
                hasMore: action.hasMore,
                receivedAt: action.receivedAt
            };
        default:
            return state;
    }
}
