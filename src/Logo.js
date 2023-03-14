import React from "react";
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max : 35 }} style={{ height: 160, width: 150 }} >
               <div className="Tilt-inner"> 
                  <img style={{paddingTop: '5px'}} alt="logo" src={brain}></img> 
               </div>
            </Tilt>
        </div>
    );
}

export default Logo;