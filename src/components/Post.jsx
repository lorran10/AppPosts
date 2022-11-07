
import ptBR from 'date-fns/locale/pt-BR'
import {format, formatDistanceToNow} from 'date-fns';
import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

export function Post( {author, publishedAt, content}) {
  const publishedDateFormatted = format(publishedAt,"d 'de' LLLL 'ás' HH:mm'h'", {
    locale:ptBR,
  })
const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
 locale: ptBR,
 addSuffix: true,
})


   
  return(
   <article className={styles.posts}>
    <header>
        <div className={styles.author}>
          <Avatar  src={author.avatarUrl} />
          <div className={styles.authorInfo}>
             <strong>{author.name}</strong>
             <span>{author.role}</span>
          </div>
        </div>
        <time title= {publishedDateFormatted} dateTime={publishedAt.toISOString()}>
            { publishedDateRelativeToNow }
        </time>
    
    </header>


    <div className={styles.content}>
      {content.map(line => {
        if (line.type == 'paragraph'){
          return <p> {line.content}</p>;
        } else if (line.type == 'link'){
          return <p><a href="3">{line.content}</a></p>;
          

        }


      })}
        
    </div>

    <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong> 
        <textarea placeholder="Deixe seu comentario"/>

        <footer>
        <button type="submit">Publicar</button>
        </footer>

      </form>
      <div className={styles.commentList}>
        <Comment />
      
  

      </div>
   </article>

   )  

}