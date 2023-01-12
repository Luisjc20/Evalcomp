import React, {useEffect} from 'react';
import {useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Checkbox from "@mui/material/Checkbox";
import {red} from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import ObjectID from "bson-objectid";

import {useForm} from '../../hooks/useForm';
import {cursoADatos, cursoGrabar} from '../../actions/curso';


/*const initCompetencias = [
    {id:'CG01', nombre:'Capacidad de Análisis', especificas: [
        {id:'CE01', nombre:'Desarrolla y mantiene soluciones de software con actitud innovadora'},
        {id:'CE02', nombre:'Aplica metodologías, métodos, técnicas y herramientas de ingeniería de software'}    
    ]},
    {id:'CG02', nombre:'Desarrollo Ético', especificas: []},
    {id:'CG03', nombre:'Comunicación Oral y Escrita', especificas: []}
];

let initSettings = [
    { id: "CG01", open: false }, { id: "CG02", open: false }, { id: "CG03", open: false }
];

let initCompeEspe = [
    { id: "CG01", value: "" }, { id: "CG02", value: "" }, { id: "CG03", value: "" }
];*/
let initAbreExpansiones = [];
let initAgregaEspecificas = [];

const initValues = {
  nuevaCompeGeneral: '',
}


export const CursoFormComp = ({onBack, onNext}) => {

  const dispatch = useDispatch();

  const {cursoActivo} = useSelector(state => state.curso);

  const [competencias, setCompetencias] = useState(cursoActivo.competencias);

  const [abreExpansiones, setAbreExpansiones] = useState(cursoActivo.abreExpansiones);

  const [agregaEspecificas, setAgregaEspecificas] = useState(cursoActivo.agregaEspecificas);

  const [formCursoCompeValues, handleCursoCompeInputChange, reset] = useForm(initValues);

  let {nuevaCompeGeneral} = formCursoCompeValues;

  const handleNext = () => {
    const nuevoCurso = {
      ...cursoActivo,
      competencias: competencias,
      abreExpansiones: abreExpansiones,
      agregaEspecificas: agregaEspecificas
    }

    dispatch(cursoGrabar(nuevoCurso));
  };

  const handleBack = () => {
    const curso = {
      ...cursoActivo,
      competencias: competencias,
      abreExpansiones: abreExpansiones,
      agregaEspecificas: agregaEspecificas
    }
    dispatch(cursoADatos(curso));
  };

  const handleClick = (id) => {

    setAbreExpansiones(abreExpansiones.map(item =>
      item.id === id ? {...item, open: !item.open} : item
    ));
  };

  const handleKeyDownCompeGene = (event) => {

    if (event.key === 'Enter') {

      event.preventDefault();
      if (nuevaCompeGeneral !== "") {
        let objId = new ObjectID();

        setCompetencias([
          ...competencias,
          {
            id: objId.toHexString(),
            nombre: nuevaCompeGeneral,
            especificas: []
          }
        ]);

        setAbreExpansiones([
          ...abreExpansiones,
          {
            id: objId.toHexString(),
            open: false
          }
        ]);

        initAbreExpansiones = [
          ...initAbreExpansiones,
          {
            id: objId.toHexString(),
            open: false
          }
        ];

        setAgregaEspecificas([
          ...agregaEspecificas,
          {
            id: objId.toHexString(),
            value: ""
          }
        ]);

        initAgregaEspecificas = [
          ...initAgregaEspecificas,
          {
            id: objId.toHexString(),
            value: ""
          }
        ];

        //console.log(competencias);
        reset();
      }
    }
  }

  const handleKeyDownCompeEspe = (event) => {

    if (event.key === 'Enter') {

      event.preventDefault();
      let id = event.target.name;
      let valor = event.target.value;

      setCompetencias(
        competencias.map(compe => {

          if (compe.id === id) {

            let objId = new ObjectID();

            return (
              {
                ...compe,
                especificas: [
                  ...compe.especificas,
                  {
                    id: objId.toHexString(),
                    nombre: valor
                  }
                ]
              }
            )
          } else {
            return compe;
          }
        })
      );
      //console.log(competencias);
      setAgregaEspecificas(initAgregaEspecificas);
    }
  }

  const handleChangeInputCompeEspe = ({target}) => {

    setAgregaEspecificas(
      agregaEspecificas.map(compeE => (
        (compeE.id === target.name) ? {...compeE, value: target.value} : compeE
      ))
    );
  }

  const handleToggle = (value) => () => {

    setCompetencias(
      competencias.map(compe => {

        let newEspecificas = [];

        compe.especificas.forEach(espe => {

          if (espe.id !== value) {

            newEspecificas.push(espe);
          }
        })

        return (
          {
            ...compe,
            especificas: newEspecificas
          }
        )
      })
    );
  }

  useEffect(() => {
    onBack(() => handleBack);
    onNext(() => handleNext);
  }, [competencias, abreExpansiones, agregaEspecificas]);

  return (
    <Grid container spacing={5} alignItems="center" justify="center" direction="column">
      <Grid item>
        <div style={{width: '800px'}}>
          <br/>
          <Typography variant="titulo" textAlign="left"> Registrar Competencias </Typography>
        </div>
      </Grid>
      <Grid item sx={{width: '800px'}}>

        <List
          key="comGenerales"
          sx={{width: '100%'}}
          component="nav"
          //aria-labelledby="nested-list-subheader"
        >
          {
            (competencias.length !== 0)
            &&
            (competencias.map(competencia => (

                <div key={"ldiv" + competencia.id}>
                  <ListItemButton
                    sx={{border: 1}}
                    id={competencia.id}
                    name={competencia.id}
                    key={competencia.id}
                    onClick={() => handleClick(competencia.id)}>
                    <ListItemText
                      primary={competencia.nombre}/>
                    {abreExpansiones.find(item => item.id === competencia.id).open
                      ? "-" : "+"}
                  </ListItemButton>
                  <Collapse in={abreExpansiones.find(item => item.id === competencia.id).open} timeout="auto"
                            unmountOnExit>
                    <List component="div" disablePadding>
                      {
                        (competencia.especificas.length !== 0)
                        &&
                        (competencia.especificas.map(compeEspecifica => (
                          <ListItem
                            key={compeEspecifica.id}
                            secondaryAction={
                              <Checkbox
                                key={"chk" + compeEspecifica.id}
                                edge="end"
                                color="error"
                                sx={{color: red, '&.Mui-checked': {color: red}}}
                                onChange={handleToggle(compeEspecifica.id)}
                                //checked={checked.indexOf(compeEspecifica.id) !== -1}
                                indeterminate
                              />
                            }
                            disablePadding
                          >
                            <ListItemButton sx={{pl: 4}}>
                              <ListItemText primary={compeEspecifica.nombre}/>
                            </ListItemButton>
                          </ListItem>
                        )))
                      }
                      <ListItem>
                        <TextField
                          id={competencia.id}
                          name={competencia.id}
                          label="Añadir competencia específica"
                          type="text"
                          size="small"
                          sx={{width: '100%'}}
                          value={agregaEspecificas.find(item => item.id === competencia.id).value}
                          onChange={handleChangeInputCompeEspe}
                          onKeyDown={handleKeyDownCompeEspe}
                        />
                      </ListItem>
                    </List>
                  </Collapse>
                  <br/>
                </div>
              )
            ))
          }
        </List>

        <br/>
        <TextField
          id="nuevaCompeGeneral"
          name="nuevaCompeGeneral"
          label="Añadir competencia general"
          type="text"
          sx={{width: '100%'}}
          value={nuevaCompeGeneral}
          onChange={handleCursoCompeInputChange}
          onKeyDown={handleKeyDownCompeGene}
        />
      </Grid>
    </Grid>
  );
};
