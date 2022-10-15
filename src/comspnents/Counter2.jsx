import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../action/Action';

const Counter2 = () => {
    const count = useSelector(state => state.kuchBhi);
    const dispatch = useDispatch();

    console.log(count);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>Incement</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    )
}

export default Counter2;