import React from 'react';
import useStyles from './styles';
import Post from '../Post';

function Feed(props){

    const styles = useStyles();

    const posts = 
    [
        {
            id:1,
            author:{
                id:1,
                name: "Ricardo Moura",
                username: "ricardo_",
                avatar:'/images/avatars/avatar1.png'
            },
            title: "Criando um app com React",
            date: "Set 27, 2020",
            description: "Olá, pessoal! Qual o framework que vocês mais utilizam?",
            image: "/images/posts/post1.png",
            hashtags: "#react, #primeiroApp"
        },
        {
            id:2,
            author:{
                id:1,
                name: "Ricardo Moura",
                username: "ricardo_",
                avatar:'/images/avatars/avatar1.png'
            },
            title: "Como utilizar React Hooks",
            date: "Set 28, 2020",
            description: "Olá, pessoal! Vamos aprender a utilizar essa mão-na-roda?",
            image: "/images/posts/post2.png",
            hashtags: "#react, #reactHooks"
        },
        {
            id:3,
            author:{
                id:1,
                name: "Ricardo Moura",
                username: "ricardo_",
                avatar:'/images/avatars/avatar1.png'
            },
            title: "Criando uma aplicação do zero com Vue.js",
            date: "Set 29, 2020",
            description: "Hoje vamos dar os primeiros passos com o framework Vue.js",
            image: "/images/posts/post8.png",
            hashtags: "#vuejs, #primeirosPassos"
        },
        {
            id:4,
            author:{
                id:1,
                name: "Ricardo Moura",
                username: "ricardo_",
                avatar:'/images/avatars/avatar1.png'
            },
            title: "Criando um layout responsivo com React",
            date: "Set 30, 2020",
            description: "Hoje vamos aprender a como utilizar responsividade com React!",
            image: "/images/posts/post9.jpeg",
            hashtags: "#react, #responsividade"
        },
    ];

    return(
        <div className={styles.root}>
            {posts.map((item)=>(
                <Post key={item.id} post={item}/>
            ))}
        </div>
    );
}

export default Feed;