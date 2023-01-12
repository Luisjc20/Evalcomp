import {types} from "../types/types";

const initialState = {
  cursoNuevo: false,
  cursoId: null,
  cursoActivo: null,
  cursoStep: 0,
  sistCalificaciones: []
}


export const cursoReducer = (state = initialState, action) => {

  switch (action.type) {

    case types.cursoNew:
      return {
        ...state,
        cursoNuevo: true,
        cursoActivo: {
          ...action.payload
        },
        cursoStep: 0
      }
    case types.cursoLoad:
      return {
        ...state,
        cursoNuevo: false,
        cursoId: action.payload.id,
        cursoActivo: {
          ...action.payload
        },
        cursoStep: 0
      }
    case types.cursoNewSistCalif:
      return {
        ...state,
        sistCalificaciones: [...action.payload.calificaciones]
      }
    case types.cursoDatos:
      return {
        ...state,
        cursoActivo: {
          ...action.payload
        },
        cursoStep: state.cursoStep - 1
      }
    case types.cursoCompe:
      return {
        ...state,
        cursoActivo: {
          ...action.payload
        },
        cursoStep: 1
      };
    case types.cursoProdAcad:
      return {
        ...state,
        cursoActivo: {
          ...action.payload
        },
        cursoStep: 2
      };
    case types.cursoLogoutCleaning:
      return {
        ...state,
        cursoNuevo: false,
        cursoId: null,
        cursoActivo: null
      }

    case types.cursoEvaluaciones:
      return {
        ...state,
        cursoActivo: {
          ...state.cursoActivo,
          prodAcads: action.payload
        },
        cursoStep: 3
      }

    case types.cursoNextStep:
      return {
        ...state,
        cursoStep: state.cursoStep + 1
      }
    default:
      return state;
  }
}