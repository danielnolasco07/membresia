import React, {useRef} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { blue, red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import './App.css';
import logoPira from "./logoPira.svg";
import foto from "./foto.jpg";
import codqr from "./https___segurospiramide.com_.png"
import ReactToPrint from "react-to-print"

const styles = (theme) => ({
  root: {
   /* display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 115,*/
    
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),

    },
  },
  paper: {
    width: '50%',
    height: 700,
  },
  titulomembre: {
    marginLeft: 120,
  },
  area: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  linea: {
    marginTop: -37,
    color: 'white',
  },
  primerparrafo: {
    textAlign: 'left',

  },
  logoCarnet: {

    width: 120,
    height: 130,
    marginTop: -23,
  },

  posisciontituloCarnet: {
    marginLeft: 50,

  },
  fotointer: {
    width: 78,
    height: 105,
    marginTop: -10,

  },
  ci: {

    fontSize: 10,
    display: 'flex',
    justifyContent: 'center',

  },
  apellido: {
    fontSize: 13,
  },


  datoscarnet: {
    fontSize: 13,
    marginTop: -10,
  },
  fotoqr: {
    width: 85,
    height: 92,
    marginTop: 14,
  },
  verificacion: {

    fontSize: 8,
    marginTop: -3,
  },

  nroverifiacion: {
    fontSize: 9,
    display: 'flex',
    justifyContent: 'center',
    marginTop: -10,
  },
  contenedortarjeta: {
    background: 'linear-gradient(90deg, #f7b733 30%, #fc4a1a 90%)',
  },
  segundocontenedor: {
    background: 'grey',
  },
  titulosegundocontenedor: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: -8,
  },

  titulosegundocontenedor1: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: -17,
  },

  datos: {
    fontSize: 10,
    marginTop: -10,
  },
  importante: {
    fontSize: 10,
    marginTop: -5,
  },
  importanteparrafo: {
    fontSize: 9,
    marginTop: -11,
  },
  parrafofooter: {
    fontSize: 9,
    marginTop: -3,
  },
});


class App extends React.Component {
  // const [expanded, setExpanded] = React.useState(false);


