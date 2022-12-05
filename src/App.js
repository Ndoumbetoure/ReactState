import React from 'react';
import Profile from './profile/profile.js';
import NavComponent from './profile/Header.js';
import FooterComponent from './profile/Footer.js';

import './App.css';


class App extends React.Component {

  constructor()
    {
        super();
        this.state = {
          Shows : true
        }

    }   
    
    showFunction = () => {
      this.setState({Shows : !this.state.Shows})
    };


   render() {

    const st = {backgroundColor:"pink", textAlign : 'center'} 
    const btn = {backgroundColor : 'white', marginBottom : '60px'}



    return (

      <div style = {st}>

                <NavComponent/> 

                {this.state.Shows ? (
                <div>
                    <Profile showState = {this.state.Shows}/>
                </div>
                ) : null}


                <button style = {btn} onClick={(el) => this.showFunction()}>{this.state.Shows ? "Cacher profil" : "Montrer profil"}
                </button>

                <FooterComponent/>
      </div>

      

    )
  }
  
}

export default App;
