import styles from './Modal.module.css';

function Modal() {
    return (
        <div className={styles.overlay}>
            <dialog open={true} className={styles.modal}>
                <h2>Editar Card</h2>
                <form method="dialog" className={styles.formulario}>
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
                        <label htmlFor="imagem" className={styles.imagem}>Imagem</label>
                        <input type="url" placeholder='Link da imagem' id='imagem' className={styles.imagemInput} />
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
            </dialog>
        </div>
    )
}

export default Modal;