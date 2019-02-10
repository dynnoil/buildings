import axios from 'axios';
import { Dispatch } from 'redux';

import { FetchMetaAction, receiveResponse, createRequest, createError } from "../fetchMeta/actions";
import { BuildingPost } from "../../types/Building";

export const FETCH_BUILDING_POST = 'FETCH_BUILDING_POST';

export interface PostAction extends FetchMetaAction {
    id?: string;
    post?: BuildingPost;
}

export const receivePost = (id: string, post: BuildingPost): PostAction => ({
    id,
    post,
    ...receiveResponse(FETCH_BUILDING_POST)
});

export const fetchBuildingPost = (id: string) => (dispatch: Dispatch) => {

    dispatch(
        createRequest(FETCH_BUILDING_POST)
    );

    return axios.get<BuildingPost>(`/api/buildings/detail/${id}`).then(
        response => {
            dispatch(receivePost(id, response.data))
        },
        error => {
            dispatch(createError(FETCH_BUILDING_POST, error));
        }
    );
}
