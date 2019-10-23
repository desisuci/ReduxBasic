import { combineReducers } from 'redux';
import countReducer from './countReducers';
import placeReducer from './placeReducer';
const allReducers = combineReducers({
    count: countReducer,
    listPlaces: placeReducer
});

export default allReducers;