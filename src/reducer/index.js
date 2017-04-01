import { combineReducers } from 'redux';
import libraryReducer from './LibraryReducer';
import selectedLibraryReducer from './SelectedLibraryReducer';
import loginUserSuccess from './LoginUserSuccess';

export default combineReducers({
    libraries: libraryReducer,
    selectedLibrary: selectedLibraryReducer,
    user: loginUserSuccess
});