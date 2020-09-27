import React from 'react';
import useStyles from './style';
import {
Card,
CardContent,
CardHeader,
CardActions,
Typography, 
Avatar,
IconButton,
CardActionArea
} from '@material-ui/core'

import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import BookmarkIcon from '@material-ui/icons/Bookmark';


function Post({post}){

    const styles = useStyles();

    return(
        <Card key={post.id} className={styles.root}>
            <CardHeader avatar={<Avatar src={post.author.avatar}/>} 
                title={<Typography variant="h6">{post.title}</Typography>}
                subheader={
                    <div className={styles.subheader}>
                        <Typography variant="caption" className={styles.caption}>
                            {"Avaliado por "}
                        </Typography>
                        <Typography variant="subtitle2" className={styles.caption}>
                            {post.author.name}
                        </Typography>
                        <Typography variant="caption" className={styles.caption}>
                            {post.date}
                        </Typography>
                    </div>
                }
            />

            <CardContent>
                <Typography 
                    className={styles.message}
                    variant="body1"
                >
                    {post.hashtags}
                </Typography>
                <CardActionArea>
                    <img src={post.image} alt={post.description} className={styles.image}/>
                </CardActionArea>

            </CardContent>

            <CardActions disableSpacing>
                <IconButton aria-label="like">

                    <FavoriteIcon/>

                    <Typography
                    style={{cursor:'pointer'}}
                    color="textSecondary"
                    variant="body2"
                    >
                        {'10'}
                    </Typography>

                </IconButton>
                
                <IconButton aria-label="comment">
                    
                    <MessageIcon/>

                    <Typography
                    style={{cursor:'pointer'}}
                    color="textSecondary"
                    variant="body2"
                    >
                        {'10'}
                    </Typography>

                </IconButton>

                <IconButton className={styles.favorite}>
                    <BookmarkIcon/>
                </IconButton>

            </CardActions>
        </Card>
    );
}

export default Post;