import {fetchConToken} from "../helpers/fetch";
import {types} from "../types/types";

export const cursoLoadNew = () => {

  return (dispatch) => {

    const newCurso = {
      codigoCurso: "",
      nombreCurso: "",
      cicloCurso: "",
      calificacionCurso: "",
      descripcionCurso: "",
      competencias: [],
      abreExpansiones: [],
      agregaEspecificas: []
    }
    //console.log(`Inicializando curso: ${newCurso}`);

    dispatch(cursoNew(newCurso));
  }
}

const cursoNew = (curso) => ({
  type: types.cursoNew,
  payload: {
    ...curso
  }
});

export const cursoSistCalificacion = () => {

  return async (dispatch) => {
    try {
      const resp = await fetchConToken('sis_calificaciones');
      const body = await resp.json();

      console.log(body);
      dispatch(cursoNewSistCalif(body));

    } catch (error) {
      console.log(error);
    }
  }
}

const cursoNewSistCalif = (calificaciones) => ({
  type: types.cursoNewSistCalif,
  payload: {
    calificaciones: [...calificaciones]
  }
});

export const cursoAddNew = (curso) => {

  return (dispatch) => {

    let newCurso;
    if (curso.id === "") {

      newCurso = {
        ...curso,
        id: 1,
        competencias: [],
        abreExpansiones: [],
        agregaEspecificas: []
      }
    } else {
      newCurso = {
        ...curso
      }
    }

    dispatch(cursoCompe(
      newCurso
    ));
  }
}

export const cursoCompe = (curso) => ({
  type: types.cursoCompe,
  payload: {
    ...curso
  }
});

export const cursoGrabar = (nuevoCurso) => {

  return (dispatch) => {

    dispatch(cursoProdAcad(
      nuevoCurso
    ));
  }
}

const cursoProdAcad = (curso) => ({
  type: types.cursoProdAcad,
  payload: {
    ...curso
  }
});

export const cursoADatos = (curso) => {

  return (dispatch) => {

    dispatch(cursoDatos(
      curso
    ));
  }
}

export const cursoEvaluaciones = evaluaciones => ({
  type: types.cursoEvaluaciones,
  payload: evaluaciones
})

const cursoDatos = (curso) => ({
  type: types.cursoDatos,
  payload: {
    ...curso
  }
});

export const cursoLoadExisting = (idCurso) => {

  return async (dispatch) => {

    const resp = await fetchConToken('cursos/' + idCurso);
    const body = await resp.json();

    if (resp.ok) {
      const unCurso = body[0];

      const loadCurso = {
        id: unCurso.id,
        codigoCurso: unCurso.codCurso,
        nombreCurso: unCurso.nombre,
        cicloCurso: unCurso.cicloAcademico,
        calificacionCurso: unCurso.sistemaCalificacionId,
        descripcionCurso: (unCurso.desc ? unCurso.desc : ''),
        evaluaciones: unCurso.evaluaciones,
        competencias: [],
        abreExpansiones: [],
        agregaEspecificas: []
      }

      dispatch(cursoLoad(loadCurso));
    }
  }
}

const cursoLoad = (curso) => ({
  type: types.cursoLoad,
  payload: {
    ...curso
  }
});

export const cursoLogoutCleaning = () => ({
  type: types.cursoLogoutCleaning
});

export const cursoNextStep = () => ({
  type: types.cursoNextStep
});