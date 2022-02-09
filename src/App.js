import React, { Component } from 'react';
import  "./App.css"


class App extends Component {

  constructor(props){
    super(props)
    this.state={
      productlist:[],
      productName:""
    }
  }

  addToProductlist=()=>{
    const productlist=this.state.productlist;
    productlist.push(this.state.productName)
this.setState({productlist:productlist})
  }
  render() {
    
    return (
    <div  className='wrapper'>


    <div className="add_cart">
    <input  value={this.state.productName}  onChange={(e)=>{this.setState({productName:e.target.value})}}/>

      <button onClick={()=>{this.addToProductlist()}}>ADD</button>
    </div>
      <div className='display_list'>
List of products
        {this.state.productlist.map((data,i)=>{
          return <h1>{data}</h1>
        })}
        

      </div>
    </div>

      );
  }
}

export default App;