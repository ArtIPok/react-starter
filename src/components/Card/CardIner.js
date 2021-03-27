import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

const CardIner = props => {
  const { title } = props;

  return (

    <article className={styles.component}>
      {title}
    </article>
  );
};

CardIner.propTypes = {
  title: PropTypes.string,
};

export default CardIner;