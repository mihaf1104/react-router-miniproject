import { useState } from "react";

const Counter=(HOCComponent,number)=>{

    const NewComponent=(props)=>{
        const [count,setCount]=useState(0);
        const handleSetCount=()=>{
             setCount(count+number)
         }
        return(
            <HOCComponent {...props}   count={count}  handleSetCount={handleSetCount} ></HOCComponent>
        )
    }
    return NewComponent;
}
export default Counter;