import React,{useEffect,useState} from "react";
const UseEffectExample=()=>{
    const [count,setCount]=useState(1);
    const [name,setName]=useState(1);
    useEffect(() => {
        console.log("use effect")
       
        // return console.log("..........")
    },[count])
    return(<>Count {count}
    
    <button onClick={()=>setCount(count+1)}>increment count</button>
    </>)
}

export default UseEffectExample;
