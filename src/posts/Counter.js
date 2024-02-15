import { useState } from "react";

const Counter=HOCComponent=>{

    const NewComponent=()=>{
        const [count,setCount]=useState(0);
        const handleSetCount=()=>{
             setCount(count+1)
         }
        return(
            <HOCComponent count={count}  handleSetCount={handleSetCount} ></HOCComponent>
        )
    }
    return NewComponent;
}
export default Counter;