import styles from './Card.module.css';
import lixeira from './lixeira.png';
import editar from './editar.png';

function Card({ imagem }) {
    return (
        <div className={styles.card}>
            <img src={imagem} alt="capa do vídeo" />
            <div className={styles.opcoes}>
                <button><img src={lixeira} alt="icone de lixeira" /> Deletar</button>
                <button><img src={editar} alt="icone de edição" /> Editar</button>
            </div>
        </div>
    )
}

export default Card;