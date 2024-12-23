import styles from './Home.module.css';
import Banner from '@/components/Banner';
import CardList from '@/components/CardList';

function Home() {
  return (
    <>
      <Banner />
      <main className={styles.main}>
        <CardList />
      </main>
    </>
  )
}

export default Home;