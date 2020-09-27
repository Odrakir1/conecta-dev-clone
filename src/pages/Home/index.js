import React from 'react';
import useStyles from './styles';
import Navbar from '../../components/Navbar';
import Feed from '../../components/Feed';
import Header from '../../components/Header';
import { Container,Box } from '@material-ui/core';


function Home(props){

    const styles = useStyles();

    return (
        <div className={styles.root}>
            <Header/>
            <main className={styles.main}>
                <Container maxWidth="lg">
                    <Box display="flex">
                        <Navbar/>
                        <Feed/>
                    </Box>
                </Container>
            </main>

        </div>
    );
}


export default Home;