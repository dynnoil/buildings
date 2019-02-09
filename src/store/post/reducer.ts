import { FetchMetaState, fetchMeta } from "../fetchMeta/reducer";
import { BuildingBase, BuildingPost } from "../../types/Building";
import { FETCH_BUILDING_POST, PostAction } from "./actions";
import { FetchStatus } from "../fetchMeta/actions";

export interface PostState extends FetchMetaState {
    id: string;
    post: BuildingPost;
}

const initialState: PostState = {
    id: null,
    post: null,
    error: null,
    isFetching: false
};

export const post = (state: PostState = initialState, action: PostAction): PostState => {
    if (action.type !== FETCH_BUILDING_POST) { return state };
    switch (action.status) {
        case FetchStatus.REQUEST:
        case FetchStatus.FAILURE:
            return {
                ...state,
                ...fetchMeta(state, action)
            };
        case FetchStatus.SUCCESS:
            return {
                ...fetchMeta(state, action),
                id: action.id,
                post: action.post
            };
        default:
            return state;
    }
}
