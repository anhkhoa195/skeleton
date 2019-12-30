import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1)
    }
}));


const MBAButton = ({ children, onClick }) => {
    const classes = useStyles();
    return (<Button variant='contained' color='primary' className={ classes.button } onClick={ onClick }>
        { children }
    </Button>);
};

MBAButton.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func
};
MBAButton.defaultProps = {
    children: '',
    onClick: () => {}
};

export default MBAButton;
