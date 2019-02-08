import axios from 'axios';

import { createRequest, createError, receiveResponse } from '../fetchMeta/actions';
import { BuildingBase, ItemsResponse } from '../../types/Building';
import { Dispatch } from 'redux';
import { FetchMetaAction } from '../fetchMeta/actions';

export const FETCH_BUILDINGS = 'FETCH_BUILDINGS';

export interface BuildingsAction extends FetchMetaAction {
    items?: BuildingBase[];
    hasMore?: boolean;
    receivedAt?: Date;
}

export const receiveBuildings = (items: BuildingBase[], hasMore: boolean, receivedAt: Date): BuildingsAction => ({
    items,
    hasMore,
    receivedAt,
    ...receiveResponse(FETCH_BUILDINGS)
});

export const fetchBuildings = (pageSize: number, lastItemId?: string) => (dispatch: Dispatch) => {

    dispatch(
        createRequest(FETCH_BUILDINGS)
    );

    return axios.get<ItemsResponse<BuildingBase>>(`/api/buildings?pageSize=${pageSize}&lastItemId=${lastItemId}`).then(
        response => {
            dispatch(receiveBuildings(response.data.items, response.data.hasMore, new Date()))
        },
        error => {
            dispatch(createError(FETCH_BUILDINGS, error));
        }
    );
}
