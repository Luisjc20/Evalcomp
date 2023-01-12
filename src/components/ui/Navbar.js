import { BorderClear } from '@mui/icons-material';
import { AppBar, Button, Typography,Toolbar, Tabs, Tab,useMediaQuery,useTheme, formControlClasses } from '@mui/material';
import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';
import Drawerleft from './Drawerleft';
import logoec from '../../pictures/ec/logoec.svg';
import './Navbar.css';

const PAGES =["Inicio","Cursos","Perfil","Nosotros"];


export const Navbar = () => {

    /*const { name } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch( startLogout() );
    }*/
    const [value, setValue] =  useState();

    const theme = useTheme();
        console.log(theme);
        const isMatch = useMediaQuery(theme.breakpoints.down('md'));
        console.log(isMatch);

    return (
        /*<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a className="navbar-brand" href="/">EVALCOM</a>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="/"> { name } 
                        <span className="sr-only">(current)</span></a>
                    </li>
                    <span>&nbsp;&nbsp;</span>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Buscar..." aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                    </form>  
                    <span>&nbsp;&nbsp;</span>
                    <li className="nav-item">
                        <button className="btn btn-outline-primary"
                            >
                            <i className="fas fa-bars"></i>
                            <span> Mis Opciones</span>
                        </button>
                    </li>
                    <span>&nbsp;&nbsp;</span>
                    <li className="nav-item">
                    <button className="btn btn-outline-primary"
                            >
                            <i className="fas fa-user-circle"></i>
                            <span> Mi Perfil</span>
                        </button>
                    </li>
                    <span>&nbsp;&nbsp;</span>
                    <Button 
                    variant="text" 
                    color="primary" 
                    variant="outlined"
                    >
                      aaa
                    </Button>
                    <span>&nbsp;&nbsp;</span>              
                </ul>
                <button className="btn btn-outline-danger"
                    onClick={ handleLogout } >
                    <i className="fas fa-sign-out-alt"></i>
                    <span> Salir</span>
                </button>
            </div>
        </nav>*/

        <React.Fragment>
            <AppBar>
                <Toolbar>
                    <img class='logonav' src={logoec}/>
                    <Button 
                        sx={{ color:"white",fontSize: "1.5rem" ,marginRight: "auto" }} 
                        href="/panel">
                        EVALCOM 
                    </Button>
                        {
                            isMatch ? (
                                <>
                                    <Typography>
                                    </Typography>
                                    <Drawerleft />

                                </> 
                            ) : (
                                <>
                                <Tabs 
                                sx={{ marginLeft: "auto" }}
                                textColor="inherit" 
                                value={value} onChange={(e,value)=>setValue(value)}
                                indicatorColor="secondary">
                                        {
                                            PAGES.map((page,index) => (
                                                <Tab key={index} label={page}/>
                                            ))
                                        }
                                </Tabs>
                    
                                <Button sx={{ marginLeft: "auto" }} variant='contained'> Registrarse{" "}</Button>
                                <Button sx={{ marginLeft: "10px" }} variant='contained'> Iniciar sesión{" "} </Button>
                                </>
                            )
                        }

                    </Toolbar>
                
            </AppBar>
        </React.Fragment>

    )
}
