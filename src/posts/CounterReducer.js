
import React from 'react';
import { useReducer } from 'react';

const init =
{
    value1: 0,
    value2: 0
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment1':
            return { ...state, value1: state.value1 + action.val }
        case 'increment2':
            return { ...state, value2: state.value2 + action.val }
        case 'decrement1':
            return { ...state, value1: state.value1 - action.val }
        case 'decrement2':
            return { ...state, value2: state.value2 - action.val }
        case 'reset1':
            return { ...state, value1: init.value1 };
        case 'reset2':
            return init;

        default:
            return state
    }
}
const CounterReducer = () => {
    const [count, disPatch] = useReducer(reducer, init);

    return (
        <div className='text-center w-100'>
            {count.value1}
            <br />
            {count.value2}
            <br />
            <button className='btn btn-danger' onClick={() => disPatch({ type: 'increment1', val: 5 })}>افزایش</button>
            <button className='btn btn-danger' onClick={() => disPatch({ type: 'increment2', val: 3 })}>افزایش</button>
            <br />
            <button className='btn btn-danger' onClick={() => disPatch({ type: 'decrement1', val: 5 })}>کاهش</button>
            <button className='btn btn-danger' onClick={() => disPatch({ type: 'decrement2', val: 3 })}>کاهش</button>
            <br />
            <button className='btn btn-danger' onClick={() => disPatch({ type: 'reset1', val: 0 })}>ریست</button>
            <button className='btn btn-danger' onClick={() => disPatch({ type: 'reset2', val: 1 })}>ریست</button>
        </div>
    );
}

export default CounterReducer;
