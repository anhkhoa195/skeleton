import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Constants } from 'utils';
import { User } from 'models';
import { ProtectedRoute } from 'containers';
import { Loading } from 'components';
import { Login, Home, Admin, NoPermission, NoMatch } from 'views';
import * as mainLayoutActions from './actions';
import './style.scss';

const { LOGIN_ROUTE, HOME_ROUTE, ADMIN_ROUTE, NO_PERMISSON } = Constants.PATHS;

class MainLayout extends Component {
    componentDidMount() {
        this.props.actions.getMainLayoutDataAction();
    }

    render() {
        const { user, isProcessing } = this.props;
        return (
            <div>
                { user && <div id='mba-main-layout'>
                    <main>
                        <Switch>
                            <ProtectedRoute exact path={ HOME_ROUTE } user={ user } component={ Home } />
                            <ProtectedRoute path={ ADMIN_ROUTE } user={ user } component={ Admin } />

                            <Route path={ LOGIN_ROUTE } component={ Login } />
                            <Route path={ NO_PERMISSON } component={ NoPermission } />
                            <Route component={ NoMatch } />
                        </Switch>
                    </main>
                </div> }
                <Loading show={ isProcessing } />
            </div>
        );
    }
}

MainLayout.propTypes = {
    user: PropTypes.instanceOf(User),
    isProcessing: PropTypes.bool
};
MainLayout.defaultProps = {
    user: null,
    isProcessing: false
};

const mapStateToProps = (state) => ({
    user: state.App.get('user'),
    isProcessing: state.App.get('isProcessing')
});
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(mainLayoutActions, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainLayout));
