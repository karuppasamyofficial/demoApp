import React,{useState} from "react";


const FunctionalComponenet=(props)=>{
   const[count,setCount]=useState(1)
const handleIncrement=()=>{
   setCount(count+1)
}
   console.log("............",props)
   return (<div>Functional Components {count}

<button onClick={handleIncrement}>increment</button>

   </div>)
}

export default FunctionalComponenet;