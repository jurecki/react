import {connect} from 'react-redux';
import Column from './Column';
import {getCardsForColumn} from '../../redux/cardsRedux';
import {createActionAddCards} from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCards({
    columnId: props.id,
    title:title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);