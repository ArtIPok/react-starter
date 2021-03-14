import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';
import { settings } from '../../data/dataStore';
// import {settings} from '../../data/dataStore';
// import Creator from '../Creator/Creator.js';

class Column extends React.Component {
  state = {
    // eslint-disable-next-line react/prop-types
    cards: this.props.cards || [],
  }

  static propTypes = {
    title: PropTypes.node,
    icon: PropTypes.Icon,
    cards: PropTypes.array,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  render() {
    const { title, icon, cards } = this.props;

    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{ title }
          <span className={styles.icon}>
            <Icon name={ icon } />
          </span>
        </h3>
        <div className={styles.cards}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
        {/* <div>
          {this.state.cards.map(({key, ...cardProps}) => (
            <Card key={key} {...cardProps} />
          ))}
        </div>
        {/* <div className={styles.creator}> 
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
          </div> */}
      </section>
    );
  }
}

export default Column;
