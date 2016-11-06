import { combineReducers } from 'redux';
import libraryReducer from './libraryReducer'
import studentsReducer from './studentsReducer'
import selectionReducer from './selectionReducer'
import scoreReducer from './scoreReducer'



export default combineReducers({
    libraries : libraryReducer,
    students : studentsReducer,
    selection : selectionReducer,
    currentScore : scoreReducer
});

// returns states 