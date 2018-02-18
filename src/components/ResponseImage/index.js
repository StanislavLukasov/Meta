import { connect } from 'react-redux'
import responseImage from './responseImage'

const mapStateToProps = state => ({ state })
const mapDispatchToProps = dispatch => ({ dispatch })
const mergeProps = ({ state }, { dispatch }, ownProps) => {

    let { storage } = state.images
    
    return Object.assign({}, ownProps, {
        storage,
        dispatch
    })
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(responseImage)
