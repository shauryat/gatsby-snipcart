import React from "react";
import styled from "styled-components"
import { Link } from "gatsby";
import Img from "gatsby-image";

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';

import { Button, CardActionArea } from "gatsby-theme-material-ui";


const ItemThumbnailStyled = styled.div`
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px;
    background: ${props => props.theme.colors.primaryAccent};

    @media (max-width: 930px) {
        width: 250px;
      } 
   
      @media (max-width: 710px) {
        width: 100%;
      }
`

const Heading = styled.h3`
    font-size: 1.3em;
    padding: 10px;
    font-weight: 900;
    text-align: center;
    width: 100%;
    min-height: 85px;
    margin: auto;
    
`

const LinkStyled = styled(Link)`
    width: 100%;
    box-shadow: none;
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const CustomCard= styled(Card)`
    min-width: 22rem;

    @media (max-width: 930px) {
        max-width: 200px;
      }
    
    
`

const ImgStyled = styled(Img)`
    width: 100%;
    height: 350px;
    

    @media (max-width: 930px) {
        height: 250px;
      }
`

const Price = styled.p`
    padding-bottom: 10px;
`

const itemThumbnail = (props) => {
    return (

        // props.price.toFixed 2
        //props.image

    <div className="md:flex-row">
    <Link to={props.link}>
        <CustomCard className="m-2" variant="outlined">
        <div className="md:flex-shrink-0 bg-gray-200 h-64">
         <Img fluid={props.image} className="rounded h-56 w-40 mx-auto"/>
         </div>
          <CardContent>
            <Typography  variant="body1" color="textPrimary" align="left">
              {props.heading}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" align="left">
            ${props.price.toFixed(2)}
          </Typography>
          </CardContent>
      </CustomCard>
      </Link>
    </div>
       

        

    )
}

export default itemThumbnail;