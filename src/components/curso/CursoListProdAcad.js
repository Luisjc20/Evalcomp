import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Fab from "@mui/material/Fab";
import IconButton from "@mui/material/IconButton";
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CardHeader from '@mui/material/CardHeader';
import { notaAbreDialogoIngresoNota, notaCargaTodosAlumnos } from '../../actions/nota';
import { CursoIngresarNota } from './CursoIngresarNota';

export const CursoListProdAcad = () => {

  const dispatch = useDispatch();
  const { cursoId, prodAcads, ingresarNota } = useSelector( state => state.nota );

	const [anchor, setAnchor] = useState(null);
  const [prodAcad, setProdAcad] = useState("");

  const open = Boolean(anchor);

  const opcionesMenu = [
    { icon: <EditOutlinedIcon />, desc: 'Editar' },
    { icon: <ContentCopyOutlinedIcon />, desc: 'Ingresar Nota' },
  ];

  const handleClick = event => {
    const elemento = event.currentTarget.id;
    const idProdAcad = elemento.split("button");
    //console.log(idProdAcad[1]);
    setProdAcad(idProdAcad[1]);
    //setCursoSeleccionado( cursoId[1] );
    setAnchor(event.currentTarget);
  };

  const handleAction = (action) => {
    //console.log(action);
    if (action!==undefined) {
        //const opciones = action.split("-");
        switch (action) {
            case 'Editar':
                //onEdit();
                break;
            case 'Ingresar Nota':
                dispatch( notaCargaTodosAlumnos( cursoId ) );
                dispatch( notaAbreDialogoIngresoNota( prodAcad ) );
                break;
            default: setAnchor(null);
        }
        setAnchor(null);
    }
  }



  return (
    <Grid container 
      spacing={5} 
      alignItems="center" 
      justify="center" 
      direction="column"
    >
      <Grid item>
          <div style={{width: '800px'}}>
          <br />
          { 
              ( cursoId ) && 
              <Typography variant="titulo" textAlign="left"> Curso {cursoId} </Typography>
          }
          </div>
      </Grid>
      <Grid container 
        justifyItems={'flex-start'} 
        sx={{ width: '800px', }}
        //paddingLeft={3}
        rowSpacing={2}
        //columnSpacing={3} 
      >
        <List sx={{ width: '100%' }}>
          {
            prodAcads.map( prodAcad => (
              <Grid item border={0} key={`grid${prodAcad.id}`}>
              <ListItem>
              <Card
                //variant="outlined"
                style={{
                  //width: 300,
                  width: '100%',
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <CardHeader
                  key={ `card${prodAcad.id}` }
                  style={{
                    paddingBottom: "0",
                  }}
                  title={
                    <Typography variant="subtitulo">
                    {prodAcad.nombre}
                    </Typography>                    
                  }
                  action={
                    <div>
                    <IconButton
                      id={`button${prodAcad.id}`}
                      aria-controls={open ? prodAcad.id : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}
                    >
                        <MoreVertIcon htmlColor="black" />
                    </IconButton>
                    <Menu
                        anchorEl={anchor}
                        open={open}
                        onClose={handleAction}
                        id={prodAcad.id}
                        MenuListProps={{
                            'aria-labelledby': `button${prodAcad.id}`,
                        }}
                        >
                        {opcionesMenu.map(opcion => {
                            const idOM = `${prodAcad.id}-${opcion.desc}`;
                            //console.log( idOM );
                            return (
                                <MenuItem key={idOM} onClick={() => handleAction(opcion.desc)}>
                                    <ListItemIcon>{opcion.icon}</ListItemIcon>
                                    <ListItemText>{opcion.desc}</ListItemText>
                                </MenuItem>
                            );
                        })}
                    </Menu> 
                    </div>
                  }
                >
                </CardHeader>
                <Divider color="secondary" />
                <CardContent>
                  <Typography variant="body2" style={{paddingLeft: 2}} type="headline" component="h2">
                    <b>Método de Evaluación:</b> {prodAcad.metodoEval}
                    <br />
                    <b>Peso:</b> {prodAcad.peso}%
                  </Typography>
                  <Typography variant="body2" style={{display: 'inline-block', paddingLeft: 2}} component="p">
                    <b>Competencias: </b> 
                    {prodAcad.competencias.map( competencia => (
                      competencia.nombre + ', '
                    )
                    )}
                  </Typography>
                </CardContent>
              </Card>
              </ListItem>
              </Grid>
            )
            )
            }
        </List>
      </Grid>

      <CursoIngresarNota abre={ingresarNota} />
    </Grid>
  )
}
