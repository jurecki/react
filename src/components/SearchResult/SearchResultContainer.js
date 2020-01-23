import {connect} from 'react-redux';
import SearchResult from './SearchResult.js';
import {getCardsForAllList} from '../../redux/cardsRedux';
import {getSearchString, createAction_changeSearchString} from '../../redux/searchStringRedux';

const mapStateToProps = (state,props) => ({
  searchString: getSearchString(state),
  cards: getCardsForAllList(state, props.id),
});


const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => dispatch(createAction_changeSearchString(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);