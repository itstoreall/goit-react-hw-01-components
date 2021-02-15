import React from 'react';
import TransactionHistoryItem from './TransactionHistoryItem';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => (
    <table className="transaction-history">
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map((item) =>
                <tr key={item.id}>
                    <TransactionHistoryItem
                        key={item.id}
                        id={item.id}
                        type={item.type}
                        amount={item.amount}
                        currency={item.currency}
                    />
                </tr>
            )}
        </tbody>
    </table>
)

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })).isRequired,
};

export default TransactionHistory;