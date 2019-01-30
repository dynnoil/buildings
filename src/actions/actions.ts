import axios from 'axios';

import { createRequest, receiveResponse, createError } from '../reducers/fetchable';
import { Building } from '../types/Building';
import { Dispatch } from 'redux';

export const fetchBuildings = () => (dispatch: Dispatch) => {

    dispatch(
        createRequest('FETCH_BUILDINGS')
    );

    return axios.get<Building[]>('/buildings').then(
        response => {
            dispatch(receiveResponse<Building[]>('FETCH_BUILDINGS', new Date(), response.data))
        },
        error => {
            dispatch(createError('FETCH_BUILDINGS', error));
        }
    );
}
