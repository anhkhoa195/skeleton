import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'components/controls';
import './style.scss';
import * as loginActions from './actions';

class Login extends Component {
    render() {
        return (<div id='mba-login-view'>
            <h4>Login View</h4>
            <Button onClick={ this.onLoginClick }>Login</Button>
        </div>);
    }

    onLoginClick = () => {
        this.props.actions.loginAction();
    }
}

Login.propTypes = {
    children: PropTypes.node
};
Login.defaultProps = {
    children: null
};

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(loginActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
