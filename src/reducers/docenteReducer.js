import { types } from "../types/types";

const initialState = {
    
    courses: [],
    //activeCourse: null,
    templates: [],
    //activeTemplate: null
}

export const docenteReducer = ( state = initialState, action) => {

    switch( action.type )   {

        case types.docenteCourseListLoaded:
            return {
                ...state,
                courses: [ ...action.payload ]
            }

        case types.docenteTemplateListLoaded:
            return {
                ...state,
                templates: [ ...action.payload ]
            }

    
/*         case types.teacherAddCourse:
            return {
                ...state,
                courses: [
                    ...state.courses,
                    action.payload
                ]
            }
 */
        default:
                return state;
    }
}