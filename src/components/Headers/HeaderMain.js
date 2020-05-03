import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import WaveBorder from './WaverBorder';
import Logo from "./logo.png";
import DotBg from "./bg.jpg";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';


const headerMain = (props) => {
    return (

      
        
          <div className="container">
             <img src={Logo} className="h-1/2 w-1/2 md:w-1/4 mx-auto mt-24 mb-2"/>
             <Typography variant="subtitle2" align="center" color="textSecondary">  Lorem ipsum </Typography>
          <hr className="w-1/3 mx-auto my-2"/>
          <Typography variant="subtitle1" align="center" color="textSecondary"> Products Also Available on Amazon.in </Typography>
          <hr className="w-1/2 mx-auto my-2"/>
          <div className="mt-8 -mb-4">
          <Typography variant="h5" align="center" color="textPrimary" display="block"> Products Available </Typography>
         
          </div>
        </div>

      

     

                   
               
    )
}

export default headerMain;