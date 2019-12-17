
import { combineReducers } from 'redux';
import { HEIGHT_CHANGED } from '../actions/actions';
  
const INITIAL_STATE = { height: null };

const heightReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HEIGHT_CHANGED:
            return { 
                ...state,
                height: action.height
            }        
        default:
            return state
    }
};

const reducers = combineReducers ({
    heightReducer,
});

export default reducers;
