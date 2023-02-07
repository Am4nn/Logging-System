import { SET_LOG, REMOVE_LOG, CLEAR_LOG } from './types';
import { v4 } from 'uuid'

const logReducer = (state, action) => {
    switch (action.type) {
        case SET_LOG: {
            return [...state, { id: v4(), msg: action.payload }];
        }
        case REMOVE_LOG: {
            if (!action.payload.id && !action.payload.msg) {
                const arr = [...state];
                arr.pop();
                return arr;
            }
            return state.filter(st => {
                let res = true;
                if (action.payload.id) {
                    res = res && st.id !== action.payload.id
                }
                if (action.payload.msg) {
                    res = res && st.msg !== action.payload.msg
                }
                return res;
            });
        }
        case CLEAR_LOG:
            return [];
        default:
            return state;
    }
};

export default logReducer;