import React from "react";
// import Button from '@material-ui/core/Button';
import {Button, IconButton, Typography} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import {makeStyles,ThemeProvider } from '@material-ui/core/styles';
import theme  from './themaConfig'


const useStyle = makeStyles({
    // botonPersonalizado:{

    //     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    //     border: 0,
    //     borderRadius: 3,
    //     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    //     color: 'white',
    //     height: 48,
    //     padding: '0 30px',
    // }

})

 export default function Ejemplo (){

    const clases = useStyle();

    return(
     <div>    

       {/* <Button  color="secondary">
         color
       </Button>
        <p>dsfs</p>
       <Button variant="contained" color="primary">
       outlined
       </Button>
       <p>dsfs</p>

       <Button variant="contained" color="primary" disableElevation>
       outlined
       </Button>
       <p>dsfs</p>
       <Button variant="contained" color="primary" href='https://google.com'>
       google
       </Button>

       <p>dsfs</p>
       <Button variant="contained" color="primary" fullWidth>
       fullWidth
       </Button>

       <p>dsfs</p>
       <Button variant="contained" color="primary" size='small'>
       fullWidth
       </Button>

       <p>dsfs</p>
       <Button variant="contained" color="primary" size='large'>
       fullWidth
       </Button>

       <p>dsfs</p>
       <Button variant="contained" color="primary" size='medium'>
       fullWidth
       </Button> */}
       

       {/* iconos */}

      {/* <DeleteIcon color='secondary'  >

      </DeleteIcon>
      <Icon> start</Icon>
      <Icon> room</Icon>
      <Icon> content_cut</Icon>
      
      <p>fdfd</p>

      <Button
        variant="contained"
        color="secondary"        
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>

      <p>fdfd</p>

      <Button
        variant="contained"
        color="secondary"        
        endIcon={<DeleteIcon />}
      >
        Delete
      </Button>

      <p>sdsfsd</p>
    <IconButton aria-label="delete">
    <DeleteIcon color='secondary'  >

         </DeleteIcon>
      
    </IconButton> */}

    {/* Typografia */}

       {/* <Typography variant="h1" color="primary">
           sadafdsfsfs
       </Typography>

       <Typography variant="body1" color="secondary" align='center' gutterBottom >
           lorem
       </Typography>



     <Typography variant="body1" color="primary" align='center'   >

         lorem
     </Typography> */}

     {/* MAKESTYLE */}

    {/* <Button className={clases.botonPersonalizado} >
       MI BOTON PERSONALIZADO
     </Button> */}

      {/* tema Global */}

      <ThemeProvider theme={theme} >

      <Button variant="contained" color="primary">
        mi boton
      </Button>
       

      <Button variant="contained" color="secondary">
        mi boton
      </Button>
      </ThemeProvider>
     </div>

    );

}

