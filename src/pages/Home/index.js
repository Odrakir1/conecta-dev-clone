import React from 'react';
import useStyles from './styles';
import Navbar from '../../components/Navbar';
import Feed from '../../components/Feed';
import Header from '../../components/Header';


function Home(props){

    const styles = useStyles();

    return (
        <div>
            <Header/>

            <main className={styles.main}>
                <Navbar/>
                <Feed/>
            </main>

        </div>
    );
}


export default Home;