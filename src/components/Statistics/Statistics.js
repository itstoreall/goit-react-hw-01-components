import React from 'react';
import PropTypes from 'prop-types';
import StatisticItem from './StatisticItem';
import setColor from './colorsHandler';
import './Statistics.scss';

const Statistics = ({ title, stats, colors }) => (
    
    <section className="statistics">
        {title && title.length > 0
            && <h2 className="statistics-title">{title}</h2>}
        
        <ul className="statistics-stat-list">
                {stats.map((item) => {
                
                    return <li
                        className="statistics-item"
                        key={item.id}
                        style={{backgroundColor: setColor(colors)}}
                    >
                        <StatisticItem
                            key={item.id}
                            label={item.label}
                            percentage={item.percentage}
                        />
                    </li>
                }
                
            )}
        </ul>
    </section>
)

Statistics.defaultProps = {
  colors: [{color: "#666666"}],
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    colors: PropTypes.arrayOf(PropTypes.shape({
        color: PropTypes.string,  
    })),
    })).isRequired,
};

export default Statistics;