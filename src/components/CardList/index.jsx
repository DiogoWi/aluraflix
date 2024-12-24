import Card from '@/components/Card';
import styles from './CardList.module.css';

function CardList({ categoria }) {
    return (
        <div className={styles.cardList}>
            <label className={styles.etiqueta} style={{ backgroundColor: categoria.cor }}>{categoria.texto}</label>

            <div className={styles.list}>
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default CardList;