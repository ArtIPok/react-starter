import {connect} from 'react-redux';
import {getColumnsForList, createActionAddColumn}  from '../../redux/columnsRedux';
import List from './List';

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const filteredLists = state.lists.filter(list => list.id == id);
  const listParams = filteredLists[0] || {};

  return {
    ...listParams,
    columns: getColumnsForList(state, id),
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.match.props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);