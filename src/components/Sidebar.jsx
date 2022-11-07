
import styles from './Sidebar.module.css'
import { PencilLine} from 'phosphor-react'
import { Avatar } from './Avatar';

export function Sidebar(){
    return(
 <aside className={styles.sidebar}> 

    <img
    className={styles.cover} src='https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=100'
    />

    <div className={styles.profile}>
    <Avatar  src="https://i.pinimg.com/originals/03/a8/11/03a811b919bead0487c8458d18f388af.jpg"
    />
    
    <strong> Loran de Sousa</strong>
        <span> Web Developer</span>
    </div>

    <footer>
        <a href="#">
            <PencilLine size={20} />
            Editar seu pefil
        </a>
    </footer>

 </aside>
      


    );
}