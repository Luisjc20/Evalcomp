import React, {useEffect} from 'react';
import {useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from '@mui/material/Typography';
import FormHelperText from "@mui/material/FormHelperText";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

import {useForm} from '../../hooks/useForm';
import {cursoAddNew} from '../../actions/curso';

export const CursoFormDatos = ({onNext}) => {

  const dispatch = useDispatch();

  const {cursoId, cursoActivo, sistCalificaciones} = useSelector(state => state.curso);

  const [formCursoDatosValues, handleCursoDatosInputChange] = useForm(cursoActivo);

  const {nombreCurso, codigoCurso, cicloCurso, calificacionCurso, descripcionCurso} = formCursoDatosValues;

  const [codigoMessage, setCodigoMessage] = useState("");
  const [nombreMessage, setNombreMessage] = useState("");
  const [calificacionMessage, setCalificacionMessage] = useState("");


  const handleSubmit = () => {

    (codigoCurso === "") ? setCodigoMessage("Por favor ingrese un código.") : setCodigoMessage("");

    (nombreCurso === "") ? setNombreMessage("Por favor ingrese el nombre del curso.") : setNombreMessage("");

    (calificacionCurso === "") ? setCalificacionMessage("Por favor seleccione la forma de calificación del curso.") : setCalificacionMessage("");

    if (codigoCurso !== "" && nombreCurso !== "" && calificacionCurso !== "") {

      const curso = {
        ...cursoActivo,
        codigoCurso: codigoCurso,
        nombreCurso: nombreCurso,
        cicloCurso: cicloCurso,
        calificacionCurso: calificacionCurso,
        descripcionCurso: descripcionCurso
      }

      dispatch(cursoAddNew(curso));
    }
  };

  useEffect(() => {
    onNext(() => handleSubmit);
  }, [formCursoDatosValues]);

  return (
    <Grid container spacing={5} alignItems="center" justify="center" direction="column">
      <Grid item>
        <div style={{width: '800px'}}>
          <br/>
          {
            (cursoId) ?
              <Typography variant="titulo" textAlign="left"> Editar Curso </Typography>
              :
              <Typography variant="titulo" textAlign="left"> Nuevo Curso </Typography>
          }
        </div>
      </Grid>
      <Grid item>
        <TextField
          id="codigoCurso"
          name="codigoCurso"
          label="Código *"
          type="text"
          sx={{width: '800px'}}
          error={codigoMessage !== ""}
          helperText={codigoMessage}
          value={codigoCurso}
          onChange={handleCursoDatosInputChange}
        />
      </Grid>
      <Grid item>
        <TextField
          id="nombreCurso"
          name="nombreCurso"
          label="Nombre *"
          type="text"
          sx={{width: '800px'}}
          error={nombreMessage !== ""}
          helperText={nombreMessage}
          value={nombreCurso}
          onChange={handleCursoDatosInputChange}
        />
      </Grid>
      <Grid item>
        <TextField
          id="cicloCurso"
          name="cicloCurso"
          label="Ciclo Académico"
          type="text"
          sx={{width: '800px'}}
          value={cicloCurso}
          onChange={handleCursoDatosInputChange}
        />
      </Grid>
      <Grid item>
        <FormControl sx={{m: 1, minWidth: 120}} error={calificacionMessage !== ""}>
          <InputLabel id="calificacion-helper-label">Sistema de Calificación *</InputLabel>
          <Select
            labelId="calificacion-helper-label"
            id="calificacionCurso"
            name="calificacionCurso"
            label="Sistema de Calificación *"
            value={calificacionCurso}
            sx={{width: '800px'}}
            onChange={handleCursoDatosInputChange}
          >
            <MenuItem value="">
              <em>Ninguno</em>
            </MenuItem>
            {
              (sistCalificaciones.length !== 0)
              && (
                sistCalificaciones.map(calif => (
                  <MenuItem
                    key={calif.id}
                    value={calif.id}
                  >{calif.nombre}</MenuItem>
                ))
              )
            }
          </Select>
          <FormHelperText>{calificacionMessage}</FormHelperText>
        </FormControl>
      </Grid>
      <Grid item>
        <TextField
          id="descripcionCurso"
          name="descripcionCurso"
          label="Descripción Breve..."
          type="text"
          multiline
          rows={3}
          sx={{width: '800px'}}
          value={descripcionCurso}
          onChange={handleCursoDatosInputChange}
          //variant="filled"
        />
      </Grid>
    </Grid>
  );
};
