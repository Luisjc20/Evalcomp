import { types } from "../types/types";

const initialState = {
    listarProductos: false,
    ingresarNota: false,
    cursoId: null,
    prodAcads: [],
    idProdAcad: null,
    alumnos: [],
}

export const notaReducer = ( state = initialState, action) => {

    console.log( action.type );
    switch( action.type )   {
        case types.notaProdAcademicos:
           //console.log(action.payload.cursoId);
            return {
                ...state,
                listarProductos: true,
                //cursoId: action.payload.cursoId,
                //prodAcads: [...action.payload.prodAcads]
                ...action.payload   // las dos lineas anteriores son iguales
            }
        case types.notaIngresarNota:
            //console.log(action.payload.cursoId);
            return {
                ...state,
                ingresarNota: true,
                idProdAcad: action.payload.prodAcad
            }
        case types.notaCargarAlumnos:
            //console.log(action.payload.cursoId);
            return {
                ...state,
                alumnos: action.payload.alumnos
            }            
        case types.notaCerrarNota:
            return {
                ...state,
                ingresarNota: false,
            }
        default:
                return state;
    }
}