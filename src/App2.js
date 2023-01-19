import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Switch from '@material-ui/core/Switch';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from "react-router-dom";
import ObtenerValores from './obtenervalores'

//import img from ".imagen/img.png"

const useStyles = makeStyles((theme) => ({

  containerprincipal: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
  },
  paperprincipal: {
    width: 620,
    height: 585,
  },
  contenedorboton: {
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center'

  },
  divcardimg: {
    marginTop: 30,
    display: 'flex',
    justifyContent: 'center'
  },
  cardimg: {
    width: 285,
    height: 178,
    border: ' 0.5px #808080a6  solid',
  },
  titulodescrip: {
    marginTop: 20,
    textAlign: 'center',
  },
  containerswitch: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 30,
  },
  textarea: {
    height: 49,
    width: 434,

  },
  buttonpreview: {
    textAlign: 'center',
  },
  contenedorbutton: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 10,
  },


  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

}));



export default function App() {
  const classes = useStyles();

  const [profileImg, setState] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png');
 
  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setState(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };



  const [values, setValues] = useState('');
  const onChange = (e) => {
    setValues(e.target.value)
    console.log( values);
  
    document.getElementById('prueba1').value=values;

  };






  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {

    setChecked(!checked);
  };

  const [checked2, setChecked2] = React.useState(false);
  const toggleChecked2 = () => {

    setChecked2(!checked2);
    
  };

  const [checked3, setChecked3] = React.useState(false);
  const toggleChecked3 = () => {

    setChecked3(!checked3);
    
  };
  


  return (
    <div className={classes.root}>


      <AppBar position="static">
        <Toolbar>
          {/* <img src={img}  /> */}
        </Toolbar>
      </AppBar>

      <div className={classes.containerprincipal}>

        <Paper elevation={8} className={classes.paperprincipal}>
          <div className="page">
            <div className="container">
              <Grid container spacing={2} className={classes.contenedorboton} >
                <Grid item xs={4} >
                  <Typography variant="caption" display="block" gutterBottom>
                    Por favor Seleccione la Imagen
                   </Typography>
                </Grid>
                <Grid item xs={4} >
                  <input type="file" accept="image/*" name="image-upload" id="input" onChange={imageHandler} />
                  <label htmlFor="input">
                    <Button size="small" variant="contained" color="primary" component="span">
                      Subir Imagen
                      </Button>
                  </label>
                </Grid>
              </Grid>
              <Grid item xs={12} >
                <div className={classes.divcardimg}>
                  <Card className={classes.cardimg} >
                    <div className="img-holder">
                      <img src={profileImg} alt="" id="img" className="img" />
                    </div>
                  </Card>
                </div>
              </Grid>
            </div>
          </div>
          <Grid container spacing={2} className={classes.titulodescrip} >
            <Grid item xs={12} >
              <Typography variant="caption" display="block" gutterBottom>
                Descripcion de la Imagen
               </Typography>
            </Grid>
          </Grid>



          <Grid container item xs={12} className={classes.containerswitch}>
            <FormGroup>
              <Grid item xs={1}>
                <FormControlLabel
                  control={<Switch size="small" checked={checked} onChange={toggleChecked} />}
                />
              </Grid>
            </FormGroup>

            {checked ? (<Grid item xs={10}>
              <TextareaAutosize valor="valorProp" aria-label="minimum height" id="prueba" rowsMin={3} className={classes.textarea} onChange={onChange} />
            </Grid>) : (<Grid item xs={10}></Grid>)}
          </Grid>

          <Grid container item xs={12} className={classes.containerswitch}>

            <Grid item xs={1}>
              <FormGroup>
                <FormControlLabel
                  control={<Switch size="small" checked={checked2} onChange={toggleChecked2}/>}
                />
              </FormGroup>
              </Grid>
              
              {checked2 ? ( <Grid item xs={10}>
              <TextareaAutosize    aria-label="minimum height" rowsMin={3} className={classes.textarea} />
            </Grid>) : (<Grid item xs={10}></Grid>)}   
       
          </Grid>

          <Grid container item xs={12} className={classes.containerswitch}>

            <Grid item xs={1}>
              <FormGroup>
                <FormControlLabel
                  control={<Switch size="small" checked={checked3} onChange={toggleChecked3} />}
                />
              </FormGroup>
            </Grid>

            {checked3 ? ( <Grid item xs={10}>
              <TextareaAutosize aria-label="minimum height" rowsMin={3} className={classes.textarea} />
            </Grid>) : (<Grid item xs={10}></Grid>)}     
          </Grid>
          <Grid container spacing={2} >
            <Grid item xs={12}>
              <div className={classes.contenedorbutton} >
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  className={classes.buttonpreview}
                >
                  {/* <Link to="/obtenervalores" >Preview</Link> */}

                </Button>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </div>
      
    
    
    
    
    
      <div className={classes.containerprincipal}>
            <Paper elevation={8} className={classes.paperprincipal}>
            
            <Grid container spacing={2}  >
               
                    <Grid item xs={12}  className={classes.containertitulo}>
                      <Typography variant="caption" display="block" gutterBottom>
                        Detalle de la Imagen Seleccionada
                      </Typography>
                    </Grid>           
             </Grid>       
           
            <Grid item xs={12} >
                <div className={classes.divcardimg}>
                  <Card className={classes.cardimg} >
                    <div className="img-holder">
                      <img src={profileImg} alt="" id="img" className="img" />
                    </div>
                  </Card>
                </div>
              </Grid>
               
              <Grid container item xs={12} className={classes.contenedortextarea} >
              <Grid item xs={12} className={classes.contenedortextarea}>
              <TextareaAutosize  id="prueba1"   aria-label="minimum height" rowsMin={3} className={classes.textarea} />
              </Grid>
              </Grid>

              <Grid container item xs={12} >
              <Grid item xs={12} className={classes.contenedortextarea}>
              <TextareaAutosize    aria-label="minimum height" rowsMin={3} className={classes.textarea} />
              </Grid>
              </Grid>

              <Grid container item xs={12} >
              <Grid item xs={12} className={classes.contenedortextarea}>
              <TextareaAutosize    aria-label="minimum height" rowsMin={3} className={classes.textarea} />
              </Grid>
              </Grid>



                
            </Paper>
        </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </div>

   


  );
}