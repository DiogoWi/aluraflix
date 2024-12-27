import { useModal } from '@/context/ModalContext';
import { useCategoria } from '@/context/CategoriaContext';
import { useVideos } from '@/context/VideosContext';
import styles from './Modal.module.css';
import fechar from './fechar.png';

function Modal() {
    const { categorias } = useCategoria();
    const { videoModal, setVideoModal, limparDados } = useModal();
    const { guardarVideo } = useVideos();

    return (
        videoModal && <div className={styles.overlay}>
            <dialog open className={styles.modal}>
                <h2>Editar Card</h2>
                <button onClick={() => setVideoModal(null)}><img src={fechar} alt="icone fechar" /></button>
                <form method="dialog" className={styles.formulario}>
                    <div className={styles.dado}>
                        <label htmlFor="titulo">Título</label>
                        <input value={videoModal.titulo} onInput={input => setVideoModal({...videoModal, titulo: input.target.value})} type="text" placeholder='Digite o título' id='titulo' />
                    </div>

                    <div className={styles.dado}>
                        <label htmlFor="categoria">Categoria</label>
                        <select name="categoria" id="categoria" value={videoModal.categoria} 
                        onChange={select => {
                            setVideoModal({...videoModal, categoria: Number(select.target.options[select.target.selectedIndex].value)})
                        }}>
                            {categorias.map(categoria => <option key={categoria.id} value={categoria.id}>{categoria.texto}</option>)}
                        </select>
                    </div>

                    <div className={styles.dado}>
                        <label htmlFor="imagem" className={styles.imagem}>Imagem</label>
                        <input value={videoModal.imagem} type="url" placeholder='Link da imagem' id='imagem' className={styles.imagemInput} onInput={input => setVideoModal({...videoModal, imagem: input.target.value})} />
                    </div>

                    <div className={styles.dado}>
                        <label htmlFor="video">Vídeo</label>
                        <input value={videoModal.video} type="url" placeholder='Link do vídeo' id='video' 
                        onInput={input => setVideoModal({...videoModal, video: input.target.value})} />
                    </div>

                    <div className={styles.dado}>
                        <label htmlFor="descricao">Descrição</label>
                        <textarea value={videoModal.descricao} name="descricao" placeholder='Sobre o que é esse vídeo' id="descricao" onInput={input => setVideoModal({...videoModal, descricao: input.target.value})}></textarea>
                    </div>

                    <div className={styles.botoes}>
                        <button onClick={() => {
                            guardarVideo(videoModal);
                            setVideoModal(null);
                        }} className={styles.guardar}>Guardar</button>
                        <button onClick={() => limparDados()}>Limpar</button>
                    </div>
                </form>
            </dialog>
        </div>
    )
}

export default Modal;