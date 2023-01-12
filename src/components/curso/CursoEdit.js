import React from 'react'
import { Navigate, useParams } from 'react-router-dom';

export const CursoEdit = () => {

    const { cursoId } = useParams();

    if (cursoId === undefined)   {
        return <Navigate to="/panel" />
    }

    return (
        <div>

            <h1> Cursos </h1>

            { cursoId }
        </div>
    )
}
