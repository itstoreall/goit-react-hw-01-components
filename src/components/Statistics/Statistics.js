import React from 'react';
import PropTypes from 'prop-types';
import StatisticItem from './StatisticItem';
import './style.css';

const Statistics = ({ title, stats }) => (
    <section className="statistics">
        {title && title.length > 0
            && <h2 className="statistics-title">{title}</h2>}
        
        <ul className="statistics-stat-list">
            {stats.map((item) =>
                <li className="statistics-item" key={item.id}>
                    <StatisticItem
                        key={item.id}
                        label={item.label}
                        percentage={item.percentage}
                    />
                </li>
            )}
        </ul>
    </section>
)

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })).isRequired,
};

export default Statistics;