import { BUY_BISCUIT } from "./biscuitsTypes"


const initialState = {
    numberOfBiscuits: 50
}

const biscuitReducers = (state = initialState, action) => {
    switch (action.type) {
        case BUY_BISCUIT: return {
            numberOfBiscuits: state.numberOfBiscuits - 1
        }
        default: return state
    }
}

export default biscuitReducers