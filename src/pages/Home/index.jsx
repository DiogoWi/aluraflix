import styles from './Home.module.css';
import NavBar from '@/components/NavBar';
import Banner from '@/components/Banner';

function Home() {
  return (
    <>
      <NavBar />
      <Banner />
      <main className={styles.main}>
        <h1>Card</h1>
      </main>
    </>
  )
}

export default Home;