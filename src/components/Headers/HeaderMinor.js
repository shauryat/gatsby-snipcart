import React, { Component } from "react";
import styled from "styled-components"
import { Button } from "gatsby-theme-material-ui";
import { Link } from "gatsby"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import './styles.css';
import Logo from "./logo.png";

import { ShoppingCart } from 'styled-icons/material/ShoppingCart';





class HeaderMinor extends Component {
   
    render() {
        return (

            <div>
        <AppBar position="static" color="transparent">
          <Toolbar>  
            <Typography variant="h6">
             <Link to="/">
             <img src={Logo} className="h-1/2 w-1/2 md:w-1/4"/>
             </Link>
            </Typography>
            <div className="ml-24 lg:ml-auto">
            <Button color="inherit">
              <a href="#" className="snipcart-checkout"> <ShoppingCart size='23px' /> </a>
            </Button>
           </div>
          </Toolbar>
        </AppBar>
      </div>

        )  
    }

}

export default HeaderMinor;