import styles from './Card.module.css';
import banner from '/banner.png';
import lixeira from './lixeira.png';
import editar from './editar.png';

function Card() {
    return (
        <div className={styles.card}>
            <img src={banner} alt="capa do vídeo" />
            <div className={styles.opcoes}>
                <button><img src={lixeira} alt="icone de lixeira" /> Deletar</button>
                <button><img src={editar} alt="icone de edição" /> Editar</button>
            </div>
        </div>
    )
}

export default Card;