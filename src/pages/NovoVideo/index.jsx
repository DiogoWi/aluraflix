import { useCategoria } from '@/context/CategoriaContext';
import styles from './NovoVideo.module.css';
import { useVideos } from '@/context/VideosContext';
import { useState } from 'react';

function NovoVideo() {
    const { categorias } = useCategoria();
    const { 
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
        limparDados
    } = useVideos();

    function verificacao() {
        if (titulo == '') {
            alert('Não foi dado um título ao vídeo!')
            return
        }

        if (imagem == '') {
            alert('Não foi adicionado um link de imagem!')
            return
        }

        if (video == '') {
            alert('Não foi adicionado um link de vídeo!')
            return
        }

        registrarVideo({
            id: (videos.length + 1),
            titulo,
            categoria,
            imagem,
            video,
            descricao
        });

        limparDados();
    }

    return (
        <main className={styles.container}>
            <h1>Novo Vídeo</h1>
            <h2>Complete o formulário para criar um novo card de vídeo.</h2>
            <h3>Criar Card</h3>

            <form className={styles.formulario}>
                <div className={styles.dado}>
                    <label htmlFor="titulo">Título</label>
                    <input type="text" placeholder='Digite o título' id='titulo' value={titulo} onInput={input => setTitulo(input.target.value)} />
                </div>

                <div className={styles.dado}>
                    <label htmlFor="categoria">Categoria</label>
                    <select value={categoria} name="categoria" id="categoria" onChange={select => {
                        setCategoria(Number(select.target.options[select.target.selectedIndex].value));
                    }}>
                        <option disabled>Escolha uma opção</option>
                        {categorias.map(categoria => <option key={categoria.id} value={categoria.id}>{categoria.texto}</option>)}
                    </select>
                </div>

                <div className={styles.dado}>
                    <label htmlFor="imagem" className={styles.imagem}>Imagem</label>
                    <input required type="url" placeholder='Link da imagem' id='imagem' value={imagem} className={styles.imagemInput} 
                    onInput={input => setImagem(input.target.value)} />
                </div>

                <div className={styles.dado}>
                    <label htmlFor="video">Vídeo</label>
                    <input type="url" placeholder='Link da barra de pesquisa do Youtube' id='video' value={video} onInput={input => setVideo(input.target.value)} />
                </div>

                <div className={styles.dado}>
                    <label htmlFor="descricao">Descrição</label>
                    <textarea name="descricao" placeholder='Sobre o que é esse vídeo' id="descricao" value={descricao} 
                    onInput={input => setDescricao(input.target.value)}></textarea>
                </div>

                <div className={styles.botoes}>
                    <button type='button' className={styles.guardar} onClick={() => verificacao()}>Guardar</button>

                    <button type='button' onClick={() => limparDados()}>Limpar</button>
                </div>
            </form>
        </main>
    )
}

export default NovoVideo;