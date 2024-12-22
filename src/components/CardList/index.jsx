import Card from '@/components/Card';
import styles from './CardList.module.css';

function CardList() {
    return (
        <div className={styles.cardList}>
            <label className={styles.etiqueta}>Front End</label>

            <div className={styles.list}>
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default CardList;