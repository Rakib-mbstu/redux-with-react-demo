import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux'

function iceCreamContainer(props) {
    return (
        <div>
            <h2>Number of ice cream - {props.numberOfIceCream}</h2>
            <button onClick={props.buyIceCream}>Buy Ice Cream</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numberOfIceCream: state.iceCream.numberOfIceCream
    }
}
const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(iceCreamContainer)
