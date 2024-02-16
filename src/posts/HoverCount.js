import React from 'react';
import Counter from './Counter';
const HoverCount = (props) => {
    const {count,handleSetCount}=props;
    return (

        <div className='text-center w-100'>
            <button className='btn btn-success' onMouseOver={handleSetCount}>Click : {count} </button>

        </div>
    )
}
export default Counter(HoverCount,3);