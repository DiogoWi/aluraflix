import Card from '@/components/Card';
import styles from './CardList.module.css';

function CardList({ categoria, videos }) {
    return (
        videos.length > 0 && <div className={styles.cardList}>
            <label className={styles.etiqueta} style={{ backgroundColor: categoria.cor }}>{categoria.texto}</label>

            <div className={styles.list}>
                {videos.map(video => <Card key={video.id} video={video} />)}
            </div>
        </div>
    )
}

export default CardList;