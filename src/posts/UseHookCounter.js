import React from 'react';
import useCounter from '../Hooks/useCounter';

const UseHookCounter = () => {
    const [count, increment, decrement, reset] = useCounter(0,5)
    const [count1, increment1, decrement1, reset1] = useCounter(1000,100)
    return (
       
        <div className='text-center'>
            <h4 className='text-center'>{`Count :::  ${count}`} </h4>
            <button className='btn btn-info' onClick={increment}>افزایش</button>
            <button className='btn btn-info' onClick={decrement}>کاهش</button>
            <button className='btn btn-info' onClick={reset}>ریست</button>


            <br />
            <h4 className='text-center'>{`Count :::  ${count1}`} </h4>
            <button className='btn btn-info' onClick={increment1}>افزایش</button>
            <button className='btn btn-info' onClick={decrement1}>کاهش</button>
            <button className='btn btn-info' onClick={reset1}>ریست</button>
        </div>
    );
}

export default UseHookCounter;
