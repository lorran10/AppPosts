import {Header} from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';
import styles from './App.module.css';
import './global.css';



const posts = [
  {
    id:1,
    author:{
      avatarUrl:'https://i.pinimg.com/474x/61/f4/71/61f4719ddfeeda214b6d8da3e321ec39.jpg',
      name: 'Loran de Sousa',
      role:'Estudante',

    },
    content: [
      {type:'paragraph',content:'👍 - Fala galera!!!'},
      {type:'paragraph',content:'Acabei de subir mais um projeto no meu portifolio. E um projeto de uma pokerdex usando uma Api.'},
      {type:'Link',content:'https://github.com/lorran10/Pokedex-'},

    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id:2,
    author:{
      avatarUrl:'https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png',
      name: 'Marcos Souza',
      role:'Estudante',

    },
    content: [
      {type:'paragraph',content:'👍 - Fala galera!!!'},
      {type:'paragraph',content:'Acabei de subir mais um projeto no meu portifolio. E um projeto de uma pokerdex usando uma Api.'},
      {type:'Link',content:'https://github.com/lorran10/Pokedex-'},

    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  
];

export function App() {

  return(
    <div>
       <Header />
       
      <div className={styles.wrapper}>
         <Sidebar />
         <main>
          {posts.map(posts =>{

           return(
             <Post 
              author = {posts.author}
              content = {posts.content}
              publishedAt = {posts.publishedAt}
           
             />
           )
          })}
       </main>
       </div>
    </div>
    )
 }