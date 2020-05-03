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
    state = {
        items: 0
    }

    updateItemTotal = (qty) => {
        this.setState({ items: qty })
    }

    componentDidMount() {
        if (window.Snipcart) {
            //this allows it to work when switching pages
            var count = window.Snipcart.api.items.count();
            this.updateItemTotal(count)

            //this allows it to work when you add or change items
            window.Snipcart.subscribe('cart.closed', () => {
                var count = window.Snipcart.api.items.count();
                this.updateItemTotal(count)
            });

            //this allows it to work on refreshing the page
            window.Snipcart.subscribe('cart.ready', (data) => {
                var count = window.Snipcart.api.items.count();
                this.updateItemTotal(count)
            })
        }
    }

    componentWillUnmount () {
        window.Snipcart.unsubscribe('cart.closed');
        window.Snipcart.unsubscribe('cart.ready');
    }
    

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
              <Badge badgeContent={this.state.items} color="secondary">
              <a href="#" className="snipcart-checkout"> <ShoppingCart size='23px' /> </a>
              </Badge>
            </Button>
           </div>
          </Toolbar>
        </AppBar>
      </div>

        )  
    }

}

export default HeaderMinor;