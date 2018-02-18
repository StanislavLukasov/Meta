import { connect } from 'react-redux'
import Search from './search'

const mapStateToProps = state => ({ state })
const mapDispatchToProps = dispatch => ({ dispatch })
const mergeProps = ({ state }, { dispatch }, ownProps) => {

    return Object.assign({}, ownProps, {
        dispatch
    })
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Search)
