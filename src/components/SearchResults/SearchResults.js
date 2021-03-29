import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Container/Container';
import CardIner from '../Card/CardIner';
// import Card from '../Card/Card';
// import Icon from '../Icon/Icon';
// import { settings } from '../../data/dataStore';
// import Creator from '../Creator/Creator';
// import {Droppable} from 'react-beautiful-dnd';

class SearchResults extends React.Component {
  state = {
    stateSearch: this.props.changeSearchString(this.props.match.params.SearchResaults),
  }

  static propTypes = {
    cards: PropTypes.array,
    changeSearchString: PropTypes.func,
    match: PropTypes.object,
  }

  componentDidMount(){
    this.props.changeSearchString(this.props.match.params.SearchResaults);
  }

  componentDidUpdate(){
    this.props.changeSearchString(this.props.match.params.SearchResaults);
  }

  render() {
    const { cards } = this.props;

    return (
      <Container >
        <h1>Search Resault:</h1>
        {cards.map(cardData => <CardIner key={cardData.id} {...cardData} />)}
      </Container>
    );
  }
}

export default SearchResults;
