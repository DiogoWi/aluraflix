import styles from './Card.module.css';
import lixeira from './lixeira.png';
import editar from './editar.png';
import { useModal } from '@/context/ModalContext';
import { useVideos } from '@/context/VideosContext';

function Card({ video }) {
    const { setVideoModal } = useModal();
    const { excluirVideo } = useVideos();

    return (
        <div className={styles.card}>
            <img src={video.imagem} alt="capa do vídeo" />
            <div className={styles.opcoes}>
                <button onClick={() => excluirVideo(video)}><img src={lixeira} alt="icone de lixeira" /> Deletar</button>
                <button onClick={() => setVideoModal(video)}><img src={editar} alt="icone de edição" /> Editar</button>
            </div>
        </div>
    )
}

export default Card;