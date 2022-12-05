import React from 'react';
import ImgSrc from './profil.png'

class Profile extends React.Component
{


    constructor()
    {
        super();
        this.state = {

          FullName : "Ndoumbe TOURE",
          Bio : "student",
          Profession : "etudiente en full stack js",
          Time : 0

        }
    }


    componentDidMount() {
        
              setInterval(() => {
                this.setState({ Time: this.state.Time + 1 });
              }, 1000);
            }


    render()
    {
        const styleOb = {textAlign : "center"}
        const im = {paddingTop : '70px'}

        return <div  style={styleOb}>
                    <img style={im} src={ImgSrc} alt="" className='App-logo '/>
                    <p>FullName : {this.state.FullName}</p>
                    <p>Bio : {this.state.Bio}</p>
                    <p>Profession : {this.state.Profession}</p>
                    <p>TimeInterval : {this.state.Time}</p>
            </div>
    }


  

}

export default Profile;