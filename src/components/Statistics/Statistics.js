import React from 'react';
import PropTypes from 'prop-types';
import StatisticItem from './StatisticItem';

const Statistics = ({ title, stats }) => (
    <section class="statistics">
        {title && title.length > 0
            && <h2 class="title">{title}</h2>}
        
        <ul class="stat-list">
            {stats.map((item) =>
                <li class="item" key={item.id}>
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