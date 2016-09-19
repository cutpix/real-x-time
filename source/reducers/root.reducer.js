import {combineReducers} from 'redux';
import courses from './course.reducer';
import authors from './author.reducer';
import ajaxCallsInProgress from './ajax.status.reducer';
import externalLogins from './external.logins.reducer';

const rootReducer = combineReducers({
    courses,
    authors,
    ajaxCallsInProgress,
    externalLogins
});

export default rootReducer;