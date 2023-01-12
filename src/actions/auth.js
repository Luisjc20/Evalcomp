import Swal from "sweetalert2";

import { fetchSinToken, fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";
import { cursoLogoutCleaning } from "./curso";


export const startLogin = ( email, password ) => {

    return async( dispatch ) => {
        //console.log( email, password);
        const resp = await fetchSinToken( 'auth', { email, password }, 'POST');
        const body = await resp.json();

        //console.log( body );
        if ( resp.ok )  {

            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( login ( { 
                uid: body.uid, 
                name: body.name 
            }) );
        }
        else    {
            Swal.fire('Error', body.title, 'error');
        }
    }
}

export const startRegister = ( name, email, password ) => {

    return async( dispatch ) => {
        //console.log( email, password);
        const resp = await fetchSinToken( 'auth/new', { name, email, password }, 'POST');
        const body = await resp.json();

        //console.log( body );
        if ( resp.ok )  {

            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( login ( { 
                uid: body.uid, 
                name: body.name 
            }) );
        }
        else    {
            Swal.fire('Error', body.title, 'error');
        }
    }
}

export const startChecking = () => {

    return async( dispatch ) => {
        const resp = await fetchConToken( 'auth/renew' );
        const body = await resp.json();

        //console.log( body );
        if ( resp.ok )  {

            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( login ( { 
                uid: body.uid, 
                name: body.name 
            }) );
        }
        else    {
            //Swal.fire('Error', body.msg, 'error');
            dispatch( checkingFinish() );
        }
    }
}

const login = ( user ) => ({
    type: types.authLogin,
    payload: user
});

const checkingFinish = () => ({
    type: types.authCheckingFinish
});

export const startLogout = () => {

    return ( dispatch ) => {
        localStorage.clear();
        dispatch( logout() );
        dispatch( cursoLogoutCleaning() );
    }
}

const logout = () => ({ 
    
    type: types.authLogout 

});