  render() {
    // const classes = useStyles();
    const {classes} = this.props;
    console.log('prueba');

    return (
      <div className={classes.root}>

        <Paper elevation={3} className={classes.paper}>
          <Card >
            <CardContent>
              <Grid container spacing={0}>
                <Grid item xs={4} >
                  <Grid container spacing={0}>
                    <Grid item xs={12} >
                      <Grid container >
                        <img src={logoPira} className={classes.img} />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={8} >
                  <Grid container spacing={0}>
                    <Grid item xs={12} className={classes.titulomembre}>
                      <Grid container className={classes.titulomembre}>
                        <h2>Carnet de Membresia</h2>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                    </Grid>
                  </Grid>

                </Grid>

              </Grid>
              <hr ></hr>



              <Grid container spacing={1}>
                <Grid item xs={12}>

                  <p className={classes.primerparrafo} >
                    Ahora en Instituto Nacional de Transporte Terrestre (INNT), en su afan de continuar brindando calidad  y eficiencia
                    en la prestacion del servicio conforme a lo dispuesto en la leyes y reglamentos que rigen en materia de Registro de
                    Transporte Terrestre, se dispone a realizar la emision de la Licensia para Conducir, bajo un nuevo formato, el cual
                    permitira de manera segura y economica la obtension de este Documento.
           </p>

                </Grid>
                <Grid item xs={6}>

                  <p className={classes.primerparrafo}>
                    Articulo 63. 'Para conducir un vehiculo la persona debe obtener y portar la licencia o titulo profesional de conducir, vigente
                    del grado o categoria que corresponda al tipo de vehiculo a motor respectivo, expedida por el Instituto Nacional de Transporte
                    Terrestre y el certificado Medico de Salud Integral Vigente, ademas el conductor o conductora de vehiculos destinados a la prestasion
                    de servicio de transporte Terrestre publico y privado de pasajeros y pasajeras, debera obtener y portar el certificado de conducir
                    expedido por la Escuela del Transporte avalado  por el Instituto Nacional del Transporte Terrestre.'
           </p>

                </Grid>
                <Grid item xs={6}>

                  <p className={classes.primerparrafo}>
                    La nueva Licensia Conducir proporciona:
                    -Altos niveles de Seguridad a traves de codigo QR
                    -Tranquilidad y comodidad: sin salir de su casa podra imprimir su Licensia  de conducir.
                    -Para cualquier informacion adicional llamar al centro  de atencion 0800NTT (4688)00 o twitter: @INTT ofical
          </p>

                </Grid>
              </Grid>

              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Paper >
                    <Card className={classes.contenedortarjeta}>
                      <CardContent>
                        <Grid container spacing={0}>
                          <Grid item xs={4} >
                            <Grid container spacing={0}>
                              <Grid item xs={12} >
                                <Grid container >
                                  <img src={logoPira} className={classes.logoCarnet} />
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={8} >
                            <Grid container spacing={0}>
                              <Grid item xs={12}  >
                                <Grid container justify="center" className={classes.posisciontituloCarnet} >
                                  <h3>Carnet de Membresia  Piramide de Seguros</h3>

                                </Grid>
                              </Grid>
                              <Grid item xs={12}>
                              </Grid>
                            </Grid>

                          </Grid>

                        </Grid>
                        <hr className={classes.linea} />


                        <Grid container spacing={1} >
                          <Grid item xs={3}>
                            <b><p className={classes.ci}> C.I:V-25.614.325</p></b>
                            <img src={foto} className={classes.fotointer} >
                            </img>
                          </Grid>
                          <Grid item xs={6}>

                            <div>
                              <b><p className={classes.apellido}>Apellido: Gomez Rojas</p></b>
                              <b><p className={classes.datoscarnet}>Nombre: Maria Jose</p> </b>
                              <b><p className={classes.datoscarnet}>Sexo: Femenino</p></b>
                              <b><p className={classes.datoscarnet}>Limitaciones:</p></b>
                              <b><p className={classes.datoscarnet}>F.Expedicion: 26/09/2020</p></b>
                              <b><p className={classes.datoscarnet}>F.Vencimiento: 26/09/2021</p></b>
                            </div>

                          </Grid>

                          <Grid item xs={3}>

                            <img src={codqr} className={classes.fotoqr}></img>
                            <b> <p className={classes.verificacion}>Nro. de Verificacion </p></b>
                            <b><p className={classes.nroverifiacion}>1515851521 </p></b>

                          </Grid>

                        </Grid>

                      </CardContent>
                    </Card>
                  </Paper>
                </Grid>


                <Grid item xs={6}>
                  <Card>
                    <CardContent>
                      <div >
                        <Grid container spacing={0}>
                          <Grid item xs={12} justify="center" alignItems="flex-start">
                            <Paper className={classes.segundocontenedor} >
                              <b><p className={classes.titulosegundocontenedor}> Driver's License - patente di Guida</p></b>
                              <b><p className={classes.titulosegundocontenedor1}> Permis de Cunduire - Fuhrerschein</p></b>
                            </Paper>
                          </Grid>

                          <Grid item xs={12}>
                            <Grid container spacing={0}>
                              <Grid item xs={6} >
                                <Grid container spacing={0}>
                                  <Grid item xs={12} >
                                    <Grid>
                                      <p className={classes.datos} >Telf. Emergencia:</p>
                                      <p className={classes.datos}> Inf. Medica:</p>
                                      <p className={classes.datos}>Alergico a: </p>
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Grid>
                              <Grid item xs={6} >
                                <Grid container spacing={0}>
                                  <Grid item xs={12}  >
                                    <Grid    >
                                      <p className={classes.datos} >Grupo Sanguineo:</p>
                                      <p className={classes.datos}>Factor RH:</p>

                                    </Grid>
                                  </Grid>

                                </Grid>

                              </Grid>

                            </Grid>
                          </Grid>

                          <Grid item xs={12}>
                            <b><p className={classes.importante}> Importante:</p></b>
                            <p className={classes.importanteparrafo}> esta Licensia autoriza a su portador para conducir la clase de vehiculo en ella determinada, pero si sobre viene
                            algun impedimiento qie incapacite fisica, mental o legalmente al titular o cuando el mismo conduzaca en condiciones que pongan
                            el peligro la seguridad del transito u ocasione daños a personas. podra ser anulada revocada o suspendida.
                              </p>
                          </Grid>
                          <Grid item xs={12}>
                            <p className={classes.parrafofooter}> © 2021 Pirámide Seguros, C.A - Todos los derechos reservados, RIF. J-00106474-5. Inscrita en la Superintendencia de la Actividad
                            Aseguradora bajo el número 80. Publicidad aprobada por la Superintendencia de la Actividad Aseguradora bajo el N° 15.091
                              </p>
                          </Grid>
                        </Grid>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>

            <CardActions>
              <Button size="small" color="primary">
                Descargar
        </Button>

            </CardActions>
          </Card >
        </Paper>
      </div>
    );
  }

}
const Appp = withStyles(styles)(App);

class Example extends React.Component {
render(){
  return (
    <div>
      <ReactToPrint 
        trigger={() => <button>Print this</button>}
         content={() => this.componentRef} 
      />

      <Appp ref={el => (this.componentRef = el)} />

    </div>
  )
}


}

export default Example

