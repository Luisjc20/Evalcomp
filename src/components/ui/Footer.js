import React from 'react';
import { makeStyles } from "@mui/styles";
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { render } from "react-dom";
import './Footer.css'

export const Footer = () => {
    
  
  
    return (

        <Toolbar fixed style={{ backgroundColor: "#42a5f5" }} >
            <Grid Color="blue" style={{ justifyContent: "center" }} container spacing={0}>
                <Typography variant="caption" Color= "white">Derechos reservados ©2022</Typography>
            </Grid>
        </Toolbar>
    );
};
