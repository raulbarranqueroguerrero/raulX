import React, { Component } from 'react';
import ParticlesBg  from "particles-bg";

class Header extends Component {
  render() {

    if(this.props.data){
      var project = this.props.data.project;
      var github = this.props.data.github;
      var name = this.props.data.name;
      var descriptionShort= this.props.data.descriptionShort;
      var descriptionLong= this.props.data.descriptionLong;
      var city = this.props.data.address.city;
      var country = this.props.data.address.state;
      /*var networks= this.props.data.social.map(function(network){
         return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })*/
    }

    return (
      <header id="home">
      <ParticlesBg type="circle" bg={true} />
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>
      </nav>

      <div className="row banner">
      
         <div className="banner-text">
            <h1 style={{paddingBottom: '2rem'}} className="responsive-headline">{name}X</h1>
            <h3>{descriptionShort}.</h3>
            <h3>{descriptionLong}.</h3>
            <h6>{city}, {country}</h6>
            <hr />
            <ul className="social">
               <a target="_blank" href={project} className="button btn project-btn"><i className="fa fa-book"></i>Project</a>
               <a target="_blank" href={github} className="button btn github-btn"><i className="fa fa-github"></i>Github</a>
            </ul>
         
         </div>
      
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
