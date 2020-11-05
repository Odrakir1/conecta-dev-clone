import React from 'react';
import useStyles from './styles';
import { Button } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { SvgIcon } from '@material-ui/core';
import { Bell } from 'react-feather';
import Avatar from '@material-ui/core/Avatar';
import {useSelector} from 'react-redux';


function Header(props){

    const styles = useStyles();

    const user = useSelector(state => state);
    console.log(user)

    return(
        <AppBar className={styles.header} position="fixed" color="inherit" /* elevation={0} */>
            <Toolbar>
                <img src="/images/logo.png" alt="logo conecta dev" className={styles.img}/>
                
                <div className={styles.grow}></div>

                <div className={styles.userSection}>
                    <Button style={{marginRight:10}} size="small" variant="contained" color="primary" className={styles.spacing}>
                        Novo post!
                    </Button>
                    
                    <SvgIcon className={styles.spacing}>
                        <Bell/>
                    </SvgIcon>

                    <Avatar alt="Ricardo Moura" src="/" />
                </div>

            </Toolbar>
        </AppBar>
    );
}

export default Header;