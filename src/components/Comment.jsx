

import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';


export function Comment(){

  return (
    <div className={styles.comment}>
       <Avatar  src='https://i.pinimg.com/736x/ad/55/73/ad5573610b7ff7ded5850ba931589cc3.jpg' alt='' />
       
    <div className={styles.commentBox}>

      <div className={styles.commentContent}>
          <header>
               <div className={styles.authorAndTime}>
                  <strong> Diego Fernandes</strong>
                  <time title="11 de Maio ás 11:35h "dateTime="2022-22-10 08:20:02">Cerca de 2h</time>
               </div>

               <button title='Deletar comentario'>
                  <Trash size={24
                  } />
               </button>
          </header>
          <p>Muinto bom parabens!!</p>
       </div>

        <footer>
           <button>
             <ThumbsUp />
             Aplaudir <span>50</span>
           </button>
        </footer>
       </div>
    </div>
  )

}