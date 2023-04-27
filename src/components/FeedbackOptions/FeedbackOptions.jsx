import PropTypes from 'prop-types';

import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const { feedbackWidgetBtnList, feedbackWidgetBtn } = css;
  return (
    <ul className={feedbackWidgetBtnList}>
      {options.map(option => {
        return (
          <li key={option}>
            <button
              className={feedbackWidgetBtn}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
