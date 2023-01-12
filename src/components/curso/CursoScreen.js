import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import {CursoFormDatos} from './CursoFormDatos';
import {CursoFormComp} from './CursoFormComp';
import CursoFormAlumnos from "./CursoFormAlumnos";
//import {ProductoAcademico} from "./producto_academico/ProductoAcademico";
import {cursoNextStep} from "../../actions/curso";

export const CursoScreen = () => {
  const dispatch = useDispatch()

  const steps = ['Datos del curso', 'Competencias', 'Productos Académicos', 'Rúbricas'];
  const {cursoStep: activeStep} = useSelector(state => state.curso);
  const [skipped, setSkipped] = useState(new Set());
  const [nextStep, setNextStep] = useState(undefined);
  const [backStep, setBackStep] = useState(undefined);

  const handleBack = () => {
    backStep();
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setSkipped(newSkipped);
    nextStep();
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    //setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
    dispatch(cursoNextStep());
  };

  const isStepOptional = (step) => step === 1 || step === 3;

  const isStepSkipped = (step) => skipped.has(step);

  const handleReset = () => {
    //setActiveStep(0);
  };

  function StepperOptions() {
    return (
      <Stepper activeStep={activeStep} sx={{
        margin: '10px 150px'
      }}>
        {
          steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">
                  Opcional
                </Typography>
              );
            }

            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }

            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>
                  {label}
                </StepLabel>
              </Step>
            );
          })
        }
      </Stepper>
    );
  }

  function StepperContent() {
    switch (activeStep) {
      case 0:
        return <CursoFormDatos onNext={setNextStep}/>
      case 1:
        return <CursoFormComp onBack={setBackStep} onNext={setNextStep}/>
      case 2:
        //return <ProductoAcademico onBack={setBackStep} onNext={setNextStep}/>
      case 3:
        return <CursoFormAlumnos onBack={setBackStep} onNext={setNextStep}/>
      default:
        return <CursoFormDatos onNext={setNextStep}/>
    }
  }

  function StepperBtns() {
    return (
      <Container sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{mr: 1}}
        >
          Anterior
        </Button>
        <Box sx={{flex: '1 1 auto'}}/>
        {
          isStepOptional(activeStep)
          && (
            <Button color="inherit" onClick={handleSkip} sx={{mr: 1}}>
              Saltar
            </Button>
          )
        }
        <Button onClick={handleNext}>
          {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
        </Button>
      </Container>
    );
  }

  return (
    <Box sx={{width: '100%'}}>
      <StepperOptions/>
      {
        activeStep === steps.length
          ? (
            <>
              <Typography sx={{mt: 2, mb: 1}}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                <Box sx={{flex: '1 1 auto'}}/>
                <Button
                  onClick={handleReset}>
                  Reiniciar
                </Button>
              </Box>
            </>
          ) : ( // Paso: {activeStep + 1}
            StepperContent()
          )
      }
      <StepperBtns/>
    </Box>
  )
}