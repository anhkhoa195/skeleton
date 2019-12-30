import { getAppDataAction } from 'containers/App/actions';

export const ACTIONS = {
};

export const getMainLayoutDataAction = async() => (
    async (dispatch) => {
        dispatch(getAppDataAction());
    }
);
