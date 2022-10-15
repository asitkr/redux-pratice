import { useReducer } from "react";
import React from 'react'

// const initialValue = 0;

const reducer = (state, action) => {
    console.log(action.type);
    switch(action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
}


const Counter = () => {
    const [count, dispatch] = useReducer(reducer, 0);

    const inc = () => {
        dispatch({type: "INCREMENT"})
    }
    return (
        <>
            <h1>{count}</h1>
            <button onClick={inc}>Increment</button>
            <button disabled={count === 0} onClick={() => dispatch({type: "DECREMENT"})}>Decrement</button>
        </>
    )
}

export default Counter