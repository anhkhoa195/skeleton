import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { Button } from 'components/controls';
import './style.scss';
import * as homeActions from './actions';

class Home extends Component {
    render() {
        return (
            <Grid id='mba-home-view' container>
                <Grid className='title' item xs={ 12 } sm={ 4 }>
                    <h4>Home View</h4>
                </Grid>
                <Grid className='content' item xs={ 12 } sm={ 4 }>
                    Content 1
                </Grid>
                <Grid className='action' item xs={ 12 } sm={ 4 }>
                    <Button onClick={ this.onLogoutClick }>Logout</Button>
                </Grid>
            </Grid>
        );
    }

    onLogoutClick = () => {
        this.props.actions.logoutAction();
    }
}

Home.propTypes = {
    children: PropTypes.node
};
Home.defaultProps = {
    children: null
};

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(homeActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
