import React from 'react';
import PropTypes from 'prop-types';

const Stack = ({ children, spacing, direction, wrap }) => {

    const style = {
        display: 'flex',
        gap: `${spacing * 0.25}rem`,
        flexWrap: wrap ? 'wrap' : 'nowrap',
        flexDirection: direction
    }

    return (
        <div style={style}>
            {children}
        </div>
    );
}


Stack.propTypes = {
    spacing: PropTypes.number,
    wrap: PropTypes.bool,
    direction: PropTypes.oneOf(['row', 'column'])
}

Stack.defaultProps = {
    spacing: 3,
    direction: 'row',
    wrap: false
}

export default Stack;
