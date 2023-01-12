import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import { useTheme } from '@mui/material/styles';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from '@mui/material/Typography';
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
import Divider from '@mui/material/Divider';

import { cursoLoadNew, cursoSistCalificacion, cursoLoadExisting } from '../../actions/curso';
//import { teacherCourseListLoading } from '../../actions/docente';
import { useFetchPanel } from '../../hooks/useFetchPanel';
//import { DocenteGridItem } from './DocenteGridItem';

import { makeStyles } from "@mui/styles";
import { Link } from '@mui/material';
import { notaListProdAcademicos } from '../../actions/nota';


const useStyles = makeStyles( theme => ({

    card: {
        width: '280px', 
        height: '250px',
        border: '1',
        //border: '1px solid black',
        borderRadius: '50px',
        //color: 'white',
        //boxSizing: 'border-box',
    },
    head: {
        backgroundColor: theme.palette.common.evalPrimary,
        height: 100,
        //color: '#FFFFFF',
    },
}));

const opcionesMenu = [
	{ icon: <EditOutlinedIcon />, desc: 'Editar' },
	{ icon: <ContentCopyOutlinedIcon />, desc: 'Copiar' },
    { icon: <ContentCopyOutlinedIcon />, desc: 'Copiar como Plantilla' },
    { icon: <ContentCopyOutlinedIcon />, desc: 'Evaluar' },
    { icon: <Divider />, desc: <Divider /> },
    { icon: <DeleteOutlinedIcon />, desc: 'Borrar' }
];

const opcionesMenu2 = [
    'Uno',
    'DOs',
    'Tres',
];

export const DocenteGrid = ({ category }) => {

    //const theme = useTheme();
    const classes = useStyles();
  
    const { uid:idDocente } = useSelector( state => state.auth );
    const [ cursoSeleccionado, setCursoSeleccionado ] = useState(null); 
    //const navigate = useNavigate();
  
	const [anchor, setAnchor] = useState(null);

    const open = Boolean(anchor);

    const dispatch = useDispatch();
/*    useEffect(() => {
        dispatch( teacherCourseListLoading( category, idDocente ) );
    }, [ dispatch ])
 */
    const { data, loading } = useFetchPanel( category, idDocente );
   
    const handleClickNew = () => {

        //navigate(`/${category}/new`, { replace: true });
        dispatch( cursoLoadNew() );
        dispatch( cursoSistCalificacion() );
    }

    const handleClickEdit = ( idCurso ) => {

        console.log( idCurso );
        //navigate(`/${category}/new`, { replace: true });
        dispatch( cursoLoadExisting( idCurso ) );
        dispatch( cursoSistCalificacion() );
    }

    const handleClick = event => {
        //console.log(event.currentTarget);
        const id = event.currentTarget.id;
        const cursoId = id.split("button");
        //console.log(cursoId[1]);
        setCursoSeleccionado( cursoId[1] );
		setAnchor(event.currentTarget);
	};

	const handleAction = (action) => {
        //const idCurso = event.currentTarget;
        console.log(action);
        if (action!==undefined) {
            //const opciones = action.split("-");
            switch (action) {
                case 'Editar':
                    //onEdit();
                    break;
                case 'Copiar':
                    //onClone();
                    break;
                case 'Copiar como Plantilla':
                    //onDelete();
                    break;
                case 'Evaluar':
                    onIngresarNota( cursoSeleccionado );
                    break;
                case 'Borrar':
                    //onDelete();
                    break;
                default: setAnchor(null);
            }
            setAnchor(null);
        }
	};

    const onIngresarNota = ( idCurso ) => {
        //alert("Hola");
        console.log( idCurso );
        dispatch( notaListProdAcademicos( idCurso ) );
    }

    return (
       <>
       <br />
       <Grid container 
          justifyContent="flex-start" 
          alignItems="center" 
          sx={{maxWidth: '1000px'}} 
          border={0} 
          rowSpacing={2} 
          columnSpacing={3} 
          paddingLeft={3}>
            <Grid item border={0} xs={1}>
                <br />
            </Grid>
            <Grid item border={0} xs={11}>
                <Typography variant="titulo"> Mis { category }</Typography>
                <br />
            </Grid>
            <Grid item border={0} xs={1}>
                <Fab color="primary" aria-label="add" onClick={ handleClickNew }>
                    <AddIcon />
                </Fab>
            </Grid>
            { loading && <p className="animate__animated animate__flash">Loading</p> }
            {
                (data.length === 0)
                    && (!loading)
                    && <div className="alert alert-info">No tiene { category.toLowerCase() }.</div>
            }
            {
              data.map( dat => (
                //{const idCurso = dat.id;}
                <Grid item key={`grid${dat.id}`}>
                <Card className={classes.card} variant="outlined" sx={{borderRadius: '50px',}}>
                    <CardHeader 
                      className={classes.head}
                      align="center"
                      title={
                        <Typography sx={{ color: 'white',
                                          fontSize: '20px', paddingLeft: 2, paddingTop: 2}} 
                                          to="#" color="white"> 
                            <Link 
                              href="#" 
                              underline="none" 
                              color="white" 
                              sx={{'&:hover': { color: "white",},}}
                              onClick={() => handleClickEdit(dat.id)}
                            >
                            { dat.nombre }
                            </Link>
                        </Typography>
                      }
                      //onClick={handleClickEdit}
                      subheader={
                        <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', 
                                          fontSize: '14px', paddingLeft: 2,}}>
                        { dat.codCurso != undefined ? 
                            'Código ' + dat.codCurso 
                        : ''}
                        </Typography>
                      }
                      key={ `card${dat.id}` }
                      //sx={{ bgcolor: 'FFFF00' }}
                      //color="primary"
                      action={
                        <div>
                        <IconButton
                          id={`button${dat.id}`}
                          aria-controls={open ? dat.id : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? 'true' : undefined}
                          onClick={handleClick}
                        >
                            <MoreVertIcon htmlColor="white" />
                        </IconButton>
                        <Menu
                            anchorEl={anchor}
                            open={open}
                            onClose={handleAction}
                            id={dat.id}
                            MenuListProps={{
                                'aria-labelledby': `button${dat.id}`,
                            }}
                            >
                           {opcionesMenu.map(opcion => {
                                const idOM = (category === 'Cursos'? `${dat.id}-${opcion.desc}` : '');
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
                    ><br />
                    </CardHeader>
                    <CardContent>
                        <Typography variant="h7" color="primary">
                            { dat.codCurso != undefined ? <div> Código {dat.codCurso} <br /> Ciclo {dat.cicloAcademico} </div> : '' }
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            { dat.desc != undefined ? dat.desc : '' }
                        </Typography>
                    </CardContent>
                </Card>
                </Grid>
              ))
            }
    
        </Grid>
        <br/>
        </>
    )
}
