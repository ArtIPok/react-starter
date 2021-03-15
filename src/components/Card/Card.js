import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string,
  }

  static defaultProps = {
    icon: settings.defaultCardIcon,
  }

  render () {
    const { title } = this.props;
    
    return (
      <section className={styles.component}>
        <h3>{title}</h3>
      </section>
    );
  }
}

export default Card;
