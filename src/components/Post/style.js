import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    root:{
        marginBottom: theme.spacing(3)
    },
    subheader:{
        display:"flex",
        alignItems:"center"
    },
    caption:{
        marginRight: theme.spacing(1)
    },
    message:{
        height: 'auto',
        marginBottom: theme.spacing(2),
        padding: '0 25px'
    },
    image:{
        maxHeight: 300,
        width: '100%',
        maxWidth:'100%'
    },
    favorite:{
        marginLeft:'auto'
    }
}));


export default useStyles;