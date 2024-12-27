import { createContext, useContext, useState } from "react";
import { useVideos } from "./VideosContext";

const ModalContext = createContext();
ModalContext.displayName = 'Modal';

export default function ModalProvider({ children }) {
    const [videoModal, setVideoModal] = useState(null);

    return (
        <ModalContext.Provider value={{ videoModal, setVideoModal }}>
            {children}
        </ModalContext.Provider>
    )
}

export function useModal() {
    const { videoModal, setVideoModal } = useContext(ModalContext);
    const { videos } = useVideos();

    function limparDados() {
        setVideoModal({
            ...videoModal,
            titulo: "",
            imagem: "",
            video: "",
            descricao: ""
        })
    }

    return {
        videoModal,
        setVideoModal,
        limparDados
    }
}