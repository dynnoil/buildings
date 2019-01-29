import { Action } from 'redux';

import { Building } from "../types/Building";

export const buildings = (state: Building[], action): Building[] => {
    switch (action.type) {
        case 'FETCH_BUILDINGS_REQUEST':
            return action.payload;
        case 'FETCH_BUILDINGS_SUCCESS':
            
    }
}