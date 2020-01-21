import {connect} from 'react-redux';
import SearchResult from './SearchResult.js';
import {getCardsForAllList} from '../../redux/cardsRedux';
import {getSearchString} from '../../redux/searchStringRedux';

const mapStateToProps = (state,props) => ({
  cards: getCardsForAllList(state, props.id),
  searchString: getSearchString(state),
});


export default connect(mapStateToProps)(SearchResult);