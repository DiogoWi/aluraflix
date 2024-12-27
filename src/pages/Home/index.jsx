import styles from './Home.module.css';
import Banner from '@/components/Banner';
import CardList from '@/components/CardList';
import Modal from '@/components/Modal';
import { useVideos } from '@/context/VideosContext';
import { useCategoria } from '@/context/CategoriaContext';

function Home() {
  const { categorias } = useCategoria();
  const { videos } = useVideos();

  return (
    <>
      <Banner />
      <main className={styles.main}>
        {categorias.map(categoria => <CardList 
          key={categoria.id} 
          categoria={categoria} 
          videos={videos.filter(video => video.categoria === categoria.id)} />)}
      </main>
      <Modal />
    </>
  )
}

export default Home;