import React from 'react';
import useStyles from './styles';
import Post from '../Post';

function Feed(props){

    const styles = useStyles();

    const posts = 
    [
        {id:1, description:"Lorem ipsum"},
        {id:2, description:"Sit amet"},
    ];

    return(
        <div className={styles.root}>
            {posts.map((item)=>(
                <Post id={item.id} description={item.description}/>
            ))}
        </div>
    );
}

export default Feed;