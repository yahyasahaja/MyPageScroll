import { LOGIN_USER_SUCCESS } from '../actions/types';

export default (state = null, action) => {
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}