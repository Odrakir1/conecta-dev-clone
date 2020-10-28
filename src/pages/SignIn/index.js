import { Avatar, Button, Link, TextField, Typography } from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import useStyles from './style';
import {Grid,Box} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {useNavigate} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import authService from '../../services/authService';
import {useSelector,useDispatch} from 'react-redux';
import logIn from '../../stores/actions/user';


function SignIn(props){

    const user = useSelector(state => state);
    console.log(user);
    const [requestError,setRequestError] = useState('');
    const dispatch = useDispatch();

    const styles = useStyles();

    const navigate = useNavigate();

    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit = data =>{
        authService.signIn(data)
        .then(response=>{
            dispatch(logIn(response.email,response.password));
            navigate("/"); 
        }).catch(err=>{
            setRequestError(err.response.data?.response)
        });
    }

    useEffect(()=>{
        console.log(errors)
    },[errors]);

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
                    {requestError && <Typography variant="body2">{requestError}</Typography>}
                    <form className={styles.form} onSubmit={handleSubmit((onSubmit))}>
                        {errors.email 
                        && 
                        <Grid container justify="center">
                            <Typography variant="body2">
                                {errors.email.message}
                            </Typography>    
                        </Grid>}
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
                                register({ 
                                    required: "Insira seu email",
                                    pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "Insira um endereço de email válido",
                                } })}
                        />

                        {errors.password 
                        && 
                        <Grid container justify="center">
                            <Typography variant="body2">
                                {errors.password}
                            </Typography>    
                        </Grid>}

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
                            inputRef={register({
                                required: true
                            })}
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


    );
}

export default SignIn;