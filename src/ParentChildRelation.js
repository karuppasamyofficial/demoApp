import React,{useEffect,useState} from "react";

const Child=(props)=>{
return(<>
{props.name}
<button  onClick={()=>props.setName("kumar")} >Change the name</button>
</>)
}


//controlling parent state values in child component
const ParentChildRelation=()=>{
    const [name,setName]=useState("karuppasamy")
    return(<><Child name={name} setName={setName}></Child></>)
}

export  default ParentChildRelation;