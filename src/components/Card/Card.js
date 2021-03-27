import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';

import CardIner from './CardIner';

const Card = props => {
  const { title, index, id } = props;

  return (
    <Draggable draggableId={id} index={index} >
      {provided => (
        <CardIner title={title}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
        </CardIner>
      )}
    </Draggable>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  idDom: PropTypes.string,
  id: PropTypes.string,
  index: PropTypes.number,
};

export default Card;