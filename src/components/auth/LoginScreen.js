import * as React from 'react';
import { useRef } from 'react'; 
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { startLogin, startRegister } from '../../actions/auth';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import imagen from './img2.jpeg'; 
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import logoec from '../../pictures/ec/logoec.svg';
import { Footer } from '../ui/Footer';
import Slide from '@mui/material/Slide';
import TextField from '@material-ui/core/TextField';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Swal from 'sweetalert2';
import Checkbox from '@mui/material/Checkbox';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import { Tab } from 'bootstrap';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const tab = <>&nbsp;&nbsp;&nbsp;&nbsp;</>;
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1200,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  backgroundColor: 'blue',
  boxShadow: 24,
  p: 4,
};
const useStyles2 = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: '#f5f5f5',
    border: '1px solid #f5f5f5',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '25ch',
    },
  },
}));

export function LoginScreen(props) {
  const dispatch = useDispatch();

  const [ formLoginValues, handleLoginInputChange ] = useForm({
      
      lEmail: 'hcorderos@unmsm.edu.pe',
      lPassword: '1234567'
  });

  const [ formRegisterValues, handleRegisterInputChange ] = useForm({
      
      rName: 'Hugo',
      rEmail: 'hcorderos@unmsm.edu.pe',
      rPassword1: '1234567',
      rPassword2: '1234567',
  });

  const { lEmail, lPassword } = formLoginValues;

  const { rName, rEmail, rPassword1, rPassword2 } = formRegisterValues;

  const handleLogin = ( e ) => {

      e.preventDefault();
      console.log( formLoginValues );

      dispatch( startLogin( lEmail, lPassword ) );
  }

  const handleRegister = ( e ) => {

      e.preventDefault();
      console.log( formRegisterValues );

      if ( rPassword1 !== rPassword2) {

          return Swal.fire('Error', 'Las contraseñas deben de ser iguales', 'error');
      }

      dispatch( startRegister( rName, rEmail, rPassword1 ) );
  }

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const container = window !== undefined ? () => window().document.body : undefined;
  const classes = useStyles();
  const classes3 = style;
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  //captcha
  const onChange=()=>{
    if(captcha.current.getValue()){

    }else{

    }
  }
  const captcha=useRef(null);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [open3, setOpen3] = React.useState(false);
  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };
  const [open, setOpen1] = React.useState(false);
  const handleClickOpen = () => {
    setOpen1(true);
  };

  const handleClose = () => {
    setOpen1(false);
  };
  const classes2 = useStyles2();
  const [open2, setOpen2] = React.useState(false);

  const handleOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  const classes33 = useStyles2();
  const [open33, setOpen33] = React.useState(false);

  const handleOpen33 = () => {
    setOpen33(true);
  };

  const handleClose33 = () => {
    
    setOpen33(false);
    setOpen3(false);
  };
  const classes22 = useStyles2();
  const [open22, setOpen22] = React.useState(false);

  const handleClickOpen22 = () => {
    setOpen22(true);
  };

  const handleClose22 = () => {
    setOpen22(false);
    setOpen2(false);
    setOpen1(false);
  };
  const [open4, setOpen4] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen4 = (scrollType) => () => {
    setOpen4(true);
    setScroll(scrollType);
  };

  const handleClose4 = () => {
    setOpen4(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open4) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open4]);
  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_h5gdy5m','template_tebm71o',event.target,'jozVhJFgwZ7a82NsE')
    .then(response => console.log(response))
    .catch(error => console.log(error))
    event.target.reset();
  }

  return (
<React.Fragment>
      
           <AppBar position="static">
           <Container maxWidth="xl"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          
        >
          <Toolbar>
          <img class='logonav' src={logoec} width="20" height="20"/>
          <Typography
            variant="h6"
            noWrap
            component="div"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              flexGrow: 1,
            }}
          >
            VALCOM
          </Typography>
          
          <Typography type="button"  textAlign="left" color="primary"  sx={{fontSize: 16, color:'white'}} onClick={handleClickOpen3}>
              Registrarse      
            </Typography>
            <Typography>{tab}{tab} </Typography>
            
            <Dialog className={classes3}
            TransitionComponent={Transition}
            keepMounted
            fullScreen={fullScreen}
            open={open3}
            onClose={handleClose3}
            aria-labelledby="responsive-dialog-title"
            >
         <Box
          sx={{
            width: 480,
            p: 2,
            
            }}  >     
        <DialogTitle id="responsive-dialog-title" color="white">
          {"Nuevo registro                "}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          <Typography  textAlign="left" sx={{fontSize: 14, color:'black'}}>
            Ingresa los datos requeridos:     

            </Typography>

          </DialogContentText>
                          <div>
                            <TextField
                              autoFocus
                              margin="dense"
                              id="name"
                              label="Nombres"
                              type="email"
                              fullWidth
                              variant="standard"
                            />
                            </div>
                            <div>
                            <TextField
                              autoFocus
                              margin="dense"
                              id="name"
                              label="Apellidos"
                              type="email"
                              fullWidth
                              variant="standard"
                            />
                            </div>
                            <div>
                            <TextField
                              autoFocus
                              margin="dense"
                              id="name"
                              label="Correo"
                              type="email"
                              fullWidth
                              variant="standard"
                            />
                            </div>
                            <div>
                            <TextField
                              autoFocus
                              margin="dense"
                              id="name"
                              label="Crear contraseña"
                              type="password"
                              fullWidth
                              variant="standard"
                            />
                            </div>
                            <div>
                            <TextField
                              autoFocus
                              margin="dense"
                              id="name"
                              label="Confirmar contraseña"
                              type="password"
                              fullWidth
                              variant="standard"
                            />
                            </div>
        </DialogContent>
        
        <FormGroup>
        <FormControlLabel  control={<Checkbox />} label="Acepto los términos y condiciones" onClick={handleClickOpen4('body')}/>
        <Dialog
        open={open4}
        onClose={handleClose4}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Términos y condiciones</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <Typography  sx={{fontSize: 12, color:'black'}}>
            Esta página web es propiedad y está operado por grupo de investigación de la UNMSM. Estos Términos establecen los términos y condiciones bajo los cuales tu puedes usar nuestra página web y servicios ofrecidos por nosotros. Esta página web ofrece a los visitantes la gestión con machine learning de silabos. Además, aceptas recibir de vez en cuando nuestros mensajes y materiales de promoción correo electrónico. Si no deseas recibir dichos materiales o avisos de promociones, simplemente avísanos en cualquier momento. Al acceder o usar la página web de nuestro servicio, usted aprueba que haya leído, entendido y aceptado estar sujeto a estos términos.
            </Typography>
     </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button  onClick={handleClose4} >Aceptar</Button>
          
        </DialogActions>
      </Dialog>
    </FormGroup>
    <div>
    <ReCAPTCHA
    ref={captcha}
    sitekey="6LcVbwkjAAAAALoRwff-nomCsnV6L0GQQh2MN4h8"
    onChange={onChange}
  />,
    </div>
        <DialogActions>
          <Button autoFocus onClick={handleClose3}>
            Cancelar
          </Button>
          {Tab}
          <Button onSubmit={handleRegister} onClick={handleOpen33} autoFocus>
            Aceptar
          </Button>
          <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes33.modal}
                        open={open33}
                        onClose={handleClose33}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        sx={{padding:"1"}}
                        BackdropProps={{
                          timeout: 500,
                        }}
                      >
                        <Fade in={open33}>
                          <div className={classes2.paper} style={{justifyContent:'center'}}>
                            <h2 id="transition-modal-title" sx={{fontSize: 16, color:'black'}} >Validar Registro 
                            <IconButton
                            aria-label="close"
                            onClick={handleClose33}
                            sx={{
                              position: 'relative',
                              right: -200,
                              top: -4,
                              color: (theme) => theme.palette.grey[500],
                            }}
                          >
                            <CloseIcon />
                            </IconButton>
                            </h2>
                            <p id="transition-modal-description">Ingresa el código enviado a tu correo para completar tu registro:</p>
                            <div>
                            <TextField
                              autoFocus
                              margin="dense"
                              id="name"
                              label="Código"
                              type="text"
                              fullWidth
                              variant="standard"
                            />
                            </div>
                            <div>
                            <hr style={{color:"#f5f5f5", border:"#f5f5f5"}}/>
                            <Button variant="contained" color="primary" onClick={handleClose33} >
                              Validar
                            </Button>
                            
                            </div>
                          </div>
                        </Fade>
                      </Modal>
        </DialogActions>
        </Box>
      </Dialog>
      
      
      
            <Typography type='button' textAlign="rigth" onClick={handleClickOpen} sx={{fontSize: 16, color:'white'}}>
            Iniciar Sesión
            </Typography>
      
                    
                      <Dialog
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                      sx={{padding:"1"}}
                    >
                      
                      <DialogTitle id="alert-dialog-title" sx={{fontSize: 18, color:'black'}}>{"Iniciar Sesión"}</DialogTitle>
                      <IconButton
                      aria-label="close"
                      onClick={handleClose}
                      sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                      }}
                    >
                      <CloseIcon />
                      </IconButton>
                  <DialogContent>
                
                <Typography  textAlign="center" sx={{fontSize: 14, color:'black'}}>
                    Ingrese sus datos correctamente
                      </Typography>
                      <form className={classes.root} noValidate autoComplete="off">
                      <div>
                      <TextField required id="standard-required" label="Usuario:" defaultValue="" />
                      </div>
                      <div>
                      <TextField
                      id="standard-password-input"
                      label="Contraseña"
                      type="password"
                      autoComplete="current-password"
                      onChange={ handleRegisterInputChange }
                      />
                      </div>
                     
                        </form> 
                        <Typography  type="button" textAlign="center" onClick={handleOpen2}  sx={{fontSize: 14, color:'blue'}}>
                        ¿Olvidó su Contraseña?
                      </Typography>
                      <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes2.modal}
                        open={open2}
                        onClose={handleClose2}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        sx={{padding:"1"}}
                        BackdropProps={{
                          timeout: 500,
                        }}
                      >
                        <Fade in={open2}>
                          <div className={classes2.paper} style={{justifyContent:'center'}}>
                            <h2 id="transition-modal-title" sx={{fontSize: 16, color:'black'}} >Recuperar contraseña 
                            <IconButton
                            aria-label="close"
                            onClick={handleClose2}
                            sx={{
                              position: 'relative',
                              right: -10,
                              top: -4,
                              color: (theme) => theme.palette.grey[500],
                            }}
                          >
                            <CloseIcon />
                            </IconButton>
                            </h2>
                            <p id="transition-modal-description">Ingresa tu correo para recuperar tu contraseña:</p>
                            <div>
                            <TextField
                              autoFocus
                              margin="dense"
                              id="name"
                              label="Correo"
                              type="email"
                              fullWidth
                              variant="standard"
                            />
                            </div>
                            <div>
                            <hr style={{color:"#f5f5f5", border:"#f5f5f5"}}/>
                            <Button variant="contained" style ={{marginRight:20}}  color="primary" onClick={sendEmail} >
                              Enviar
                            </Button>
                            {Tab}{Tab}
                            <Button variant="contained" color="primary" onClick={handleClickOpen22}>
                              Siguiente
                            </Button>
                            </div>
                          </div>
                        </Fade>
                      </Modal>
                      <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes22.modal}
                        open={open22}
                        onClose={handleClose22}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        sx={{padding:"1"}}
                        BackdropProps={{
                          timeout: 500,
                        }}
                      >
                        <Fade in={open22}>
                          <div className={classes2.paper} style={{justifyContent:'center'}}>
                            <h2 id="transition-modal-title" sx={{fontSize: 16, color:'black'}} >Cambiar contraseña 
                            <IconButton
                            aria-label="close"
                            onClick={handleClose22}
                            sx={{
                              position: 'relative',
                              right: -120,
                              top: -4,
                              color: (theme) => theme.palette.grey[500],
                            }}
                          >
                            <CloseIcon />
                            </IconButton>
                            </h2>
                            <p>Ingresa los datos solicitados y luego inicia sesión nuevamente</p>
                            <div>Ingresa el código enviado a tu correo:</div>
                            <TextField
                              autoFocus
                              margin="dense"
                              id="name"
                              label="Código"
                              type="text"
                              fullWidth
                              variant="standard"
                            />
                            <div>Ingresa tu nueva contraseña:</div>
                            
                            <TextField
                              autoFocus
                              margin="dense"
                              id="name"
                              label="Password"
                              type="password"
                              fullWidth
                              variant="standard"
                            />
                            
                            <div>Confirma tu nueva contraseña:</div>
                            
                            <TextField
                              autoFocus
                              margin="dense"
                              id="name"
                              label="Password"
                              type="password"
                              fullWidth
                              variant="standard"
                            />
                          
                            <div>
                            <hr style={{color:"#f5f5f5", border:"#f5f5f5"}}/>
                            <Button variant="contained"  style ={{marginRight:20}} color="primary" onSubmit={sendEmail} >
                              Cambiar
                            </Button>
                            
                            <Button variant="contained" color="primary"  onClick={handleClose22}>
                              Cerrar
                            </Button>
                            </div>
                          </div>
                        </Fade>
                      </Modal>
                  </DialogContent>
                  <DialogActions >
                    <Container  maxWidth="sm" style={{position:'center'}}>
                    <div>
                    <ReCAPTCHA
                    ref={captcha}
                    sitekey="6LcVbwkjAAAAALoRwff-nomCsnV6L0GQQh2MN4h8"
                    onChange={onChange}
                    />,
                    </div>
                    <Button onClick={ handleLogin } variant="contained"  color="primary" autoFocus style={{position: 'relative', bottom: '50%', right: '-30%'}}>
                      Aceptar
                    </Button>
                    
                    </Container >
                    
                  </DialogActions>
                  </Dialog>
                  
        </Toolbar>
       
        </Container>
        </AppBar>
        
           <CssBaseline />
          
      <Container fixed>
      
          
        
        <Box component="main" sx={{  bgcolor: '#cfe8fc', height: '100vh',p:3 }} >
        <Typography variant="h3" textAlign="center" paragraph sx={{fontSize: 36, color:'black'}}>
         ¿Qué es Evalcomp?
                        
                        
        </Typography>
        <hr/>
        <Typography  sx={{fontSize: 24, color:'black'}}>
        
        Es una plataforma interactiva para docentes que gestiona los diversos procesos para la evaluación por competencias.

         
        </Typography>
        <img src={imagen} alt='variant' size="(max-width: 1080px) 480px" border="2"/>
        </Box>
        
      </Container>
      <Footer/>
      
    </React.Fragment>
      
 
  );
 
}
LoginScreen.propTypes = {
   window: PropTypes.func,
};