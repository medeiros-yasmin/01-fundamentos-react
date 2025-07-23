import {Post} from './Post.jsx'
import './global.css';
import {Header} from './components/Header.jsx';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar.jsx';
export function App() {

  return (
      <div>
          <Header/>
          <div className={styles.wrapper}>
            <Sidebar />
            <main>
              <Post autor="Yasmin Medeiros" conteudo="Lorem ipsum dolor sit amet." />
              <Post autor="Nathália" conteudo="Conteudo Teste" />
            </main>
          </div>
      </div>
  )
}


