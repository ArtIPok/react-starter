import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Container/Container';
// import Card from '../Card/Card';
// import Icon from '../Icon/Icon';
// import { settings } from '../../data/dataStore';
// import Creator from '../Creator/Creator';
// import {Droppable} from 'react-beautiful-dnd';

class SearchResults extends React.Component {
  state = {
    cards: this.props.cards || [],

  }

  static propTypes = {
    cards: PropTypes.array,
    changeSearchString: PropTypes.func,
  }

  componentDidMount(){
    this.props.changeSearchString(this.props.match.params.SearchResults);
  }

  render() {
    // const { cards } = this.props;

    return (
      <Container >
        <h1>Search Resault:</h1>
        {this.props.cards.map(card => <p key={card.id} {...card}></p>)}
      </Container>
    );
  }
}

export default SearchResults;
