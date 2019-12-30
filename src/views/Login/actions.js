import { AuthService } from 'services';
import { Constants } from 'utils';
import { requestStartAction, requestCompletedAction, routeTo } from 'containers/App/actions';

const { HOME_ROUTE } = Constants.PATHS;

export const ACTIONS = {
    'RESET_STATE': '@@LOGIN/RESET_STATE',

    'LOGIN_REQUEST': '@@LOGIN/LOGIN_REQUEST',
    'LOGIN_SUCCESS': '@@LOGIN/LOGIN_SUCCESS',
    'LOGIN_ERROR': '@@LOGIN/LOGIN_ERROR'
};

/**
 * Reset view state action
 * @param {Function}
 */
export const resetStateAction = () => {
    return dispatch => dispatch(requestStartAction(ACTIONS.RESET_STATE, {}, false));
};

export const loginAction = async() => (
    async (dispatch) => {
        try {
            dispatch(requestStartAction(ACTIONS.LOGIN_REQUEST));
            const user = await AuthService.getUserInfo();
            dispatch(requestCompletedAction(ACTIONS.LOGIN_SUCCESS, { user }));
            dispatch(routeTo(HOME_ROUTE));
        } catch (error) {
            dispatch(requestCompletedAction(ACTIONS.LOGIN_ERROR, { error }));
        }
    }
);
