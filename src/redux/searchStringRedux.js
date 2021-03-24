import shortid from 'shortid';

// selectors
export const getSearchString = ({searchString}) => searchString;
export const countAllCards = ({cards}) => cards.length;
export const countVisibleCards = ({cards, searchString}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;
export const getCardsForSearchString = ({ cards, searchString}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title));

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const  USE_FILTR = createActionName('USE_FILTR');

// action creators
export const createAction_changeSearchString = payload => ({payload, id: shortid.generate(), type: USE_FILTR });

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case USE_FILTR:
      return action.payload;
    default:
      return statePart;
  }
}

