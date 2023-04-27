import PropTypes from 'prop-types';

import css from './Section.module.css';

const Section = ({ title, children }) => {
  const { feedbackWidget, feedbackWidgetText } = css;
  return (
    <section className={feedbackWidget}>
      <p className={feedbackWidgetText}>{title}</p>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
