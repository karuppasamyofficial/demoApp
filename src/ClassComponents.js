import React,{Component} from "react";
export class ClassComponents extends Component{
    constructor(props){
        super(props)
        // define the initial values in the state object in the constructor 
        this.state={
            name:"karuppasamy",
            age:21
        }
    }
    onChangeName=()=>{

        console.log("onChangeName  invoked");
        this.setState({name:"nsdkjnjngeg"})
    }

    render(){

        return (
        <>My name is {this.state.name}

        {/* <input value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}}></input> */}
        age is {this.state.age}
        <button 
        onClick={()=>this.onChangeName()}
        // onClick={this.onChangeName}
        >change name</button>
        </>)
    }
}