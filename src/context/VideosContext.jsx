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

    return {
        videos,
        setVideos
    }
}