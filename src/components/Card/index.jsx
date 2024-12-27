import styles from './Card.module.css';
import lixeira from './lixeira.png';
import editar from './editar.png';
import { useModal } from '@/context/ModalContext';

function Card({ video }) {
    const { setVideoModal } = useModal();

    return (
        <div className={styles.card}>
            <img src={video.imagem} alt="capa do vídeo" />
            <div className={styles.opcoes}>
                <button><img src={lixeira} alt="icone de lixeira" /> Deletar</button>
                <button onClick={() => setVideoModal(video)}><img src={editar} alt="icone de edição" /> Editar</button>
            </div>
        </div>
    )
}

export default Card;