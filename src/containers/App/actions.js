import { push, goBack } from 'connected-react-router';
import { AuthService } from 'services';
import { Constants } from 'utils';

const { NO_PERMISSON, NOT_FOUND } = Constants.PATHS;

export const ACTIONS = {
    LOADING: '@@APP/LOADING',
    LOADED: '@@APP/LOADED',

    GET_AUTHENTICATION_START: '@@APP/GET_AUTHENTICATION_START',
    GET_AUTHENTICATION_SUCCESS: '@@APP/GET_AUTHENTICATION_SUCCESS',
    GET_AUTHENTICATION_ERROR: '@@APP/GET_AUTHENTICATION_ERROR'
};

export const getAppDataAction = async() => (
    async (dispatch) => {
        try {
            dispatch(requestStartAction(ACTIONS.GET_AUTHENTICATION_START, {}, false));
            const user = await AuthService.getUserInfo();
            dispatch(requestCompletedAction(ACTIONS.GET_AUTHENTICATION_SUCCESS, { user }, false));
        } catch(error) {
            dispatch(requestCompletedAction(ACTIONS.GET_AUTHENTICATION_ERROR, { error }));
        }
    }
);

export const requestStartAction = (type, payload, async = true) => dispatch => {
    if (async) { dispatch({ type: ACTIONS.LOADING, payload: {} }); }
    dispatch({ type, payload });
};
export const requestCompletedAction = (type, payload, async = true) => dispatch => {
    dispatch({ type, payload });
    if (async) { dispatch({ type: ACTIONS.LOADED, payload: {} });}
};

export const routeTo = (path) => {
    return dispatch => dispatch(push(path));
};
export const routeToBack = () => {
    return dispatch => dispatch(goBack());
};

/**
 * Redirect to login url when user is not authorized
 * @param {Function}
 */
export const notAuthorizedAction = () => {
    return dispatch => dispatch(routeTo(NO_PERMISSON));
};
/**
 * Redirect to no match view
 * @param {Function}
 */
export const noMatchAction = () => {
    return dispatch => dispatch(routeTo(NOT_FOUND));
};
