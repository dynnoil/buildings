import axios from 'axios';

import { createRequest, createError, receiveResponse } from '../fetchMeta/actions';
import { Building } from '../../types/Building';
import { Dispatch } from 'redux';
import { FetchMetaAction } from '../fetchMeta/actions';

export const FETCH_BUILDINGS = 'FETCH_BUILDINGS';

export interface BuildingsAction extends FetchMetaAction {
    items: Building[];
    receivedAt: Date;
}

export const receiveBuildings = (items: Building[], receivedAt: Date): BuildingsAction => ({
    items,
    receivedAt,
    ...receiveResponse(FETCH_BUILDINGS)
});

export const fetchBuildings = () => (dispatch: Dispatch) => {

    dispatch(
        createRequest(FETCH_BUILDINGS)
    );

    return axios.get<Building[]>('/buildings').then(
        response => {
            dispatch(receiveBuildings(response.data, new Date()))
        },
        error => {
            dispatch(createError(FETCH_BUILDINGS, error));
        }
    );
}
