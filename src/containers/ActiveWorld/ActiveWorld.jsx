import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as worldActions from './actions'
import World from '../../components/World/World'

function mapStateToProps ({world}) {
  return { world }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(worldActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(World)
