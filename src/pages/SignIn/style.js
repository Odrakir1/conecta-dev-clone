import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    container:{
        display:"flex",
        height: '100vh'
    },
    left:{
        display: "flex",
        justifyContent: "center",
        flexDirection:"column",
        alignItems:"center",
        background: 'blue',
        flexBasis: '58%'
    },
    right:{
        background: 'green',
        flexBasis: '42%'
    },
    form:{
        display:"flex",
        flexDirection:"column",
        margin: "64px 32px",
        alignItems:"center"
    }

});

export default useStyles;