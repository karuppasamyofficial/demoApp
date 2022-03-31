import React,{Component} from "react";

export  class ReactLifeCycle extends Component{
    constructor(props){
        console.log("constructor")
        super(props)
        this.state={
            name:"karuppasamy"
        }
    }
    

    componentDidMount(){
        console.log("componentDidMount")
        this.setState({name:"bfdhkgkfnd"})
    }
   static  getDerivedStateFromProps(){
console.log("getDerivedStateFromProps")
    }

shouldComponentUpdate() {
    //by default its true 
    return true; //Change to true for state to update
  }

  componentDidUpdate(prevProps, prevState){
      console.log(prevState.name,this.state.name)
      //when there is props or state changes happen this will invoked 
      //based on prevState or prevProps if wont perform any actions 
      console.log("componentDidUpdate");
  }
    onChangeName=()=>{}
    render(){
        console.log("render")
        return(<>
        React Life ReactLifeCycle   {this.state.name}
        <button onClick={this.onChangeName}>Change Name</button>
        </>)
    }
}