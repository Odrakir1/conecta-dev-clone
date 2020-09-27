import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme)=>({
    root:{
        padding:theme.spacing(2),
        width:275,
        marginTop:50
    },
    button:{
        width:"100%"
    }
}))

/* const useStyles = makeStyles({
    navbar:{
        width: 275,
        padding:16,

    }

}) */

export default useStyles;