import React, { useCallback, useState } from 'react';
import Title from './Title';
import CountBox from './CountBox';
import CountButton from './CountButton';

const CallBackExample = () => {
    const [title, setTitle] = useState("سلام به همه دوستان")
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(5)
    const handleSetCount = useCallback(() => {
        setCount(count + 1)
    }, [count])
    const handleSetCount1 = useCallback(() => {
        setCount1(count1 + 1)
    }, [count1])

    return (
        <div>
            <Title title={title} />
            <CountBox title="زیرمجموعه 1" count={count} />
            <CountButton title="زیرمجموعه 1" handleClick={handleSetCount} />

            <CountBox title="زیرمجموعه 2" count={count1} />
            <CountButton title="زیرمجموعه 2" handleClick={handleSetCount1} />

        </div>
    );
}

export default CallBackExample;
