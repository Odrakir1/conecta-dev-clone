import { Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './style';

function SignIn(props){

    const styles = useStyles();

    return(
      <div className={styles.container}>
        <div className={styles.left}>
            <Typography variant='h3'>
                Conectando desenvolvedores de software num só lugar!
            </Typography>
            
            <Typography variante='body2'>
                Registre-se gratuitamente e expanda suas conexões.
            </Typography>
        </div>  

        <div className={styles.right}>
            <form className={styles.form}>
                <h4>Acesso</h4>
                <input/>
                <input/>
            </form>
        </div>  
      </div>  
    );
}

export default SignIn;