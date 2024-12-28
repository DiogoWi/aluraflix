import styles from './Card.module.css';
import lixeira from './lixeira.png';
import editar from './editar.png';
import { useModal } from '@/context/ModalContext';
import { useVideos } from '@/context/VideosContext';
import { Link } from 'react-router-dom';

function Card({ video }) {
    const { setVideoModal } = useModal();
    const { excluirVideo } = useVideos();

    return (
        <div className={styles.card}>
            <Link to={video.video} target='_blank'><img src={video.imagem} alt="capa do vídeo" /></Link>
            <div className={styles.opcoes}>
                <button onClick={() => excluirVideo(video)}><img src={lixeira} alt="icone de lixeira" /> Deletar</button>
                <button onClick={() => setVideoModal(video)}><img src={editar} alt="icone de edição" /> Editar</button>
            </div>
        </div>
    )
}

export default Card;