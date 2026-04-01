import { Component } from "react";

class Errorboundary extends Component{
constructor (props){
  super(props);
  this.state = {haserror: false,error:null,errorInfo: null}
}

static getDerivedStateFromError(error){
 return {haserror:true ,error:error }
}

render(){
    if(this.state.haserror){
        return (
      <h2 style={{color :"red"}}>Something went wrong</h2>

    )}
  return this.props.children;
}

}
export default Errorboundary