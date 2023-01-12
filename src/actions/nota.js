
import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";

export const notaListProdAcademicos = ( idCurso ) => {

    return ( dispatch ) => {
        try{
            //const resp = await fetchConToken( category.toLowerCase() + '?docenteId=' + idDocente );
            //const body = await resp.json();
            const curso = {
                cursoId: idCurso, 
                prodAcads: [
                    {
                        id: '61dcbb8a11dc92a2eccc79cf',
                        nombre: 'Examen Parcial',
                        peso: 20,
                        metodoEval: 'Basica Pesos Ponderados',
                        competencias: [
                            { nombre: 'Capacidad de Análisis', porcentaje: 0.33, id: '71dcbb8a11dc92a2eccc79cf' },
                            { nombre: 'Comunicación Oral y Escrita', porcentaje: 0.33, id: '72dcbb8a11dc92a2eccc79cf' },
                            { nombre: 'Desarrollo Ético', porcentaje: 0.5, id: '73dcbb8a11dc92a2eccc79cf' },
                            { nombre: 'Aplica metodologías, métodos, técnicas y herramientas de ingeniería de software', porcentaje: 0.33, id: '74dcbb8a11dc92a2eccc79cf' }
                        ],
                        rubricas: [] 
                    },
                    {
                        id: '61dcbb8a11dc92a2eccc79dg',
                        nombre: 'Evaluación Continua',
                        peso: 60,
                        metodoEval: 'Basica Pesos Ponderados',
                        competencias: [
                            { nombre: 'Capacidad de Análisis', porcentaje: 0.33, id: '71dcbb8a11dc92a2eccc79cf' },
                            { nombre: 'Comunicación Oral y Escrita', porcentaje: 0.33, id: '72dcbb8a11dc92a2eccc79cf' },
                            { nombre: 'Pensamiento Crítico', porcentaje: 1, id: '81dcbb8a11dc92a2eccc79cf' },
                            { nombre: 'Desarrolla y mantiene soluciones de software con actitud innovadora', porcentaje: 1, id: '82dcbb8a11dc92a2eccc79cf' },
                            { nombre: 'Aplica metodologías, métodos, técnicas y herramientas de ingeniería de software', porcentaje: 0.33, id: '74dcbb8a11dc92a2eccc79cf' }
                        ],
                        rubricas: []
                    },
                    {
                        id: '61dcbb8a11dc92a2eccc79eh',
                        nombre: 'Examen Final',
                        peso: 20,
                        metodoEval: 'Basica Pesos Ponderados',
                        competencias: [
                            { nombre: 'Capacidad de Análisis', porcentaje: 0.33, id: '71dcbb8a11dc92a2eccc79cf' },
                            { nombre: 'Comunicación Oral y Escrita', porcentaje: 0.33, id: '72dcbb8a11dc92a2eccc79cf' },
                            { nombre: 'Desarrollo Ético', porcentaje: 0.5, id: '73dcbb8a11dc92a2eccc79cf' },
                            { nombre: 'Aplica metodologías, métodos, técnicas y herramientas de ingeniería de software', porcentaje: 0.33, id: '74dcbb8a11dc92a2eccc79cf' }
                        ],
                        rubricas: []
                    },                
                ]
            };
        
            dispatch( notaListProdAcad( curso ) );
            
        } catch (error) {
            console.log( error );
        }

    }
}

export const notaAbreDialogoIngresoNota = ( prodAcad ) => {

    return ( dispatch ) => {
        try {
            //console.log("ProdAcad: " + prodAcad);
            dispatch( notaIngresarNota( prodAcad ) );
        } catch(error) {
            console.log( error );
        }
    }
    //notaIngresarNota();
}

export const notaCargaTodosAlumnos = ( idCurso ) => {

    return async( dispatch ) => {
        const resp = await fetchConToken( 'cursos/' + idCurso + '/alumnos' );
        const body = await resp.json();

        //console.log( body );
        if ( resp.ok )  {

            dispatch( notaCargarAlumnos( body ) );
        }
    }
}

const notaListProdAcad = ( curso ) => ({
    type: types.notaProdAcademicos,
    payload: curso
});

const notaIngresarNota = ( prodAcad ) => ({
    type: types.notaIngresarNota,
    payload: {
        prodAcad: prodAcad
    }
});

const notaCargarAlumnos = ( alumnos ) => ({
    type: types.notaCargarAlumnos,
    payload: {
        alumnos: alumnos
    }
});

export const notaCierraDialogoIngresoNota = () => ({ type: types.notaCerrarNota });