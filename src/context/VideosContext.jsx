import { createContext, useContext, useState } from "react";
import MockVideos from '@/mocks/videos';

const VideosContext = createContext();
VideosContext.displayName = "Videos";

export default function VideosProvider({ children }) {
    const [videos, setVideos] = useState(MockVideos);

    return (
        <VideosContext.Provider value={{ videos, setVideos }}>
            {children}
        </VideosContext.Provider>
    )
}

export function useVideos() {
    const {videos, setVideos} = useContext(VideosContext);

    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState(1);
    const [imagem, setImagem] = useState('');
    const [video, setVideo] = useState('');
    const [descricao, setDescricao] = useState('');

    function registrarVideo(video) {
        setVideos([...videos, video]);
    }

    function guardarVideo(videoModal) {
        setVideos(videos.map(video => {
            if (video.id === videoModal.id) {
                video.titulo = videoModal.titulo;
                video.categoria = videoModal.categoria;
                video.imagem = videoModal.imagem;
                video.video = videoModal.video;
                video.descricao = videoModal.descricao;
            }

            return video;
        }));
    }

    function excluirVideo(videoSelecionado) {
        setVideos(videos.filter(video => video.id !== videoSelecionado.id));
    }

    function limparDados() {
        setTitulo('');
        setCategoria(1);
        setImagem('');
        setVideo('');
        setDescricao('');
    }

    return {
        videos,
        titulo,
        setTitulo,
        categoria,
        setCategoria,
        imagem,
        setImagem,
        video,
        setVideo,
        descricao,
        setDescricao,
        registrarVideo,
        guardarVideo,
        excluirVideo,
        limparDados
    }
}