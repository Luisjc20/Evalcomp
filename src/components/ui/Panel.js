import React from 'react'
//import { useDispatch, useSelector } from 'react-redux';
import { useSelector } from 'react-redux';
import moment from 'moment';

//import { Navbar } from '../ui/Navbar';
//import { uiOpenModal } from '../../actions/ui';
import { DocenteScreen } from '../docente/DocenteScreen';
import { CursoScreen } from '../curso/CursoScreen';
import { CursoListProdAcad } from '../curso/CursoListProdAcad';

import 'moment/locale/es';

moment.locale('es');

export const Panel = () => {

    const { cursoNuevo, cursoId } = useSelector( state => state.curso );
    const { listarProductos } = useSelector( state => state.nota );

    return (
        <div className="docente-panel">
        {
            ( (cursoNuevo || cursoId) && listarProductos===false )
               ? <CursoScreen />
               : ( 
                   (listarProductos) 
                    ? <CursoListProdAcad /> 
                    : <DocenteScreen />
                 )
        }
        </div>
    )
}
