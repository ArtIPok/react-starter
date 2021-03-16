import {connect} from 'react-redux';
import { createAction_moveCard } from '../../redux/cardsRedux';
import Home from './Home';

const mapStateToProps = state => ({
  title: state.app.title,
  lists: state.lists,
});

const mapDispatchToProps = (dispatch) => ({
  moveCard: payload => dispatch(createAction_moveCard(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);