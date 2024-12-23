import styles from './NovoVideo.module.css';

function NovoVideo() {
    return (
        <main className={styles.container}>
            <h1>Novo Vídeo</h1>
            <h2>Complete o formulário para criar um novo card de vídeo.</h2>
            <h3>Criar Card</h3>

            <form className={styles.formulario}>
                <div className={styles.dado}>
                    <label htmlFor="titulo">Título</label>
                    <input type="text" placeholder='Digite o título' id='titulo' />
                </div>

                <div className={styles.dado}>
                    <label htmlFor="categoria">Categoria</label>
                    <select name="categoria" id="categoria">
                        <option value="1">teste</option>
                    </select>
                </div>

                <div className={styles.dado}>
                    <label htmlFor="imagem">Imagem</label>
                    <input type="url" placeholder='Link da imagem' id='imagem' />
                </div>

                <div className={styles.dado}>
                    <label htmlFor="video">Vídeo</label>
                    <input type="url" placeholder='Link do vídeo' id='video' />
                </div>

                <div className={styles.dado}>
                    <label htmlFor="descricao">Descrição</label>
                    <textarea name="descricao" placeholder='Sobre o que é esse vídeo' id="descricao"></textarea>
                </div>

                <div className={styles.botoes}>
                    <button className={styles.guardar}>Guardar</button>
                    <button>Limpar</button>
                </div>
            </form>
        </main>
    )
}

export default NovoVideo;