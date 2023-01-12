import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";

export const docenteCourseListLoading = ( category, idDocente ) => {

    return async( dispatch ) => {
        try{
            const resp = await fetchConToken( category.toLowerCase() + '?docenteId=' + idDocente );
            const body = await resp.json();
        
            if (category == 'Cursos') {
                //console.log(body);
                dispatch( docenteCourseListLoaded( body ) );
            }
            else if (category == 'Plantillas') {
                dispatch( docenteTemplateListLoaded( body ) );
            }
            
        } catch (error) {
            console.log( error );
        }

    }
}

const docenteCourseListLoaded = ( courses ) => ({
    type: types.docenteCourseListLoaded,
    payload: courses
});

const docenteTemplateListLoaded = ( templates ) => ({
    type: types.docenteTemplateListLoaded,
    payload: templates
});