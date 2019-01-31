import { FetchMetaState, fetchMeta } from "../fetchMeta/reducer";
import { Building } from "../../types/Building";
import { BuildingsAction, FETCH_BUILDINGS } from "./actions";
import { FetchStatus } from "../fetchMeta/actions";

export interface BuildingsState extends FetchMetaState {
    items: Building[];
    receivedAt: Date;
}

const initialState: BuildingsState = {
    error: null,
    isFetching: false,
    items: [],
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
                items: action.items,
                receivedAt: action.receivedAt,
                ...fetchMeta(state, action)
            };
        default:
            return state;
    }
}
