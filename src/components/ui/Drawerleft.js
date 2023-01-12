import React, { useState } from 'react';
import {
    Drawer,
    List,
    ListItemButton,
    ListItemText,
    ListItemIcon,
    Lists,
    IconButton,
    Tab
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

const PAGES =["Panel","Cursos","Perfil","Nosotros","Iniciar Sesión","Registrarse"];

const Drawerleft = () => {
    
    const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <React.Fragment>
        <Drawer open={openDrawer} onClose={()=>setOpenDrawer(false)}>
            <List>
                {
                    PAGES.map((page,index) => (
                        <ListItemButton onClick={()=>setOpenDrawer(false)} key={index}>
                            <ListItemIcon>
                                <ListItemText>{page} </ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                    ))
                }
            </List>
        </Drawer>
        <IconButton sx={{color: 'white'}} onClick={()=> setOpenDrawer(!openDrawer)}>
            <MenuIcon/>
        </IconButton>

    </React.Fragment>
  );
};

export default Drawerleft;