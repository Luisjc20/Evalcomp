import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import { DocenteGrid } from './DocenteGrid';

export const DocenteScreen = () => {
    
    const [categories, setCategories] = useState(['Cursos', 'Plantillas']);
    //const [categories, setCategories] = useState(['Cursos']);

    return (
        <>
            <AddCategory setCategories={ setCategories } />

            <ol className="docente-panel">
                {
                    categories.map( category  => (
                        <DocenteGrid 
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>

        </>
    )
}
