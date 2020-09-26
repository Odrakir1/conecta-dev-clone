import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
    header:{
        background: "red",
        width: "100%",
        position: "fixed",
    },
    toolbar: {
        display:"flex",
        alignItems:"center",
        height: "46px",
        justifyContent:"space-between",
        margin: "0 12px"
    },
});

export default styles;