import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { notaCierraDialogoIngresoNota } from '../../actions/nota';

export const CursoIngresarNota = ( { abre } ) => {

    //const { ingresarNota } = useSelector( state => state.nota );
    const dispatch = useDispatch();
    const [open, setOpen] = useState(abre);
  /*const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };*/

    const handleClose = () => {
        setOpen(false);
        dispatch( notaCierraDialogoIngresoNota() );
    };

    useEffect(() => {
    
        setOpen( abre );
    }, [abre])   

    return (
    <div>
        <Dialog open={open}>
        <DialogTitle>Ingresar Nota</DialogTitle>
        <DialogContent>
            <DialogContentText>
                Seleccione al alumno o al grupo de alumnos, e ingrese la nota:
            </DialogContentText>
            <br></br>
            <TextField
                autoFocus
                margin="dense"
                id="txtBuscar"
                label="Nombre del alumno o número de grupo"
                type="text"
                fullWidth
                variant="standard"
            />
            <TextField
                autoFocus
                margin="dense"
                id="txtNota"
                label="Nota"
                type="number"                
                variant="standard"
            />            
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button onClick={handleClose}>Grabar</Button>
        </DialogActions>
        </Dialog>
    </div>
    );
}

CursoIngresarNota.defaultProps = {
    abre: false
}