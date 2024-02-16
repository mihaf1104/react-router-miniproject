import React from 'react';
import Counter from './Counter';

const ClickCount = (props) => {
     
    const {count,handleSetCount,name}=props;
    console.log(props)
    return (

        <div className='text-center w-100'>
            <button className='btn btn-success' onClick={handleSetCount} >{name} : {count} </button>

        </div>
    )
}
export default Counter(ClickCount,5);