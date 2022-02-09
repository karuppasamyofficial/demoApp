import React,{Component,PureComponent} from "react";



 class MovieTitle extends PureComponent{
    
   

    render() {
        console.log("MovieTitle is rendered");
        return <h1>Movie title {this.props.title} </h1>;
      }
}
export class PureComponents extends Component{
    constructor(props){
        super(props)
        this.state = {
            title: true,
            isReleased: true
          };
    }
    toogleRelease = () => {
        console.log("toogleRelease");
        this.setState((prevState) => ({
          isReleased: !prevState.isReleased
        }));
        this.setState((prevState) => ({
            title: !prevState.title
          }));
      };

    render(){
        const { title, isReleased } = this.state;
        return (
        <>
         <MovieTitle title={title} />
        <h1>Movie is released: {isReleased ? "yes" : "no"} </h1>
        <button onClick={this.toogleRelease}>Toogle Release</button>
        </>)
    }
}