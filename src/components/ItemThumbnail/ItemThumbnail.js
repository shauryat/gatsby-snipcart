import React from "react";
import styled from "styled-components"
import { Link } from "gatsby";
import Img from "gatsby-image";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';




const CustomCard= styled(Card)`
    min-width: 22rem;

    @media (max-width: 930px) {
        max-width: 200px;
      }
    
    
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