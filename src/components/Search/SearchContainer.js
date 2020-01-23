import {connect} from 'react-redux';
import Search from './Search';
import {
  getSearchString,
} from '../../redux/searchStringRedux';

const mapStateToProps = (state) => ({
  searchString: getSearchString(state),
});


export default connect(mapStateToProps)(Search);
