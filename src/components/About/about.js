import React, { Component } from 'react';
import './about.css'
class about extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="about">
               
                    <div className="about-content">
                    
                    <h1 className="font">About xHunt</h1>

                        <div className="pcontent">
                            <h2>xHunts is a scavenger hunts platform in SAUDI.</h2>
                            <h3>CAN'T FIND YOUR WAY AROUND THE CITY?</h3>
                            <h4>DON'T HAVE ENOUGH TIME TO PLAN YOUR VISIT?</h4>
                            <h5>WANT A UNIQUE WAY TO EXPLORE DIFFERENT LOCATIONS?</h5>
                            <br/>
                        </div>

                        <h1 className="font"> xHunt Group:</h1>
                        <div className="pcontent seceond">
                            <br/>
                            <h2 style={{color:'black'}}><ul>Mansour, Founder and CEO </ul></h2>
                            <h2 style={{color:'black'}}><ul>Mashael, a full stack developer</ul></h2>
                            <h2 style={{color:'black'}}><ul>Zena, a full stack developer</ul></h2>
                        </div> 

                </div>
              
            </div> );
    }
}
 
export default about;