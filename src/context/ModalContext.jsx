import { createContext, useContext, useState } from "react";

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

    return {
        videoModal,
        setVideoModal
    }
}