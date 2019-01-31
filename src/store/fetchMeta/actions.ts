import { Action } from "redux";

export enum FetchStatus {
    REQUEST,
    SUCCESS,
    FAILURE
}

export interface FetchMetaAction extends Action<string> {
    status: FetchStatus;
    error?: Error;
}

export const createRequest = (type: string): FetchMetaAction => ({
    type,
    status: FetchStatus.REQUEST
});

export const createError = (type: string, error: Error): FetchMetaAction => ({
    type,
    error,
    status: FetchStatus.FAILURE
});

export const receiveResponse = (type: string): FetchMetaAction => ({
    type,
    status: FetchStatus.SUCCESS
});
