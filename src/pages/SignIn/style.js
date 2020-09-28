import {makeStyles} from '@material-ui/core';


const useStyles = makeStyles((theme)=>({
    root:{
        height: '100vh',
    },
    image:{
        backgroundImage: 'url(/images/background.jpg)',
        backgroundPosition: "center",
        backgroundSize:"cover",
        backgroundRepeat:"none"
    },
    typographyTitle:{
        color: '#fff',
        fontSize:"1.8rem",
        lineHeight:"45px"
    },
    typographySubTitle:{
        color: 'rgb(255,255,255,0.7)',
        fontSize:"1rem",
        lineHeight:"30px",
        marginTop:"15px"
    },
    avatar:{
        background: theme.palette.primary.main,
        marginTop: theme.spacing(2)
    },
    form:{
        margin: theme.spacing(4)
    },
    button:{
        marginTop: theme.spacing(3)
    },
    link:{
        marginTop: theme.spacing(2),
        cursor: "pointer"
    }

   /*  container:{
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
    } */

}));

export default useStyles;