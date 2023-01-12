import { useState, useEffect } from 'react'
import { fetchConToken } from "../helpers/fetch";

export const useFetchPanel = ( category, idDocente ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        async function retrieveData()   {
            const resp = await fetchConToken( category.toLowerCase() + '?docenteId=' + idDocente );
            const body = await resp.json();
            //console.log("De " + category.toLowerCase());
            //console.log( body );      
            setState({
                data: body,
                loading: false
            });
        }
        retrieveData();

    }, [category, idDocente]);

    return state; // { data:[], loading: true };

}


