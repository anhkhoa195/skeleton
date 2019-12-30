import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Loading = ({ show }) => {
    return (
        show && <div id='mba-loading-component'>Loading ...</div>
    );
};

Loading.propTypes = {
    show: PropTypes.bool
};
Loading.defaultProps = {
    show: false
};

export default Loading;
