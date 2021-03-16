import PropTypes from 'prop-types';
import React from 'react';
import styles from './Container.scss';

const Container = ({children}) => {
  // eslint-disable-next-line react/prop-types
  // const {children} = props;
  
  return (
    <div className={styles.component}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;