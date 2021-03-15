import shortid from 'shortid';

// selectors
export const getSearchString = ({searchString}) => searchString;
export const countAllCards = ({cards}) => cards.length;
export const countVisibleCards = ({cards, searchString}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const  USE_FILTR = createActionName('USE_FILTR');

// action creators
export const createActionUseFiltr = payload => ({ payload: { ...payload, id: shortid.generate() }, type: USE_FILTR });

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case USE_FILTR:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
}

