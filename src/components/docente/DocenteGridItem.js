import React from 'react'
import { Link } from 'react-router-dom'

export const DocenteGridItem = ({ id, codCurso, cicloAcademico, nombre, url }) => {

    url = 'https://img.icons8.com/fluency/344/pictures-folder--v2.png';

    return (
        <div className="card animate__animated animate__fadeIn">
            <Link to={`/curso/${id}`}>
            <img src={ url } alt={ nombre } />
            <p> { nombre } </p>
            </Link>
            { codCurso != undefined ? <div> Código {codCurso} <br /> Ciclo {cicloAcademico} </div> : '' }
        </div>
    )
}
