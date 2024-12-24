import styles from './Home.module.css';
import categorias from '@/mocks/categorias'
import Banner from '@/components/Banner';
import CardList from '@/components/CardList';
import Modal from '@/components/Modal';

function Home() {
  return (
    <>
      <Banner />
      <main className={styles.main}>
        {categorias.map(categoria => <CardList key={categoria.texto} categoria={categoria} />)}
      </main>
      {/* <Modal /> */}
    </>
  )
}

export default Home;