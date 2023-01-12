import Dropzone from "react-dropzone";
import Typography from "@mui/material/Typography";
import "./CargaArchivoAlumnos.css";

export default function CargaArchivoAlumnos() {
  return (
    <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
      {
        ({getRootProps, getInputProps}) => (
          <section className="dropzone">
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <Typography>Arrastra o selecciona el archivo en formato .xlsx o .csv</Typography>
              <Typography>Columnas admitidas</Typography>
              <Typography>Codigo, Nombres, Apellidos, Email</Typography>
            </div>
          </section>
        )
      }
    </Dropzone>
  )
}