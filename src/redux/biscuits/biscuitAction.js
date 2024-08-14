import { BUY_BISCUIT } from "./biscuitsTypes";

export const buyBiscuit = () => {
    return {
        type: BUY_BISCUIT,
        info: 'buy a biscuit'
    }
}