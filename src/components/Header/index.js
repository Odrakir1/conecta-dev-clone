import React from 'react';
import useStyles from './styles';


function Header(props){

    const styles = useStyles();

    return(
        <header className={styles.header}>
            <div className={styles.toolbar}>
                <div>esq</div>
                <div>
                    <button>Novo post</button>
                    <span>1</span>
                    <span>2</span>
                </div>
            </div>
        </header>
    );
}

export default Header;