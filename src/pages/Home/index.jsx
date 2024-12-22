import styles from './Home.module.css';
import NavBar from '@/components/NavBar';
import Banner from '@/components/Banner';
import CardList from '@/components/CardList';

function Home() {
  return (
    <>
      <NavBar />
      <Banner />
      <main className={styles.main}>
        <CardList />
      </main>
    </>
  )
}

export default Home;