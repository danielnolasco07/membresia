import {createMuiTheme} from '@material-ui/core/styles';
import purple from "@material-ui/core/colors/purple";
import cyan from "@material-ui/core/colors/cyan";
import deepOrange from "@material-ui/core/colors/deepOrange";

const theme = createMuiTheme({

    palette:{

        primary:{

             //main:purple[500],
             main : cyan[700],
        },
        secondary:{
            main: deepOrange[900],
        },
    }


})

export default theme;