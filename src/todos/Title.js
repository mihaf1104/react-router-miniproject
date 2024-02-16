import React, { memo } from 'react';

const Title = (props) => {
    console.log(`${props.title}`)
    return (
        <div>
            <h3 className='text-center text-success mt-5'>{props.Title}</h3>
        </div>
    );
}

export default memo(Title);
