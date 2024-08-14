import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeContainer() {
    const numOfCakes = useSelector((state) => state.numberOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>num of cakes - {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy</button>
        </div>
    )
}

export default HooksCakeContainer
