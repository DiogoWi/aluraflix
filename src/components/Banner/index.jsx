import styles from './Banner.module.css';
import { useCategoria } from '@/context/CategoriaContext';
import { useVideos } from '@/context/VideosContext';

function Banner() {
    const { categorias } = useCategoria();
    const { videos } = useVideos();
    const numeroAleatorio = Math.floor(Math.random() * videos.length);
    const video = videos[numeroAleatorio];

    const categoria = categorias.find(categoria => categoria.id == video?.categoria);
    const videoIframe = video?.video.substring(video?.video.indexOf('v=', 0) + 2);
    // console.log(video?.video.substring(video?.video.indexOf('v=', 0) + 2))

    return (
        video && categoria && <div className={styles.banner} style={{ backgroundImage: `url(${video.imagem})` }}>
            <div className={styles.background}>
                <div className={styles.wrapperText}>
                    <label style={{ backgroundColor: categoria.cor }}>{categoria.texto}</label>
                    <h2>{video.titulo}</h2>
                    <p>{video.descricao}</p>
                </div>

                <div className={styles.player}>
                    <iframe src={`https://www.youtube.com/embed/${videoIframe}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default Banner;