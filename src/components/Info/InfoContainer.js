import {connect} from 'react-redux';
import Info from './Info.js';

const mapStateToProps = state => ({
  titleText: state.app.title,
});

export default connect(mapStateToProps)(Info);