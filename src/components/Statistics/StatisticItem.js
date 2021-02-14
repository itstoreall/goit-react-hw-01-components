import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const StatisticItem = ({ label, percentage }) => (
    <Fragment>
        <span class="label">{label} </span>
        <span class="percentage">{percentage}%</span>
    </Fragment>
)

StatisticItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};

export default StatisticItem;