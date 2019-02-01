import { FetchMetaState, fetchMeta } from "../fetchMeta/reducer";
import { Building } from "../../types/Building";
import { BuildingsAction, FETCH_BUILDINGS } from "./actions";
import { FetchStatus } from "../fetchMeta/actions";

export interface Pagination {
    page: number;
    limit: number;
    totalCount?: number;
}

export interface BuildingsState extends FetchMetaState {
    items: Building[];
    receivedAt: Date;
    pagination: Pagination;
}

const initialState: BuildingsState = {
    error: null,
    isFetching: false,
    items: [],
    receivedAt: null,
    pagination: {
        page: 1,
        limit: 5
    }
};

export const buildings = (state: BuildingsState = initialState, action: BuildingsAction): BuildingsState => {
    if (action.type !== FETCH_BUILDINGS) { return state };
    switch (action.status) {
        case FetchStatus.REQUEST:
            return {
                ...state,
                ...fetchMeta(state, action),
                pagination: action.pagination
            };
        case FetchStatus.FAILURE:
            return {
                ...state,
                ...fetchMeta(state, action)
            };
        case FetchStatus.SUCCESS:
            return {
                ...state,
                ...fetchMeta(state, action),
                items: action.items,
                receivedAt: action.receivedAt
            };
        default:
            return state;
    }
}
