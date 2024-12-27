import { useCategoria } from '@/context/CategoriaContext';
import styles from './NovoVideo.module.css';
import { useVideos } from '@/context/VideosContext';
import { useState } from 'react';

function NovoVideo() {
    const { categorias } = useCategoria();
    const { videos, registrarVideo } = useVideos();

    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState(1);
    const [imagem, setImagem] = useState('');
    const [video, setVideo] = useState('');
    const [descricao, setDescricao] = useState('');

    return (
        <main className={styles.container}>
            <h1>Novo Vídeo</h1>
            <h2>Complete o formulário para criar um novo card de vídeo.</h2>
            <h3>Criar Card</h3>

            <form className={styles.formulario}>
                <div className={styles.dado}>
                    <label htmlFor="titulo">Título</label>
                    <input type="text" placeholder='Digite o título' id='titulo' onInput={input => setTitulo(input.target.value)} />
                </div>

                <div className={styles.dado}>
                    <label htmlFor="categoria">Categoria</label>
                    <select name="categoria" id="categoria" onChange={select => {
                        setCategoria(Number(select.target.options[select.target.selectedIndex].value));
                    }}>
                        <option disabled>Escolha uma opção</option>
                        {categorias.map(categoria => <option key={categoria.id} value={categoria.id}>{categoria.texto}</option>)}
                    </select>
                </div>

                <div className={styles.dado}>
                    <label htmlFor="imagem" className={styles.imagem}>Imagem</label>
                    <input required type="url" placeholder='Link da imagem' id='imagem' className={styles.imagemInput} 
                    onInput={input => setImagem(input.target.value)} />
                </div>

                <div className={styles.dado}>
                    <label htmlFor="video">Vídeo</label>
                    <input type="url" placeholder='Link do vídeo' id='video' onInput={input => setVideo(input.target.value)} />
                </div>

                <div className={styles.dado}>
                    <label htmlFor="descricao">Descrição</label>
                    <textarea name="descricao" placeholder='Sobre o que é esse vídeo' id="descricao" 
                    onInput={input => setDescricao(input.target.value)}></textarea>
                </div>

                <div className={styles.botoes}>
                    <button type='button' className={styles.guardar} onClick={() => registrarVideo({
                        id: (videos.length + 1),
                        titulo,
                        categoria,
                        imagem,
                        video,
                        descricao
                    })}>Guardar</button>
                    <button>Limpar</button>
                </div>
            </form>
        </main>
    )
}

export default NovoVideo;