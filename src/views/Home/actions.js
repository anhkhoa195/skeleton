import { Constants } from 'utils';
import { requestStartAction, requestCompletedAction, routeTo } from 'containers/App/actions';

const { LOGIN_ROUTE } = Constants.PATHS;

export const ACTIONS = {
    'RESET_STATE': '@@HOME/RESET_STATE',

    'LOGOUT_COMPLETE': '@@HOME/LOGOUT_COMPLETE'
};

/**
 * Reset view state action
 * @param {Function}
 */
export const resetStateAction = () => {
    return dispatch => dispatch(requestStartAction(ACTIONS.RESET_STATE, {}, false));
};

export const logoutAction = async() => (
    async (dispatch) => {
        dispatch(requestCompletedAction(ACTIONS.LOGOUT_COMPLETE));
        dispatch(routeTo(LOGIN_ROUTE));
    }
);
