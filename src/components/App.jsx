import { useState } from 'react';

import Section from 'components/Section';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Notification from 'components/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = value => {
    if (value === 'good') {
      setGood(good + 1);
    }
    if (value === 'neutral') {
      setNeutral(neutral + 1);
    }
    if (value === 'bad') {
      setBad(bad + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    return ((good / totalFeedback) * 100).toFixed(2) + '%';
  };

  const options = { good, neutral, bad };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(options)}
          onLeaveFeedback={addFeedback}
        />
        {countTotalFeedback() ? (
          <Statistics
            options={options}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback yet"></Notification>
        )}
      </Section>
    </>
  );
};
