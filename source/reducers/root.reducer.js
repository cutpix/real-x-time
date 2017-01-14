import { combineReducers } from 'redux';
import courses from './course.reducer';
import authors from './author.reducer';
import ajaxCallsInProgress from './ajax.status.reducer';
import externalLogins from './external.logins.reducer';
import auth from './auth.reducer';

// The root reducer may combine the output of multiple 
// reducers into a single state tree.
const rootReducer = combineReducers({
    courses,
    authors,
    ajaxCallsInProgress,
    externalLogins,
    auth
});

export default rootReducer;