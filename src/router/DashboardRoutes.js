import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Navbar } from '../components/ui/Navbar';
import { Panel } from '../components/ui/Panel';
import { CursoScreen } from '../components/curso/CursoScreen';
import { CursoEdit } from '../components/curso/CursoEdit';
import { Footer } from '../components/ui/Footer';
import CursoCalificacion from "../components/curso/CursoCalificacion";
import { LoginScreen } from '../components/auth/LoginScreen';
export const DashboardRoutes = () => {
  return (
      <>
        <Navbar />

        <Routes>
        <Route path="/LoginScreen" element={ <LoginScreen />} />
            <Route path="/panel" element={ <Panel />} />
            <Route path="/cursos/:cursoId" element={ <CursoEdit />} />
            <Route path="/cursos/calificacion/:cursoId"  element={ <CursoCalificacion /> }/>
            <Route path="/cursos/new" element={ <CursoScreen />} />
            <Route path="/plantillas/new" element={ <CursoScreen />} />

            <Route path="/" element={ <Panel />} />
        </Routes>

        <Footer />
      </>
  )
}
