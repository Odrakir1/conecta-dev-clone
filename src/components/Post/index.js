import React from 'react';
//import {}

function Post(props){
    return(
        <div key={props.id}>
            {props.description}
        </div>
    );
}

export default Post;