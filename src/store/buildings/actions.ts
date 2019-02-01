import axios from 'axios';

import { createRequest, createError, receiveResponse } from '../fetchMeta/actions';
import { Building } from '../../types/Building';
import { Dispatch } from 'redux';
import { FetchMetaAction } from '../fetchMeta/actions';
import { Pagination } from './reducer';

export const FETCH_BUILDINGS = 'FETCH_BUILDINGS';

export interface BuildingsAction extends FetchMetaAction {
    items?: Building[];
    receivedAt?: Date;
    pagination?: Pagination;
}

export const requestBuildings = (pagination: Pagination): BuildingsAction => ({
    pagination,
    ...createRequest(FETCH_BUILDINGS)
});

export const receiveBuildings = (items: Building[], receivedAt: Date): BuildingsAction => ({
    items,
    receivedAt,
    ...receiveResponse(FETCH_BUILDINGS)
});

export const fetchBuildings = (pagination: Pagination) => (dispatch: Dispatch) => {

    dispatch(
        requestBuildings(pagination)
    );

    return axios.get<Building[]>(`/buildings?_page=${pagination.page}&_limit=${pagination.limit}`).then(
        response => {
            dispatch(receiveBuildings(response.data, new Date()))
        },
        error => {
            dispatch(createError(FETCH_BUILDINGS, error));
        }
    );
}
