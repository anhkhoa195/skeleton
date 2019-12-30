import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { AuthService } from 'services';
import { Constants } from 'utils';
import { User } from 'models';

const { NO_PERMISSON } = Constants.PATHS;
/**
 * Validate path with routes based on user role permission
 * @param {String} path
 * @param {Array} routes
 */
const guardPath = (path = '', routes = []) => routes.some(r => path === r || path.indexOf(r) > 0);

const ProtectedRoute = ({ component: Component, user, ...rest }) => {
    const permissions = AuthService.getPermission(user);
    const validPath = permissions && guardPath(rest.path, permissions.ROUTES);

    return (<Route
        { ...rest }
        render={ props => validPath
            ? <Component { ...props } />
            : <Redirect to={ { pathname: NO_PERMISSON, state: { from: props.location } } } /> } />);
};

ProtectedRoute.propTypes = {
    user: PropTypes.instanceOf(User).isRequired,
    component: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.object
    ]).isRequired
};

export default ProtectedRoute;
