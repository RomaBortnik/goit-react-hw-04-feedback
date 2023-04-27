import PropTypes from 'prop-types';

import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const { feedbackWidgetText, feedbackWidgetItem } = css;
  return (
    <div>
      <h2 className={feedbackWidgetText}>Statistics</h2>
      <ul>
        <li className={feedbackWidgetItem}>Good: {good}</li>
        <li className={feedbackWidgetItem}>Neutral: {neutral}</li>
        <li className={feedbackWidgetItem}>Bad: {bad}</li>
        <li className={feedbackWidgetItem}>Total: {total()}</li>
        <li className={feedbackWidgetItem}>
          Positive feedback: {good ? positivePercentage() : '0%'}
        </li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;
