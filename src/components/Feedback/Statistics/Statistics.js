import React from "react";
import css from './Statistics.module.css'
import PropTypes from 'prop-types';

const Statistics = ({good, neutral, bad, total, percentage}) => {
    return (
        <ul className={css.list}>
            <li className={css.item}>Good:{good}</li>
            <li className={css.item}>Neutral:{neutral}</li>
            <li className={css.item}>Bad:{bad}</li>
            <li className={css.item}>Total:{total}</li>
            <li className={css.item}>Percentage:{percentage}%</li>
        </ul>
    )
}

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
}

// Profile.propTypes = {
//     name: PropTypes.string.isRequired,
//     tag: PropTypes.string.isRequired,
//     location: PropTypes.string.isRequired,
//     avatar: PropTypes.string.isRequired,
//     followers: PropTypes.number.isRequired,
//     views: PropTypes.number.isRequired,
//     likes: PropTypes.number.isRequired,
//   };