import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchConToken} from "../../helpers/fetch";
import Box from "@mui/material/Box";
import {HotTable} from "@handsontable/react";
import {HyperFormula} from "hyperformula";

let style = {
  backgroundColor: '#F3F6F9',
  display: 'flex',
  alignItems: 'center',
  '& .container.MuiBox-root.css-0': {
    backgroundColor: 'white',
    p: 4,
    '& .title.MuiBox-root.css-0': {
      display: 'flex',
      alignItems: 'center',
      '& .MuiChip-root.css-x2wssl-MuiChip-root': {
        mx: 2
      }
    }
  }
}


export default function CursoCalificacion() {
  const {cursoId} = useParams();
  const [curso, setCurso] = useState({
    "id": "61e0ddd996bebc981003a48b",
    "nombre": "Patrones Diseño",
    "desc": "Descripcion",
    "docenteId": "61e7188f4c73e74452b16315",
    "sistemaCalificacion": {
      "id": "61dcb6e611dc92a2eccc79a2",
      "autor": "EvalComp",
      "nombre": "Escala Perú",
      "escalas": [
        {
          "nota": 20,
          "descripcion": "AD (Muy bueno / Excelente)"
        },
        {
          "nota": 17,
          "descripcion": "A (Bueno / Satisfactorio)"
        },
        {
          "nota": 12,
          "descripcion": "B (En proceso)"
        },
        {
          "nota": 10,
          "descripcion": "C (Deficiente / En inicio)"
        }
      ],
      "max": 20,
      "min": 11
    },
    "evaluaciones": [
      {
        "porcentaje": 20,
        "detalles": [
          {
            "porcentaje": 100,
            "productoAcademico": {
              "id": "61dcbb8a11dc92a2eccc79cf",
              "nombre": "Examen Parcial",
              "competencias": [
                {
                  "id": "6211132d00489e4ebee4333b",
                  "nombre": "Gestiona la información y la difusión de conocimientos con adecuada comunicación oral y escrita de la propia profesión, ejerciendo el derecho de libertad de pensamiento con responsabilidad",
                  "porcentaje": 100,
                  "especificas": [
                    {
                      "id": "6211132d00489e4ebee43339",
                      "nombre": "Comunicación oral y escrita",
                      "porcentaje": 100
                    }
                  ]
                }
              ],
              "metodoEval": "Metodo 1",
              "peso": 20,
              "rubrica": {
                "nombre": "Rubrica de Producto 1",
                "criterios": []
              }
            }
          }
        ]
      },
      {
        "porcentaje": 60,
        "detalles": [
          {
            "porcentaje": 100,
            "productoAcademico": {
              "id": "61dcbbfd11dc92a2eccc79d1",
              "nombre": "Prácticas calificadas",
              "competencias": [
                {
                  "id": "6211132d00489e4ebee4333e",
                  "nombre": null,
                  "porcentaje": 100,
                  "especificas": [
                    {
                      "id": "6211132d00489e4ebee4333c",
                      "nombre": "Capacidad de Análisis",
                      "porcentaje": 50
                    },
                    {
                      "id": "6211132d00489e4ebee4333d",
                      "nombre": "Pensamiento Crítico",
                      "porcentaje": 50
                    }
                  ]
                }
              ],
              "metodoEval": "Metodo 3",
              "peso": 60,
              "rubrica": {
                "nombre": "Rubrica para evaluar el PA2",
                "criterios": [
                  {
                    "titulo": "Criterio 1",
                    "descripcion": "Este es el criterio 1",
                    "niveles": [
                      {
                        "titulo": "Sobresaliente",
                        "descripcion": "El alumno desarrolló sin errores",
                        "puntaje": 4
                      },
                      {
                        "titulo": "Suficiente",
                        "descripcion": "El alumno desarrolló con observaciones",
                        "puntaje": 3
                      },
                      {
                        "titulo": "Insuficiente",
                        "descripcion": "El alumno desarrolló con muchas observaciones",
                        "puntaje": 2
                      },
                      {
                        "titulo": "Deficiente",
                        "descripcion": "No presentó",
                        "puntaje": 0
                      }
                    ]
                  }
                ]
              }
            }
          }
        ]
      },
      {
        "porcentaje": 20,
        "detalles": [
          {
            "porcentaje": 100,
            "productoAcademico": {
              "id": "623bcdf26345898bff693598",
              "nombre": "Examen Final",
              "competencias": [
                {
                  "id": "6211132d00489e4ebee4333b",
                  "nombre": "Gestiona la información y la difusión de conocimientos con adecuada comunicación oral y escrita de la propia profesión, ejerciendo el derecho de libertad de pensamiento con responsabilidad",
                  "porcentaje": 100,
                  "especificas": [
                    {
                      "id": "6211132d00489e4ebee43339",
                      "nombre": "Comunicación oral y escrita",
                      "porcentaje": 100
                    }
                  ]
                }
              ],
              "metodoEval": "",
              "peso": 20,
              "rubrica": {
                "nombre": null,
                "criterios": null
              }
            }
          }
        ]
      }
    ],
    "codCurso": "20W0704",
    "cicloAcademico": "2022-I",
    "grupos": [
      {
        "nombre": "1",
        "alumnos": [
          "621e4dc32276bc8fdd356c8a",
          "621e4f252276bc8fdd356c95"
        ]
      },
      {
        "nombre": "2",
        "alumnos": [
          "621e4f532276bc8fdd356c96"
        ]
      }
    ]
  });
  const [alumnos, setAlumnos] = useState([
    {
      "id": "621e4dc32276bc8fdd356c8a",
      "nombres": "Layla",
      "apellidos": "Portillo",
      "email": "LaylaPortilloJuarez@rhyta.com",
      "password": null,
      "codMatricula": "211",
      "institucion": null,
      "metodoEvaluacion": null,
      "cursos": null,
      "cursosInscrito": [
        "61e0ddd996bebc981003a48b"
      ],
      "plantillas": null,
      "sistemasCalificacion": null
    },
    {
      "id": "621e4f252276bc8fdd356c95",
      "nombres": "Elia",
      "apellidos": "Corrales",
      "email": "EliaCorralesTafoya@teleworm.us",
      "password": null,
      "codMatricula": "212",
      "institucion": null,
      "metodoEvaluacion": null,
      "cursos": null,
      "cursosInscrito": [
        "61e0ddd996bebc981003a48b"
      ],
      "plantillas": null,
      "sistemasCalificacion": null
    },
    {
      "id": "621e4f252276bc8fdd356c95",
      "nombres": "Elia",
      "apellidos": "Corrales",
      "email": "EliaCorralesTafoya@teleworm.us",
      "password": null,
      "codMatricula": "212",
      "institucion": null,
      "metodoEvaluacion": null,
      "cursos": null,
      "cursosInscrito": [
        "61e0ddd996bebc981003a48b"
      ],
      "plantillas": null,
      "sistemasCalificacion": null
    },
    {
      "id": "621e4f252276bc8fdd356c95",
      "nombres": "Elia",
      "apellidos": "Corrales",
      "email": "EliaCorralesTafoya@teleworm.us",
      "password": null,
      "codMatricula": "212",
      "institucion": null,
      "metodoEvaluacion": null,
      "cursos": null,
      "cursosInscrito": [
        "61e0ddd996bebc981003a48b"
      ],
      "plantillas": null,
      "sistemasCalificacion": null
    },
    {
      "id": "621e4f252276bc8fdd356c95",
      "nombres": "Elia",
      "apellidos": "Corrales",
      "email": "EliaCorralesTafoya@teleworm.us",
      "password": null,
      "codMatricula": "212",
      "institucion": null,
      "metodoEvaluacion": null,
      "cursos": null,
      "cursosInscrito": [
        "61e0ddd996bebc981003a48b"
      ],
      "plantillas": null,
      "sistemasCalificacion": null
    },
    {
      "id": "621e4f252276bc8fdd356c95",
      "nombres": "Elia",
      "apellidos": "Corrales",
      "email": "EliaCorralesTafoya@teleworm.us",
      "password": null,
      "codMatricula": "212",
      "institucion": null,
      "metodoEvaluacion": null,
      "cursos": null,
      "cursosInscrito": [
        "61e0ddd996bebc981003a48b"
      ],
      "plantillas": null,
      "sistemasCalificacion": null
    },
    {
      "id": "621e4f252276bc8fdd356c95",
      "nombres": "Elia",
      "apellidos": "Corrales",
      "email": "EliaCorralesTafoya@teleworm.us",
      "password": null,
      "codMatricula": "212",
      "institucion": null,
      "metodoEvaluacion": null,
      "cursos": null,
      "cursosInscrito": [
        "61e0ddd996bebc981003a48b"
      ],
      "plantillas": null,
      "sistemasCalificacion": null
    },
    {
      "id": "621e4f252276bc8fdd356c95",
      "nombres": "Elia",
      "apellidos": "Corrales",
      "email": "EliaCorralesTafoya@teleworm.us",
      "password": null,
      "codMatricula": "212",
      "institucion": null,
      "metodoEvaluacion": null,
      "cursos": null,
      "cursosInscrito": [
        "61e0ddd996bebc981003a48b"
      ],
      "plantillas": null,
      "sistemasCalificacion": null
    },
    {
      "id": "621e4f252276bc8fdd356c95",
      "nombres": "Elia",
      "apellidos": "Corrales",
      "email": "EliaCorralesTafoya@teleworm.us",
      "password": null,
      "codMatricula": "212",
      "institucion": null,
      "metodoEvaluacion": null,
      "cursos": null,
      "cursosInscrito": [
        "61e0ddd996bebc981003a48b"
      ],
      "plantillas": null,
      "sistemasCalificacion": null
    },
    {
      "id": "621e4f252276bc8fdd356c95",
      "nombres": "Elia",
      "apellidos": "Corrales",
      "email": "EliaCorralesTafoya@teleworm.us",
      "password": null,
      "codMatricula": "212",
      "institucion": null,
      "metodoEvaluacion": null,
      "cursos": null,
      "cursosInscrito": [
        "61e0ddd996bebc981003a48b"
      ],
      "plantillas": null,
      "sistemasCalificacion": null
    },
    {
      "id": "621e4f252276bc8fdd356c95",
      "nombres": "Elia",
      "apellidos": "Corrales",
      "email": "EliaCorralesTafoya@teleworm.us",
      "password": null,
      "codMatricula": "212",
      "institucion": null,
      "metodoEvaluacion": null,
      "cursos": null,
      "cursosInscrito": [
        "61e0ddd996bebc981003a48b"
      ],
      "plantillas": null,
      "sistemasCalificacion": null
    },
    {
      "id": "621e4f532276bc8fdd356c96",
      "nombres": "Danel",
      "apellidos": "Bermúdez",
      "email": "DanelBermudezBorrego@jourrapide.com",
      "password": null,
      "codMatricula": "213",
      "institucion": null,
      "metodoEvaluacion": null,
      "cursos": null,
      "cursosInscrito": [
        "61e0ddd996bebc981003a48b"
      ],
      "plantillas": null,
      "sistemasCalificacion": null
    }
  ]);
  const [settings, setSettings] = useState({
    formulas: {
      engine: HyperFormula
    },
    height: 'auto',
    width: '100%',
    colHeaders: [],
    columns: [],
    licenseKey: 'non-commercial-and-evaluation'
  });

  const wHeight = window.innerHeight;
  style = {
    ...style,
    minHeight: `${wHeight - 80}px`,
    '& .container.MuiBox-root.css-0': {
      maxHeight: `${wHeight - 131}px`,
      ...style['& .container.MuiBox-root.css-0']
    },
  }

  useEffect(() => {
    // fetchConToken(`cursos/${cursoId}?details=true`, "")
    //   .then((resp) => resp.json())
    //   .then(body => console.log(body));
    console.log()
    const data = [];

    const colHeaders = [
      'Matricula',
      'Apellidos',
      'Nombres',
      ...curso.evaluaciones.flatMap((evaluacion, ix) => {
        evaluacion.detalles.push({productoAcademico: {nombre: `Nota ${ix + 1}`}});
        return evaluacion.detalles
      }).map(detalle => detalle.productoAcademico.nombre),
      'Promedio'
    ];

    let ixs = [];
    let colNumber = 'D'.charCodeAt(0);
    const calc = [];
    let promPond = "=";
    curso.evaluaciones.forEach((evaluacion, index) => {
      let sumNota = "=";
      evaluacion.detalles.forEach(detalle => {
        const col = String.fromCharCode(colNumber);
        if (detalle.productoAcademico.nombre.includes("Nota")) {
          promPond += `+${col}r*${evaluacion.porcentaje / 100}`
          ixs.push(calc.length);
          calc.push(sumNota);
        } else {
          sumNota += `+${col}r*${detalle.porcentaje / 100}`
          calc.push(0);
        }
        colNumber++;
      });
    });

    ixs.push(calc.length);
    calc.push(promPond);

    alumnos.forEach((alumno, i) => {
      const calcData = [
        alumno.codMatricula,
        alumno.apellidos,
        alumno.nombres,
        ...calc
      ];
      ixs.forEach(ix => calcData[ix + 3] = calcData[ix + 3].replaceAll('r', i + 1));
      data.push(calcData);
    });

    colHeaders.forEach(header => {
      settings.columns.push({readOnly: header.includes('Nota') || header === 'Promedio'});
    });

    setSettings({
      ...settings,
      colHeaders,
      data,
    });

  }, []);


  return (
    <Box sx={style}>
      <Box className="container">
        <Box className="title">
          <Typography variant="h2">
            {curso.nombre}
          </Typography>
          <Chip label={curso.cicloAcademico} variant="outlined"/>
        </Box>
        <Typography variant="body2">
          {curso.codCurso}
        </Typography>
        <Box className="table">
          <HotTable
            settings={settings}
          />
        </Box>
      </Box>
    </Box>
  );
}