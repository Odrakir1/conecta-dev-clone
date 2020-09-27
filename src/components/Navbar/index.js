import React from 'react';
import useStyles from './styles';
import 
{Paper, 
Button,
ListSubheader,
ListItem,
ListItemText
} 
from '@material-ui/core';

function Navbar(props){

    const styles = useStyles();

    const tags = [
        {id:1,name:'React'},
        {id:2,name:'ES6'},
        {id:3,name:'Flutter'},
        {id:4,name:'NextJS'},
        {id:5,name:'Docker'},
        {id:6,name:'PHP'},
        {id:7,name:'Laravel'},
    ]

    return(
        <Paper className={styles.root}>
            <Button variant="outlined" color="secondary" className={styles.button}> 
                Registre-se
            </Button>

            <ListSubheader>
                Tags em alta
            </ListSubheader>
            {tags.map((item)=>(
                <ListItem key={item.id}>
                <ListItemText>
                    {`#${item.name}`}
                </ListItemText>
            </ListItem>
            ))}
            <ListItem>
                
            </ListItem>
        </Paper>
    );
}

export default Navbar;