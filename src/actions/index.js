import { LOGIN_USER_SUCCESS } from './types';

export const selectLibrary = id => {
    return { type: 'select_library', goto: id };
};

export const loginState = (state, logout) => {
    return {
        type: LOGIN_USER_SUCCESS,
        payload: state,
        logout: logout
    };
}