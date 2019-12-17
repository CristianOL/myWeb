
import { createStore } from 'redux';
import reducers from '../reducers/reducers';

const initialState = {
    holita: null,
};

const store = createStore (
    reducers,
);

export default store;
