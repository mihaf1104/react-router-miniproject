import React, { useState } from 'react';

const Counter1 = () => {
    const [count,setCount]=useState(0)
    const handleClickBtn=(number)=>{
        for (let index = 0; index < number; index++) {
           setCount((prevState)=>{return prevState+1})
        }
    }
    return (
        <div className='text-center'>
            <button className='btn btn-info' onClick={()=>handleClickBtn(5)}>Click Me {count}</button>
        </div>
    );
}

export default Counter1;
