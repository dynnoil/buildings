import { Action } from 'redux';

export interface FetchState<T> {
    response: T;
    isFetching: boolean;
    error: Error;
    receivedAt: Date;
}

export enum FetchStatus {
    REQUEST,
    SUCCESS,
    FAILURE
}

export interface FetchAction<T> extends Action<string> {
    status: FetchStatus;
    receivedAt: Date;
    response?: T;
    error?: Error;
}

export const createRequest = (type: string) => ({
    type,
    status: FetchStatus.REQUEST
});

export const createError = (type: string, error: Error) => ({
    type,
    error,
    status: FetchStatus.FAILURE
});

export function receiveResponse<T>(type: string, receivedAt: Date, response: T) {
    return {
        type,
        response,
        receivedAt,
        status: FetchStatus.SUCCESS
    };
}

export function fetchable<T>(state: FetchState<T>, action: FetchAction<T>): FetchState<T> {
    switch (action.status) {
        case FetchStatus.REQUEST:
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case FetchStatus.FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error
            };
        case FetchStatus.SUCCESS:
            return {
                error: null,
                isFetching: false,
                response: action.response,
                receivedAt: action.receivedAt
            };
        default:
            return state;
    }
}