import { FetchStatus, FetchMetaAction } from './actions';

export interface FetchMetaState {
    error: Error;
    isFetching: boolean;
}

export function fetchMeta(state: FetchMetaState, action: FetchMetaAction): FetchMetaState {
    switch (action.status) {
        case FetchStatus.REQUEST:
            return {
                error: null,
                isFetching: true
            };
        case FetchStatus.FAILURE:
            return {
                isFetching: false,
                error: action.error
            };
        case FetchStatus.SUCCESS:
            return {
                error: null,
                isFetching: false
            };
        default:
            return state;
    }
}
