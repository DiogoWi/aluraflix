import { useVideos } from '@/context/VideosContext';
import styles from './Banner.module.css';
import categorias from '@/mocks/categorias'

function Banner() {
    const { videos } = useVideos();
    const numeroAleatorio = Math.floor(Math.random() * videos.length);
    const video = videos[numeroAleatorio];
    const categoria = categorias.filter(categoria => categoria.id === video.categoria)[0];

    return (
        <div className={styles.banner} style={{ backgroundImage: `url(${video.imagem})` }}>
            <div className={styles.background}>
                <div className={styles.wrapperText}>
                    <label style={{ backgroundColor: categoria.cor }} >{categoria.texto}</label>
                    <h2>{video.titulo}</h2>
                    <p>{video.descricao}</p>
                </div>

                <div className={styles.player}>
                    <iframe src={video.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default Banner;