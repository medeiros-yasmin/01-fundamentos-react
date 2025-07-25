import { Avatar } from './Avatar';
import {PencilLine} from 'phosphor-react'
import styles from './Sidebar.module.css';

export function Sidebar() {
    
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <div className={styles.profile}>
                <Avatar src="https://github.com/medeiros-yasmin.png"/>
                <strong>Yasmin Medeiros</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                   <PencilLine size={20} /> Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}