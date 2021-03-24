import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';
import Creator from '../Creator/Creator';
import {Droppable} from 'react-beautiful-dnd';

class SearchResults extends React.Component {
  state = {
    cards: this.props.cards || [],
  }

  static propTypes = {
    title: PropTypes.node,
    icon: PropTypes.string,
    cards: PropTypes.array,
    addCard: PropTypes.func,
    id: PropTypes.string,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  render() {
    const { title, icon, cards, addCard, id } = this.props;

    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{ title }
          <span className={styles.icon}>
            <Icon name={ icon } className={styles.icon} />
          </span>
        </h3>
        {/* <Droppable droppableId={id}> */}
          {provided => (
            <div 
              className={styles.cards}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {cards.map(cardData => (
                <Card key={cardData.id} {...cardData} />
              ))}

              {provided.placeholder}
            </div>
          )}
        {/* </Droppable> */}
        <div className={styles.creator}> 
          <Creator text={settings.cardCreatorText} action={ addCard } />
        </div>
      </section>
    );
  }
}

export default SearchResults;
