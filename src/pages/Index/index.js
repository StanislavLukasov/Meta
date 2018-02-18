import { connect } from 'react-redux'
import Page from './page'

const mapStateToProps = state => ({ state })
const mapDispatchToProps = dispatch => ({ dispatch })
const mergeProps = ({ state }, { dispatch }, ownProps) => {

    const { images } = state

    return Object.assign({}, ownProps, {
        dispatch,
        images
    })
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Page)
