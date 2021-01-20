import React, {useEffect, useState} from 'react';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import useData from './Components/useData.js'

function App() {
  
  return (
    <div className="App">
    <Header useData={useData}/>
    {/* <About data={this.state.resumeData.main}/>
    <Resume data={this.state.resumeData.resume}/>
    <Portfolio data={this.state.resumeData.portfolio}/>
    <Contact data={this.state.resumeData.main}/>
    <Footer data={this.state.resumeData.main}/> */}
    </div>
    );
  }
  
  export default App;
  