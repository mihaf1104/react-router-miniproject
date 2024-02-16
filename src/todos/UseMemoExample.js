import React, { useMemo, useState } from 'react';

const UseMemoExample = () => {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(10)

    const handleCount1Click = () => {
        setCount1(count1 + 1)
    }
    const handleCount2Click = () => {
        setCount2(count2 + 10)
    }
    const isEven = useMemo(() => {
        console.log('even')
        return count1 % 2 === 0
    },[count1])

    return (
        <div className='text-center w-100' >
            <span>{isEven ? "زوج" :"فرد"}</span>
            <br />
            <button className='btn btn-info' onClick={handleCount1Click}>Click On Count1 : {count1}</button>
            <br />
            <button className='btn btn-info' onClick={handleCount2Click}>Click On Count1 : {count2}</button>

        </div>
    );
}

export default UseMemoExample;
