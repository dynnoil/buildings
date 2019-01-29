
export interface FetchableState<T> {
    payload: T;
    isFetching: boolean;
    hasError: boolean;
    errorMessage: string;
}