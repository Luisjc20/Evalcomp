import { combineReducers } from 'redux';

import { uiReducer } from './uiReducer';
import { authReducer } from './authReducer';
import { docenteReducer } from './docenteReducer';
import { cursoReducer } from './cursoReducer';
import { notaReducer } from './notaReducer';

export const rootReducer = combineReducers({
    ui: uiReducer,
    docente: docenteReducer,
    curso: cursoReducer,
    nota: notaReducer,
    // TODO: AuthReducer
    auth: authReducer
})

