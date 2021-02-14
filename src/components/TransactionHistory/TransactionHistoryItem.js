import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const TransactionHistoryItem = ({ id, type, amount, currency }) => (
    <Fragment>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
    </Fragment>
);

TransactionHistoryItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
};

export default TransactionHistoryItem;