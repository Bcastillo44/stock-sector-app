import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Sector from "./Sector";
import "./App.css";

class App extends Component {

  constructor(props){
    super(props);

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

  let {sectors} = this.state;

  return (
    
    <div className="container">

      <h3>Energy Sector</h3>
      
        {sectors.map(sector => (
          <p key={sector.id}>
        {sector.title} : {sector.sectors[0].Energy}%
          </p>
        ))}
      <br></br>

    <h3>Financial Sector</h3>
      
      {sectors.map(sector => (
        <p key={sector.id}>
      {sector.title} : {sector.sectors[0].Financials}%
        </p>
      ))}
  <br></br>
        
    <h3>Industrials Sector</h3>
      
      {sectors.map(sector => (
        <p key={sector.id}>
      {sector.title} : {sector.sectors[0].Industrials}%
        </p>
      ))}

<h3>Real Estate</h3>
      
      {sectors.map(sector => (
        <p key={sector.id}>
      {sector.title} : {sector.sectors[0].RealEstate}%
        </p>
      ))}
  <br></br>

  <h3>Information Technology</h3>
      
      {sectors.map(sector => (
        <p key={sector.id}>
      {sector.title} : {sector.sectors[0].InformationTechnology}%
        </p>
      ))}
  <br></br>

  <h3>Materials</h3>
      
      {sectors.map(sector => (
        <p key={sector.id}>
      {sector.title} : {sector.sectors[0].Materials}%
        </p>
      ))}
  <br></br>

  <h3>Consumer Discretionary</h3>
      
      {sectors.map(sector => (
        <p key={sector.id}>
      {sector.title} : {sector.sectors[0].ConsumerDiscretionary}%
        </p>
      ))}
  <br></br>

  <h3>Communication Services</h3>
      
      {sectors.map(sector => (
        <p key={sector.id}>
      {sector.title} : {sector.sectors[0].CommunicationServices}%
        </p>
      ))}
  <br></br>

  <h3>Health Care</h3>
      
      {sectors.map(sector => (
        <p key={sector.id}>
      {sector.title} : {sector.sectors[0].HealthCare}%
        </p>
      ))}
  <br></br>

  <h3>Consumer Staples</h3>
      
      {sectors.map(sector => (
        <p key={sector.id}>
      {sector.title} : {sector.sectors[0].ConsumerStaples}%
        </p>
      ))}
  <br></br>

  <h3>Utilities</h3>
      
      {sectors.map(sector => (
        <p key={sector.id}>
      {sector.title} : {sector.sectors[0].Utilities}%
        </p>
      ))}
  <br></br>
     

    </div>
    
    
  );
}
}

export default App;
