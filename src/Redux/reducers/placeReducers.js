import { ADD_PLACE } from '../action/types';

const initialState = {
    placeName: '',
    places: [] //tampung nilai berupa array
};

const placeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random(),
                    value: action.payload
                })
            };
        default:
            return state;
    }
}

export default placeReducer;