import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import SectorList from "./SectorList";
import Sector from "./Sector";

class App extends Component {

  constructor(){
    super();

    this.state = {
      title: [], 
      sectors: [],  
    }
    
  };

componentDidMount(){

      let url = "https://stock-sector-api.herokuapp.com/";

      fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          sectors: data,
        });
      });
    
      console.log("componentDidMount")
    }
  
render(){

  // console.log(this.state)

  return (
    
    
    <div className="container">

       <Route path="/"
          exact 
          render={() => {
              return <SectorList sectors={this.state.sectors}>
              </SectorList> 
            }}
            />
      

     
      
    </div>
    
    
  );
}
}

export default App;
