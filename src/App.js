
import React from 'react';
import './App.css';

import Name from './Name';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      name: "Om Prakash Bharti",
      Age: 11,
    };
   // this.Increament = this.Increament.bind(this);
   this.Handlechange = this.Handlechange.bind(this);
  }

  //Increament(){
  //  this.setState({
    //  Age:10,
 // })}

 //Increament(){
  //this.setState((prev)=>{
  //  return{
  //    Age: prev.Age +1,
  //  };
 // });
// }

 // Increament() {
  //  this.setState((prev) => ({
  //    Age: prev.Age + 1,
  //  }))
    
 // }

  Handlechange(e){
    this.setState({
      name: e.target.value, 
    })
  }

  render(){
    return <div className='App'>
      {/* <h2>{this.state.Age}</h2> */}

      {/* <button onClick={this.Increament}>Increament</button> */}

      <input type= {"text"} placeholder={"Enter the Your name"} 
      value={this.state.name}
      onChange = {this.Handlechange} ></input>
      <p>{this.state.name}</p>

      <Name name = "nice boy"/>
    </div>
  }


}

export default App;
