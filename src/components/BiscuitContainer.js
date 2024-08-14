import React from 'react'
import { connect } from 'react-redux'
import { buyBiscuit } from '../redux'

function biscuitContainer(props) {
    return (
        <div>
            <h2>Number of Biscuit- {props.numberOfBiscuits}</h2>
            <button onClick={props.buyBiscuit}>Buy biscuit</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numberOfBiscuits: state.biscuit.numberOfBiscuits
    }
}
const mapDispatchToProps = dispatch => {
    return {
        buyBiscuit: () => dispatch(buyBiscuit())
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(biscuitContainer)
