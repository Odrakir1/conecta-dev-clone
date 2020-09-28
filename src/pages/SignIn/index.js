import { Avatar, Button, Link, TextField, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './style';
import {Grid,Box} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
/* import {useNavigate} from 'react-router-dom'; */
import { useForm } from 'react-hook-form';
//import axios from 'axios';
 

function SignIn(props){

    const styles = useStyles();

    /* const navigate = useNavigate(); */

    const { register, handleSubmit, errors } = useForm();
    console.log(errors)
    const onSubmit = data =>{
        console.log(data)
    }

    return(

        <Grid container className={styles.root}>
            <Grid 
                container 
                md={7}
                direction="column"
                justify="center"
                alignItems="center"
                className={styles.image}
                item
            >

                <Typography variant='h3' className={styles.typographyTitle}>
                    Conectando desenvolvedores de software num só lugar!
                </Typography>

                <Typography variante='body2' className={styles.typographySubTitle}>
                    Registre-se gratuitamente e expanda suas conexões.
                </Typography>
            </Grid>

            <Grid md={5} item>
                <Box display="flex" flexDirection="column" alignItems="center" m="8">
                    <Avatar className={styles.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography variant="h5">
                        Acesso
                    </Typography>

                    <form className={styles.form} onSubmit={handleSubmit((onSubmit))}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            label="Email"
                            inputRef={
                                register(
                                    { required: "Insira seu email",
                                    pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "Insira um endereço de email válido",
                                } })}
                        />

                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            name="password"
                            autoFocus
                            label="Senha"
                            type="password"
                            autoComplete="current-password"
                            inputRef={register}
                        />

                        <Button
                            fullWidth
                            color="primary"
                            variant="contained"
                            className={styles.button}
                            type="submit"
                            /* onClick={()=>navigate("/")} */
                        >
                            Entrar
                        </Button>

                        <Grid container direction="column" justify="center" alignItems="center">
                            <Grid item className={styles.link}>
                                <Link >Esqueceu a senha?</Link>
                            </Grid>

                            <Grid item className={styles.link}>
                                <Link >Não tem uma conta? Registre-se!</Link>
                            </Grid>
                        </Grid>

                    </form>

                </Box>
            </Grid>  
        </Grid>


      /* <div className={styles.container}>
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
      </div>   */
    );
}

export default SignIn;