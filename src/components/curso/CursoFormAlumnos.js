import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import CargaArchivoAlumnos from "./CargaArchivoAlumnos";
import Container from "@mui/material/Container";
import {SxProps} from "@mui/material";
import {useState} from "react";

const styleInputs: SxProps = {
  my: 2,
  display: 'flex',
  justifyContent: 'space-around',
  "& .MuiTextField-root" : {
    width: '50%',
    mx: 4
  }
};

const columns: GridColDef[] = [
  {field: 'matricula', headerName: 'Matricula', width: 250},
  {field: 'nombres', headerName: 'Nombres', width: 250},
  {field: 'apellidos', headerName: 'Apellidos', width: 250},
  {field: 'email', headerName: 'Email', width: 250}
];

// const data = [];

const initalAlumnValues = {
  nombres: "",
  apellidos: "",
  matricula: "",
  email: ""
}

export default function CursoFormAlumnos() {
  const [values, setValues] = useState(initalAlumnValues);
  const [data, setData] = useState([]);

  const handleChange = e => {
    const {name, value} = e.target;

    setValues({
      ...values,
      [name]: value
    });
  };

  const handleAdd = () => {
    setData([...data, {...values, id:values.matricula}])
    setValues(initalAlumnValues);
  }

  return (
    <Container sx={{height: '100%', width: '100%'}}>
      <Typography variant="h2">
        Subir lista de Alumnos
      </Typography>
      <CargaArchivoAlumnos />
      <Typography variant="h2">
        Registrar manualmente
      </Typography>
      <Box sx={styleInputs}>
        <TextField name="nombres" value={values.nombres} onChange={handleChange} label="Nombres"/>
        <TextField name="matricula" value={values.matricula} onChange={handleChange} label="Matricula"/>
      </Box>
      <Box sx={styleInputs}>
        <TextField name="apellidos" value={values.apellidos} onChange={handleChange} label="Apellidos"/>
        <TextField name="email" value={values.email} onChange={handleChange} label="Email"/>
      </Box>
      <Button onClick={handleAdd} variant="contained">
        Agregar
      </Button>
      <div style={{ height: 300, width: '94%', margin: '0 32px' }}>
        <DataGrid rows={data} columns={columns} rowsPerPageOptions={[10]}/>
      </div>
    </Container>
  )
}